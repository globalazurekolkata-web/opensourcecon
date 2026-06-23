import { useState, useEffect, useRef } from 'react';
import { 
  LogOut, 
  Printer, 
  Calendar, 
  CheckCircle, 
  ArrowLeft, 
  Sparkles, 
  QrCode, 
  Search, 
  Copy, 
  Check, 
  Share2, 
  Edit3, 
  SlidersHorizontal,
  Coffee,
  Mic,
  Laptop,
  Users,
  Award,
  Bookmark,
  Camera
} from 'lucide-react';
import { RiGithubFill, RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { AuthService } from '../services/auth';
import { scheduleData } from '../data/schedule';
import Button from '../components/ui/Button';

// Helper to convert hex to RGB for dynamic glows
function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return isNaN(r) || isNaN(g) || isNaN(b) ? { r: 82, g: 210, b: 55 } : { r, g, b };
}

// Client-side image resizing and compression
function compressImage(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (event) => {
    const img = new Image();
    img.src = event.target.result;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 200;
      const MAX_HEIGHT = 200;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.82); // JPEG quality 82% (balanced size/quality)
      callback(dataUrl);
    };
  };
}

// Preset Accent Colors
const PRESET_COLORS = [
  { name: 'Neon Green', hex: '#52D237' },
  { name: 'Cyber Cyan', hex: '#00F0FF' },
  { name: 'Laser Pink', hex: '#FF007A' },
  { name: 'Solar Orange', hex: '#FF9F00' }
];

// Preset Themes
const PRESET_THEMES = [
  { id: 'neon-dark', name: 'Cyber Glow', desc: 'Sleek dark card with custom neon glow' },
  { id: 'glass', name: 'Frosted Glass', desc: 'Translucent glass card with neon accents' },
  { id: 'cyberpunk', name: 'Neo Tokyo', desc: 'Aggressive yellow styling with dark glyphs' },
  { id: 'matrix', name: 'Digital Rain', desc: 'Lime green binary code fall matrix' },
  { id: 'aurora', name: 'Aurora Glow', desc: 'Animated cosmic auroras swirling behind' },
  { id: 'carbon', name: 'Midnight Carbon', desc: 'Sleek carbon-fiber weaves with accent lines' },
  { id: 'arcade', name: 'Retro Arcade', desc: 'Chunky 8-bit grid console and retro fonts' }
];

export default function ProfilePage({ user, onLogout, onUpdateUser }) {
  // Redirect to login if user is missing, using useEffect to comply with rules of hooks
  useEffect(() => {
    if (!user) {
      window.location.hash = '#login';
    }
  }, [user]);

  // Active Panel Tab state
  const [activeTab, setActiveTab] = useState('pass'); // 'pass', 'frame', 'itinerary', 'edit', 'swag'

  // Edit Profile Form States
  const [editName, setEditName] = useState(user?.name || '');
  const [editCompany, setEditCompany] = useState(user?.company || '');
  const [editRole, setEditRole] = useState(user?.role || '');
  const [editGithub, setEditGithub] = useState(user?.github || '');
  const [editLinkedin, setEditLinkedin] = useState(user?.linkedin || '');
  const [editTwitter, setEditTwitter] = useState(user?.twitter || '');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Itinerary states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('all'); // 'all', 'talk', 'workshop', 'panel', 'break'
  const [showBookmarkedOnly, setShowBookmarkedOnly] = useState(false);

  // Scanner Simulator States
  const [isScanning, setIsScanning] = useState(false);
  const [scanState, setScanState] = useState('idle'); // 'idle', 'scanning', 'success'
  const [scanLogs, setScanLogs] = useState([]);
  
  // Custom Swag States
  const [badgeCopied, setBadgeCopied] = useState(false);

  // Ticket 3D Parallax & Holographic states
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [holoPos, setHoloPos] = useState({ x: 50, y: 50 });

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates around center (value between -1 and 1)
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = (x - xc) / xc; 
    const dy = (y - yc) / yc; 
    
    setTilt({
      x: -dy * 12, // tilt up/down (rotateX)
      y: dx * 12   // tilt left/right (rotateY)
    });
    
    setHoloPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleCardMouseEnter = () => {
    setIsHovered(true);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Frame Photo Generator States
  const [customImage, setCustomImage] = useState('');
  const [zoom, setZoom] = useState(1.0);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [syncWithProfile, setSyncWithProfile] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);

  // Fallback defaults for customizable attributes
  const accentColor = user?.accentColor || '#52D237';
  const passTheme = user?.passTheme || 'neon-dark';
  const bookmarks = user?.bookmarks || [];

  // Derived state: Active image for frame (removes synchronous setState-in-effect warning)
  const frameImage = syncWithProfile ? (user?.avatarUrl || '') : customImage;

  const handleLogoutClick = () => {
    AuthService.logout();
    onLogout();
    window.location.hash = '#home';
  };

  const handlePrint = () => {
    window.print();
  };

  const handleGoBackHome = () => {
    window.location.hash = '#home';
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Color and theme change handlers
  const handleUpdateAccent = (colorHex) => {
    try {
      const updated = AuthService.updateProfile(user.email, { accentColor: colorHex });
      if (onUpdateUser) onUpdateUser(updated);
    } catch (e) {
      console.error('Failed to update accent color', e);
    }
  };

  const handleUpdateTheme = (themeId) => {
    try {
      const updated = AuthService.updateProfile(user.email, { passTheme: themeId });
      if (onUpdateUser) onUpdateUser(updated);
    } catch (e) {
      console.error('Failed to update theme', e);
    }
  };

  // Profile picture file handler
  const handleAvatarFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setFormError('Please select a valid image file (PNG/JPG).');
      return;
    }

    setFormError('');
    setFormSuccess('');

    compressImage(file, (base64Url) => {
      try {
        const updated = AuthService.updateProfile(user.email, { avatarUrl: base64Url });
        if (onUpdateUser) onUpdateUser(updated);
        setFormSuccess('Profile picture updated successfully!');
        setTimeout(() => setFormSuccess(''), 3000);
      } catch (err) {
        setFormError('Failed to save avatar image: ' + err.message);
      }
    });
  };

  // Profile picture remove handler
  const handleRemoveAvatar = () => {
    try {
      const updated = AuthService.updateProfile(user.email, { avatarUrl: '' });
      if (onUpdateUser) onUpdateUser(updated);
      setFormSuccess('Profile picture removed.');
      setTimeout(() => setFormSuccess(''), 3000);
    } catch (err) {
      setFormError('Failed to remove picture: ' + err.message);
    }
  };

  // Edit profile form submit
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!editName.trim()) {
      setFormError('Name is required');
      return;
    }

    try {
      const updated = AuthService.updateProfile(user.email, {
        name: editName.trim(),
        company: editCompany.trim() || 'Self-Employed',
        role: editRole.trim() || 'Developer',
        github: editGithub.trim(),
        linkedin: editLinkedin.trim(),
        twitter: editTwitter.trim()
      });
      if (onUpdateUser) onUpdateUser(updated);
      setFormSuccess('Profile details updated successfully!');
      setTimeout(() => setFormSuccess(''), 3000);
    } catch (e) {
      setFormError(e.message || 'Failed to update profile.');
    }
  };

  // Bookmark actions
  const handleToggleBookmark = (sessionId) => {
    try {
      let updatedBookmarks;
      if (bookmarks.includes(sessionId)) {
        updatedBookmarks = bookmarks.filter(id => id !== sessionId);
      } else {
        updatedBookmarks = [...bookmarks, sessionId];
      }

      const updated = AuthService.updateProfile(user.email, { bookmarks: updatedBookmarks });
      if (onUpdateUser) onUpdateUser(updated);
    } catch (e) {
      console.error('Failed to update bookmarks', e);
    }
  };

  // Audio synthesizer for premium scanner check-in feedback
  const playSuccessChime = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(523.25, now); // C5
      gain.gain.setValueAtTime(0.08, now);
      osc.start(now);
      
      osc.frequency.setValueAtTime(659.25, now + 0.12); // E5
      gain.gain.setValueAtTime(0.08, now + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn('Audio Context chime blocked or not supported by browser security.', e);
    }
  };

  // Run Check-in QR Scanner simulation
  const startScanning = () => {
    setIsScanning(true);
    setScanState('scanning');
    setScanLogs(['[SYSTEM] Optical Badge Reader initialized...']);

    const logs = [
      '[INFO] Laser targeting system aligned.',
      `[INFO] Decoding pass token for ticket: ${user.ticketNo}`,
      '[API] Sending verification query to checkin.opensourcecon.in...',
      '[API] Verifying attendee credentials & digital signature...',
      '[SUCCESS] Token validated! Check-in authorized.',
      `[SUCCESS] Access Granted: ${user.name} (${user.tier})`
    ];

    logs.forEach((logText, index) => {
      setTimeout(() => {
        setScanLogs(prev => [...prev, logText]);
        if (index === logs.length - 1) {
          setScanState('success');
          playSuccessChime();
        }
      }, (index + 1) * 600);
    });
  };

  const closeScanner = () => {
    setIsScanning(false);
    setScanState('idle');
    setScanLogs([]);
  };

  // Canvas Reposition Mouse Drag Listeners
  const handleMouseDown = (e) => {
    if (!frameImage) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - panX, y: clientY - panY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !frameImage) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPanX(clientX - dragStart.x);
    setPanY(clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Canvas renderer trigger
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !user) return;
    const ctx = canvas.getContext('2d');

    // Draw attendee photo frame on Canvas (inlined inside useEffect to keep dependencies self-contained)
    const drawFrameOverlay = (ctx, size) => {
      const border = 14;
      
      // 1. Draw outer black border frame
      ctx.lineWidth = border;
      ctx.strokeStyle = '#080C16';
      ctx.strokeRect(border/2, border/2, size - border, size - border);
      
      // 2. Draw accent neon inner border line
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = accentColor;
      ctx.strokeRect(border + 2, border + 2, size - (border * 2) - 4, size - (border * 2) - 4);
      
      // 3. Draw tech corner brackets
      const cornerLen = 35;
      ctx.lineWidth = 4;
      ctx.strokeStyle = accentColor;
      
      // Top-left
      ctx.beginPath();
      ctx.moveTo(border + 8, border + 8 + cornerLen);
      ctx.lineTo(border + 8, border + 8);
      ctx.lineTo(border + 8 + cornerLen, border + 8);
      ctx.stroke();
      
      // Top-right
      ctx.beginPath();
      ctx.moveTo(size - border - 8 - cornerLen, border + 8);
      ctx.lineTo(size - border - 8, border + 8);
      ctx.lineTo(size - border - 8, border + 8 + cornerLen);
      ctx.stroke();
      
      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(border + 8, size - border - 8 - cornerLen);
      ctx.lineTo(border + 8, size - border - 8);
      ctx.lineTo(border + 8 + cornerLen, size - border - 8);
      ctx.stroke();
      
      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(size - border - 8 - cornerLen, size - border - 8);
      ctx.lineTo(size - border - 8, size - border - 8);
      ctx.lineTo(size - border - 8, size - border - 8 - cornerLen);
      ctx.stroke();
      
      // 4. Draw bottom badge details banner
      const bannerHeight = 88;
      ctx.fillStyle = 'rgba(8, 12, 22, 0.92)';
      ctx.fillRect(border + 3, size - border - bannerHeight, size - (border * 2) - 6, bannerHeight - 3);
      
      // Divider line on top of bottom banner
      ctx.lineWidth = 1;
      ctx.strokeStyle = `${accentColor}70`;
      ctx.beginPath();
      ctx.moveTo(border + 3, size - border - bannerHeight);
      ctx.lineTo(size - border - 3, size - border - bannerHeight);
      ctx.stroke();
      
      // Main Brand text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 22px "Mona Sans", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText("OpenSourceCon", border + 24, size - border - bannerHeight + 36);
      
      ctx.fillStyle = accentColor;
      ctx.font = '900 13px "Mona Sans", sans-serif';
      ctx.fillText("KOLKATA '26", border + 24, size - border - bannerHeight + 54);
      
      // Location Details
      ctx.fillStyle = '#9CA3AF';
      ctx.font = '500 10px "Mona Sans", sans-serif';
      ctx.fillText("DEC 5, 2026 • NEWTOWN", border + 24, size - border - bannerHeight + 71);

      // Pass Tier badge inside frame
      const labelText = (user.tier || 'ATTENDEE').toUpperCase();
      ctx.fillStyle = accentColor;
      
      const badgeWidth = 120;
      const badgeHeight = 28;
      const badgeX = size - border - badgeWidth - 24;
      const badgeY = size - border - bannerHeight + 28;
      
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 1.5;
      ctx.fillStyle = `${accentColor}12`;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 6);
      } else {
        ctx.rect(badgeX, badgeY, badgeWidth, badgeHeight);
      }
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 10px "Mona Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labelText, badgeX + (badgeWidth / 2), badgeY + 17);
      
      // 5. Draw top ribbon banner "I'M ATTENDING!"
      const ribbonWidth = 200;
      const ribbonHeight = 32;
      const ribbonX = (size - ribbonWidth) / 2;
      const ribbonY = border + 12;
      
      ctx.fillStyle = '#080C16';
      ctx.strokeStyle = accentColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(ribbonX, ribbonY, ribbonWidth, ribbonHeight, 8);
      } else {
        ctx.rect(ribbonX, ribbonY, ribbonWidth, ribbonHeight);
      }
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'black 12px "Mona Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText("I'M ATTENDING!", size / 2, ribbonY + 20);
    };
    
    const size = 500;
    canvas.width = size;
    canvas.height = size;
    
    ctx.fillStyle = '#070C16';
    ctx.fillRect(0, 0, size, size);
    
    if (frameImage) {
      const img = new Image();
      img.src = frameImage;
      img.onload = () => {
        const wRatio = size / img.width;
        const hRatio = size / img.height;
        const baseRatio = Math.max(wRatio, hRatio);
        
        const w = img.width * baseRatio * zoom;
        const h = img.height * baseRatio * zoom;
        
        const x = (size - w) / 2 + panX;
        const y = (size - h) / 2 + panY;
        
        ctx.drawImage(img, x, y, w, h);
        
        // Draw frame overlay on top of photo
        drawFrameOverlay(ctx, size);
      };
    } else {
      ctx.fillStyle = '#111827';
      ctx.fillRect(16, 16, size - 32, size - 32);
      
      ctx.fillStyle = '#6B7280';
      ctx.font = 'bold 16px "Mona Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('NO IMAGE LOADED', size / 2, size / 2 - 10);
      ctx.font = '500 11px "Mona Sans", sans-serif';
      ctx.fillText('Upload a photo or enable Profile sync.', size / 2, size / 2 + 15);
      
      drawFrameOverlay(ctx, size);
    }
  }, [frameImage, zoom, panX, panY, accentColor, user?.tier, passTheme, user]);

  const handleDownloadFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `OpenSourceCon_Frame_${user.name.replace(/ /g, '_')}.png`;
    link.href = dataUrl;
    link.click();
  };

  // Github Badges templates generator
  const cleanName = encodeURIComponent(user.name.replace(/ /g, '_'));
  const cleanTier = encodeURIComponent(user.tier.replace(/ /g, '_'));
  const hexColor = accentColor.replace('#', '');
  const badgeUrl = `https://img.shields.io/badge/OpenSourceCon_2026-${cleanName}_|_${cleanTier}-${hexColor}?style=for-the-badge&logo=github&logoColor=white`;
  const markdownBadge = `[![OpenSourceCon 2026 Attendee Pass](${badgeUrl})](https://github.com/globalazurekolkata-web/opensourcecon)`;

  const handleCopyBadge = () => {
    navigator.clipboard.writeText(markdownBadge);
    setBadgeCopied(true);
    setTimeout(() => setBadgeCopied(false), 2000);
  };

  // Dynamic pass stylesheet construction
  const rgb = hexToRgb(accentColor);
  const glowColor = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.22)`;
  const glowColorStrong = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.45)`;
  const isDarkAccent = (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114) < 140;
  const accentTextColor = isDarkAccent ? '#FFFFFF' : '#080C16';

  let cardStyle = {};
  let textColorClass = "text-white";
  let badgeStyle = {};
  let borderGlowStyle = {};
  let qrColor = accentColor;
  let qrBgColor = '#FFFFFF';

  if (passTheme === 'neon-dark') {
    cardStyle = {
      backgroundColor: '#070C16',
      borderColor: accentColor,
      boxShadow: `0 15px 45px ${glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.08)`
    };
    badgeStyle = {
      borderColor: `${accentColor}40`,
      color: accentColor,
      backgroundColor: `${accentColor}08`
    };
    borderGlowStyle = { borderColor: `${accentColor}30` };
    qrColor = accentColor;
    qrBgColor = '#FFFFFF';
  } else if (passTheme === 'glass') {
    cardStyle = {
      backgroundColor: 'rgba(11, 15, 30, 0.55)',
      backdropFilter: 'blur(16px) saturate(140%)',
      WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderColor: `${accentColor}40`,
      boxShadow: `0 15px 35px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05), inset 0 0 12px ${accentColor}10`
    };
    badgeStyle = {
      borderColor: 'rgba(255, 255, 255, 0.15)',
      color: '#FFFFFF',
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    };
    borderGlowStyle = { borderColor: 'rgba(255, 255, 255, 0.1)' };
    qrColor = '#0F172A';
    qrBgColor = 'rgba(255, 255, 255, 0.9)';
  } else if (passTheme === 'cyberpunk') {
    cardStyle = {
      backgroundColor: '#FFE600',
      borderColor: '#000000',
      borderWidth: '3px',
      boxShadow: '8px 8px 0px #000000'
    };
    textColorClass = "text-black";
    badgeStyle = {
      borderColor: '#000000',
      color: '#000000',
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    };
    borderGlowStyle = { borderColor: '#000000' };
    qrColor = '#000000';
    qrBgColor = '#FFE600';
  } else if (passTheme === 'matrix') {
    cardStyle = {
      backgroundColor: '#000000',
      borderColor: '#39FF14',
      boxShadow: '0 15px 40px rgba(57, 255, 20, 0.15), inset 0 1px 0 rgba(57, 255, 20, 0.2)'
    };
    textColorClass = "text-[#39FF14]";
    badgeStyle = {
      borderColor: '#39FF14',
      color: '#39FF14',
      backgroundColor: 'rgba(57, 255, 20, 0.05)'
    };
    borderGlowStyle = { borderColor: 'rgba(57, 255, 20, 0.2)' };
    qrColor = '#39FF14';
    qrBgColor = '#000000';
  } else if (passTheme === 'aurora') {
    cardStyle = {
      backgroundColor: '#0C0F1D',
      borderColor: `${accentColor}40`,
      boxShadow: `0 15px 40px ${glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.05)`
    };
    badgeStyle = {
      borderColor: `${accentColor}30`,
      color: accentColor,
      backgroundColor: `${accentColor}08`
    };
    borderGlowStyle = { borderColor: `${accentColor}20` };
    qrColor = accentColor;
    qrBgColor = '#FFFFFF';
  } else if (passTheme === 'carbon') {
    cardStyle = {
      backgroundColor: '#121316',
      backgroundImage: 'linear-gradient(45deg, #1A1B20 25%, transparent 25%), linear-gradient(-45deg, #1A1B20 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1A1B20 75%), linear-gradient(-45deg, transparent 75%, #1A1B20 75%)',
      backgroundSize: '8px 8px',
      borderColor: accentColor,
      boxShadow: `0 15px 40px rgba(0, 0, 0, 0.5), inset 0 0 12px rgba(0,0,0,0.8), 0 0 20px ${glowColor}`
    };
    badgeStyle = {
      borderColor: `${accentColor}40`,
      color: accentColor,
      backgroundColor: 'rgba(18, 19, 22, 0.6)'
    };
    borderGlowStyle = { borderColor: `${accentColor}30` };
    qrColor = accentColor;
    qrBgColor = '#121316';
  } else if (passTheme === 'arcade') {
    cardStyle = {
      backgroundColor: '#1B102E',
      borderColor: '#FF00FF',
      borderWidth: '4px',
      boxShadow: '6px 6px 0px #00FFFF',
      borderRadius: '0px'
    };
    textColorClass = "text-[#00FFFF]";
    badgeStyle = {
      borderColor: '#FF00FF',
      color: '#FFE600',
      backgroundColor: 'rgba(255, 0, 255, 0.05)'
    };
    borderGlowStyle = { borderColor: '#FF00FF' };
    qrColor = '#00FFFF';
    qrBgColor = '#1B102E';
  }

  // Pre-generate matrix code columns for Matrix theme
  const matrixColumns = Array.from({ length: 6 }).map((_, colIdx) => {
    const chars = ['0', '1', 'X', 'Y', 'Z', 'M', 'N', 'O', '1', '0'];
    const colText = Array.from({ length: 14 }).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    const animDelay = `${colIdx * 0.4}s`;
    return (
      <div key={colIdx} className="text-[7px] font-mono text-[#39FF14]/15 leading-none select-none" style={{ animationDelay: animDelay }}>
        {colText.split('').map((char, charIdx) => (
          <span key={charIdx} className="block text-center py-0.5">{char}</span>
        ))}
      </div>
    );
  });

  if (!user) return null;

  return (
    <section className="relative min-h-[85vh] py-24 md:py-32 overflow-hidden bg-white dark:bg-[#0B1020] print:bg-white print:p-0 print:absolute print:inset-0 print:z-[200]">
      {/* Dynamic scan simulator overlay */}
      <style>{`
        @keyframes matrix-scroll {
          from { background-position: 0 0; }
          to { background-position: 0 360px; }
        }
        .matrix-code-grid {
          background-image: linear-gradient(rgba(57, 255, 20, 0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(57, 255, 20, 0.06) 1px, transparent 1px);
          background-size: 10px 10px;
          animation: matrix-scroll 8s linear infinite;
        }
        @keyframes laser-sweep {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
        .laser-scanner-line {
          animation: laser-sweep 2.2s ease-in-out infinite;
        }
        @keyframes laser-sweep-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {isScanning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in print:hidden">
          <div className="bg-[#0A0F1D] border border-white/10 rounded-[32px] w-full max-w-md p-8 shadow-2xl relative text-center">
            {/* Holographic scanner target grid */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
            
            <h3 className="font-heading font-extrabold text-xl text-white tracking-tight flex items-center justify-center gap-2 mb-2">
              <QrCode className="text-brand-green animate-pulse" size={22} />
              Badge Scan Simulator
            </h3>
            <p className="text-xs text-gray-400 max-w-xs mx-auto mb-6">
              Simulates a hardware scanner checking in your digital convention pass.
            </p>

            {/* Scanning display area */}
            <div className="relative w-44 h-44 mx-auto bg-black/50 border border-brand-green/30 rounded-2xl p-4 flex items-center justify-center overflow-hidden mb-6">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-brand-green rounded-tl" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-brand-green rounded-tr" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-brand-green rounded-bl" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-brand-green rounded-br" />

              {/* Scanning visual laser */}
              {scanState === 'scanning' && (
                <div className="absolute left-0 right-0 h-[3px] bg-brand-green shadow-[0_0_12px_#52D237] laser-scanner-line pointer-events-none z-10" />
              )}

              {/* QR display */}
              <div className={`transition-all duration-300 ${scanState === 'success' ? 'opacity-30 scale-95' : 'opacity-85'}`}>
                <svg className="w-28 h-28 text-brand-green" viewBox="0 0 100 100" fill="currentColor">
                  <rect x="5" y="5" width="25" height="25" />
                  <rect x="9" y="9" width="17" height="17" fill="black" />
                  <rect x="13" y="13" width="9" height="9" />
                  
                  <rect x="70" y="5" width="25" height="25" />
                  <rect x="74" y="9" width="17" height="17" fill="black" />
                  <rect x="78" y="13" width="9" height="9" />
                  
                  <rect x="5" y="70" width="25" height="25" />
                  <rect x="9" y="74" width="17" height="17" fill="black" />
                  <rect x="13" y="78" width="9" height="9" />
                  
                  <rect x="40" y="40" width="20" height="20" />
                  <rect x="44" y="44" width="12" height="12" fill="black" />
                  
                  <rect x="40" y="10" width="10" height="5" />
                  <rect x="55" y="20" width="5" height="15" />
                  <rect x="15" y="45" width="10" height="10" />
                  <rect x="10" y="60" width="5" height="5" />
                  <rect x="45" y="75" width="15" height="10" />
                  <rect x="75" y="45" width="10" height="5" />
                  <rect x="85" y="60" width="10" height="20" />
                  <rect x="70" y="85" width="20" height="5" />
                </svg>
              </div>

              {/* Success badge check */}
              {scanState === 'success' && (
                <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green text-brand-green flex items-center justify-center shadow-[0_0_24px_rgba(82,210,55,0.2)]">
                    <CheckCircle size={32} />
                  </div>
                </div>
              )}
            </div>

            {/* Terminal logs list with MacOS style control buttons */}
            <div className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden mb-6 flex flex-col shadow-inner">
              <div className="bg-black/40 px-4 py-2 flex items-center gap-1.5 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                <span className="text-[9px] font-mono text-gray-500 ml-2">checkin-terminal.sh</span>
              </div>
              <div className="p-4 text-left font-mono text-[10px] text-gray-400 h-32 overflow-y-auto space-y-1.5 scrollbar-thin select-all">
                {scanLogs.map((log, idx) => (
                  <div key={idx} className={`leading-normal ${log.includes('[SUCCESS]') ? 'text-brand-green font-bold' : log.includes('[SYSTEM]') ? 'text-blue-400' : 'text-gray-300'}`}>
                    {log}
                  </div>
                ))}
                <div className="w-1.5 h-3.5 bg-brand-green inline-block ml-0.5 terminal-cursor align-middle" />
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex gap-3">
              <Button
                onClick={closeScanner}
                variant="outline"
                className="flex-1 py-3 text-xs bg-transparent dark:text-white border-white/10"
              >
                Close Simulator
              </Button>
              {scanState === 'idle' && (
                <Button
                  onClick={startScanning}
                  variant="primary"
                  className="flex-1 py-3 text-xs"
                >
                  Start Scan
                </Button>
              )}
              {scanState === 'success' && (
                <div className="flex-1 p-0.5 bg-gradient-to-r from-brand-green to-brand-green-dark rounded-full">
                  <button
                    onClick={closeScanner}
                    className="w-full h-full py-2.5 rounded-full text-xs font-semibold text-dark bg-[#FFE600] border-0 hover:brightness-95 cursor-pointer flex items-center justify-center gap-1"
                    style={{ background: '#52D237', color: '#000000' }}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Decorative backdrop elements (hidden during print) */}
      <div className="absolute inset-0 grid-bg pointer-events-none z-0 print:hidden" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[80px] pointer-events-none top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 print:hidden" />
      <div className="absolute w-[250px] h-[250px] rounded-full bg-brand-green/10 dark:bg-brand-green/5 blur-[80px] pointer-events-none bottom-1/4 right-1/4 print:hidden" />

      {/* Main Grid Wrapper */}
      <div className="max-w-5xl w-full mx-auto px-6 relative z-10 print:p-0 print:w-auto">
        
        {/* Back Button (hidden during print) */}
        <button 
          onClick={handleGoBackHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-dark dark:text-gray-400 dark:hover:text-white transition-colors mb-6 group bg-transparent border-0 cursor-pointer p-0 print:hidden"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        {/* Dashboard Grid Card with dynamic shadow */}
        <div 
          className="bg-white/90 dark:bg-[#0f172a]/65 border border-gray-200/50 dark:border-white/10 rounded-[32px] p-6 md:p-8 backdrop-blur-xl relative overflow-hidden transition-all duration-500 print:shadow-none print:border-0 print:p-0"
          style={{
            boxShadow: `0 30px 60px -15px ${glowColor}`,
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent print:hidden" style={{ backgroundImage: `linear-gradient(90deg, transparent, ${accentColor}40, transparent)` }} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block">
            
            {/* COLUMN 1: DIGITAL PASS SIDEBAR (Col span 4) */}
            <div className="lg:col-span-4 flex flex-col items-center gap-6 border-b lg:border-b-0 lg:border-r border-gray-150/40 dark:border-white/5 pb-8 lg:pb-0 lg:pr-8 print:border-0 print:col-span-12 print:block">
              
              {/* Pass Card Wrapper with Outer Glow & Parallax 3D Tilt */}
              <div 
                className="relative p-[3px] rounded-[27px] overflow-hidden transition-all duration-500"
                style={{
                  boxShadow: isHovered ? `0 30px 60px -15px ${glowColorStrong}` : `0 15px 35px -15px ${glowColor}`,
                  transform: isHovered ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)` : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  transition: isHovered ? 'none' : 'transform 0.5s ease, box-shadow 0.5s ease',
                  background: isHovered 
                    ? `linear-gradient(135deg, ${accentColor}, transparent 30%, ${accentColor} 50%, transparent 70%, ${accentColor})` 
                    : 'rgba(156, 163, 175, 0.15)',
                  backgroundSize: '200% 200%',
                  animation: 'laser-sweep-bg 3s linear infinite'
                }}
                onMouseMove={handleCardMouseMove}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Premium Ticket Card Container */}
                <div 
                  className={`relative w-full max-w-[250px] aspect-[5/8] rounded-[24px] p-5 flex flex-col justify-between overflow-hidden transition-all duration-500 border print:border-gray-300 print:text-black print:bg-white ${textColorClass}`}
                  style={cardStyle}
                >
                  {/* Holographic Overlay Shine */}
                  <div 
                    className="absolute inset-0 pointer-events-none mix-blend-color-dodge transition-opacity duration-300 z-20"
                    style={{
                      opacity: isHovered ? 0.35 : 0.08,
                      background: `radial-gradient(circle at ${holoPos.x}% ${holoPos.y}%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 60%), 
                                  linear-gradient(${120 + tilt.y * 2.5}deg, rgba(255, 0, 122, 0.3) 0%, rgba(0, 240, 255, 0.3) 33%, rgba(240, 255, 0, 0.3) 66%, rgba(0, 240, 255, 0.3) 100%)`,
                    }}
                  />

                  {/* Tech Theme Background Elements */}
                  {passTheme === 'neon-dark' && (
                    <>
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand-green/5 blur-xl pointer-events-none print:hidden" />
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-r border-brand-green/20 print:hidden" style={borderGlowStyle} />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-l border-brand-green/20 print:hidden" style={borderGlowStyle} />
                    </>
                  )}
                  {passTheme === 'glass' && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/2 to-white/8 pointer-events-none" />
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-green/8 blur-2xl pointer-events-none" style={{ backgroundColor: `${accentColor}15` }} />
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-r border-white/10 print:hidden" />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-l border-white/10 print:hidden" />
                    </>
                  )}
                  {passTheme === 'cyberpunk' && (
                    <>
                      <div className="absolute top-0 left-0 bg-black text-[#FFE600] font-mono text-[7px] font-bold px-2 py-0.5 uppercase tracking-widest">
                        SYSTEM: AR-ACTIVE
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-2 bg-black transform skew-x-30 origin-top-right" />
                      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black" />
                      <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-[#0b1020] border-2 border-black print:hidden" />
                      <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-[#0b1020] border-2 border-black print:hidden" />
                    </>
                  )}
                  {passTheme === 'matrix' && (
                    <>
                      <div className="absolute inset-0 matrix-code-grid opacity-25 pointer-events-none" />
                      <div className="absolute inset-x-0 top-3 flex justify-around pointer-events-none overflow-hidden h-3/4">
                        {matrixColumns}
                      </div>
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-r border-[#39FF14]/30 print:hidden" />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-l border-[#39FF14]/30 print:hidden" />
                    </>
                  )}
                  {passTheme === 'aurora' && (
                    <>
                      <div className="absolute top-[-30%] left-[-30%] w-[90%] h-[90%] rounded-full blur-[60px] pointer-events-none animate-pulse" style={{ backgroundColor: `${accentColor}18`, animationDuration: '8s' }} />
                      <div className="absolute bottom-[-30%] right-[-30%] w-[90%] h-[90%] rounded-full blur-[60px] pointer-events-none animate-pulse" style={{ backgroundColor: 'rgba(99, 102, 241, 0.15)', animationDuration: '10s', animationDelay: '2s' }} />
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-r border-white/10 print:hidden" />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-l border-white/10 print:hidden" />
                    </>
                  )}
                  {passTheme === 'carbon' && (
                    <>
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-white/3 blur-xl pointer-events-none print:hidden" />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-r border-white/10 print:hidden" />
                      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#0b1020] border-l border-white/10 print:hidden" />
                    </>
                  )}
                  {passTheme === 'arcade' && (
                    <>
                      <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                        backgroundImage: `linear-gradient(rgba(255, 0, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '12px 12px'
                      }} />
                      <div className="absolute top-2 left-2 text-[6px] font-mono text-[#00FFFF]/40 uppercase tracking-widest select-none">
                        INSERT COIN
                      </div>
                      <div className="absolute top-2 right-2 text-[6px] font-mono text-[#FF00FF]/40 uppercase tracking-widest select-none animate-pulse">
                        1P READY
                      </div>
                      <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-[#0b1020] border-2 border-[#FF00FF] print:hidden" />
                      <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-[#0b1020] border-2 border-[#FF00FF] print:hidden" />
                    </>
                  )}

                  {/* Ticket Header */}
                  <div className={`flex items-start justify-between border-b pb-3 print:border-gray-200 ${passTheme === 'cyberpunk' ? 'border-black' : passTheme === 'matrix' ? 'border-[#39FF14]/20' : passTheme === 'arcade' ? 'border-[#FF00FF]' : 'border-white/10'}`}>
                    <div className="space-y-0.5 text-left">
                      <span 
                        className="text-[7px] font-mono font-extrabold tracking-widest uppercase"
                        style={passTheme === 'cyberpunk' ? { color: '#000000' } : passTheme === 'matrix' ? { color: '#39FF14' } : passTheme === 'arcade' ? { color: '#FFE600', fontFamily: 'monospace' } : { color: accentColor }}
                      >
                        OpenSourceCon
                      </span>
                      <span className={`text-[10px] font-heading font-black block leading-none print:text-black ${passTheme === 'arcade' ? 'font-mono tracking-tighter' : ''}`}>
                        KOLKATA '26
                      </span>
                    </div>
                    <span 
                      className={`text-[7px] font-mono px-2 py-0.5 border select-none print:border-gray-400 print:text-black ${passTheme === 'arcade' ? 'rounded-none border-2 font-bold' : 'rounded-full'}`}
                      style={badgeStyle}
                    >
                      {user.tier}
                    </span>
                  </div>

                  {/* Ticket Body: Interactive QR Code */}
                  <div className="flex flex-col items-center py-4 my-auto">
                    <div 
                      onClick={startScanning}
                      className="w-28 h-28 cursor-pointer rounded-xl p-2.5 flex items-center justify-center shadow-lg relative transition-all duration-300 hover:scale-[1.03] group print:border-gray-400"
                      style={{
                        backgroundColor: qrBgColor,
                        border: `1.5px solid ${passTheme === 'cyberpunk' ? '#000000' : qrColor}40`,
                      }}
                    >
                      {/* SVG Stylized QR Code Mock */}
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="currentColor" style={{ color: qrColor }}>
                        <rect x="5" y="5" width="25" height="25" />
                        <rect x="9" y="9" width="17" height="17" fill={qrBgColor} />
                        <rect x="13" y="13" width="9" height="9" />
                        
                        <rect x="70" y="5" width="25" height="25" />
                        <rect x="74" y="9" width="17" height="17" fill={qrBgColor} />
                        <rect x="78" y="13" width="9" height="9" />
                        
                        <rect x="5" y="70" width="25" height="25" />
                        <rect x="9" y="74" width="17" height="17" fill={qrBgColor} />
                        <rect x="13" y="78" width="9" height="9" />
                        
                        <rect x="40" y="40" width="20" height="20" />
                        <rect x="44" y="44" width="12" height="12" fill={qrBgColor} />
                        
                        <rect x="40" y="10" width="10" height="5" />
                        <rect x="55" y="20" width="5" height="15" />
                        <rect x="15" y="45" width="10" height="10" />
                        <rect x="10" y="60" width="5" height="5" />
                        <rect x="45" y="75" width="15" height="10" />
                        <rect x="75" y="45" width="10" height="5" />
                        <rect x="85" y="60" width="10" height="20" />
                        <rect x="70" y="85" width="20" height="5" />
                      </svg>

                      {/* Interactive Scan Prompt Overlay */}
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center text-[9px] text-white font-mono font-bold gap-1 pointer-events-none">
                        <QrCode size={18} className="animate-bounce" />
                        <span>TAP TO TEST SCAN</span>
                      </div>
                    </div>
                    <span className={`text-[9px] font-mono tracking-widest mt-4 block select-none ${passTheme === 'cyberpunk' ? 'text-black/60' : 'text-gray-400'}`}>
                      {user.ticketNo}
                    </span>
                  </div>

                  {/* Ticket Footer (Incorporating round profile image layout) */}
                  <div className={`border-t pt-3 flex items-center gap-2.5 text-left print:border-gray-200 ${passTheme === 'cyberpunk' ? 'border-black' : passTheme === 'matrix' ? 'border-[#39FF14]/20' : 'border-[#FF00FF]'}`}>
                    <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center font-heading font-black text-[9px] border overflow-hidden ${
                      passTheme === 'arcade' 
                        ? 'rounded-none border-2 border-[#00FFFF] bg-black text-[#00FFFF]' 
                        : passTheme === 'cyberpunk' 
                          ? 'rounded-full border-black bg-black/10' 
                          : passTheme === 'matrix' 
                            ? 'rounded-full border-[#39FF14]/30 bg-[#39FF14]/5' 
                            : 'rounded-full border-white/15 bg-white/5'
                    }`}>
                      {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover animate-fade-in" />
                      ) : (
                        getInitials(user.name)
                      )}
                    </div>
                    <div className={`min-w-0 flex-1 ${passTheme === 'arcade' ? 'font-mono uppercase tracking-tighter' : ''}`}>
                      <span className={`text-[7px] font-mono uppercase leading-none ${
                        passTheme === 'arcade' 
                          ? 'text-[#FF00FF]' 
                          : passTheme === 'cyberpunk' 
                            ? 'text-black/60' 
                            : 'text-gray-455'
                      }`}>
                        ATTENDEE PASS
                      </span>
                      <span className={`text-[12px] font-black truncate max-w-full block leading-tight print:text-black ${passTheme === 'arcade' ? 'text-[#00FFFF]' : ''}`}>
                        {user.name}
                      </span>
                      <span className={`text-[7px] font-medium truncate max-w-full block leading-none print:text-gray-600 ${
                        passTheme === 'arcade'
                          ? 'text-[#FFE600]'
                          : passTheme === 'cyberpunk' 
                            ? 'text-black/70' 
                            : 'text-gray-350'
                      }`}>
                        {user.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Stats (hidden during print) */}
              <div className="w-full text-left space-y-3.5 print:hidden">
                <div className="flex flex-col gap-2.5 p-4 bg-gray-50/50 dark:bg-white/[0.02] border border-gray-150/40 dark:border-white/5 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Itinerary Planner</span>
                    <span className="text-xs font-bold text-dark dark:text-white flex items-center gap-1 bg-brand-green/10 text-brand-green-dark dark:text-brand-green px-2.5 py-0.5 rounded-full border border-brand-green/20">
                      <Bookmark size={11} className="fill-current" />
                      {bookmarks.length} Saved
                    </span>
                  </div>
                  {/* Progress bar inside stats */}
                  <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500" 
                      style={{ 
                        width: `${Math.min((bookmarks.length / 10) * 100, 100)}%`,
                        backgroundColor: accentColor
                      }} 
                    />
                  </div>
                  <span className="text-[9px] text-gray-405 block">Tip: Add key sessions to build your day.</span>
                </div>
                
                {/* Dynamic Check-in Status */}
                <div className="flex items-center justify-between p-3.5 bg-gray-50/50 dark:bg-white/[0.02] border border-gray-150/40 dark:border-white/5 rounded-2xl">
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Gate Pass Status</span>
                  {scanState === 'success' ? (
                    <span className="text-xs font-bold flex items-center gap-1.5 text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full border border-brand-green/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                      Verified
                    </span>
                  ) : scanState === 'scanning' ? (
                    <span className="text-xs font-bold flex items-center gap-1.5 text-blue-500 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                      Scanning
                    </span>
                  ) : (
                    <span className="text-xs font-bold flex items-center gap-1.5 text-gray-450 bg-gray-100 dark:bg-white/5 px-2.5 py-0.5 rounded-full border border-gray-200 dark:border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-450" />
                      Pending Scan
                    </span>
                  )}
                </div>
                
                {/* Print & Logout CTA */}
                <div className="flex gap-2">
                  <Button
                    onClick={handlePrint}
                    variant="outline"
                    className="flex-1 py-3 text-xs font-semibold bg-transparent dark:text-white border-gray-200 dark:border-white/10 hover:border-brand-green/30"
                    icon={Printer}
                    iconPosition="left"
                  >
                    Print
                  </Button>
                  <Button
                    onClick={handleLogoutClick}
                    variant="secondary"
                    className="flex-1 py-3 text-xs font-semibold bg-gray-100 dark:bg-white/10 border-0 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-white/15"
                    icon={LogOut}
                    iconPosition="left"
                  >
                    Log Out
                  </Button>
                </div>
              </div>

            </div>

            {/* COLUMN 2: TABBED ACTION INTERFACE (Col span 8) */}
            <div className="lg:col-span-8 space-y-6 text-left print:hidden flex flex-col justify-start">
              
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-150/40 dark:border-white/5 pb-5">
                <div className="flex items-center gap-3">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-green to-emerald-500 opacity-20 blur-sm group-hover:opacity-40 transition-opacity" style={{ backgroundImage: `linear-gradient(135deg, ${accentColor}, transparent)` }} />
                    <div 
                      className="w-12 h-12 rounded-full text-white flex items-center justify-center font-heading font-black text-base transition-all duration-300 overflow-hidden shadow-md border-2 border-white dark:border-[#0B1020] relative z-10"
                      style={{ backgroundColor: accentColor, boxShadow: `0 4px 14px ${glowColor}` }}
                    >
                      {user.avatarUrl ? (
                        <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        getInitials(user.name)
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-black text-xl text-dark dark:text-white leading-none">
                      {user.name}
                    </h4>
                    <span className="text-xs text-gray-455 dark:text-gray-400 font-medium mt-1.5 block">
                      {user.role} @ <strong className="font-bold text-gray-700 dark:text-gray-300">{user.company}</strong>
                    </span>
                  </div>
                </div>

                {/* Badge details */}
                <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-xl bg-brand-green/8 border border-brand-green/15 text-brand-green" style={{ borderColor: `${accentColor}30`, color: accentColor, backgroundColor: `${accentColor}12` }}>
                  <CheckCircle size={13} className="fill-current text-white dark:text-[#0B1020]" />
                  <span>Pass Authenticated</span>
                </div>
              </div>

              {/* Futuristic Glassmorphic Tab Deck */}
              <div className="flex flex-wrap items-center bg-gray-50/50 dark:bg-white/[0.02] backdrop-blur-md rounded-2xl p-1.5 gap-1.5 border border-gray-150/40 dark:border-white/5 w-full">
                {[
                  { id: 'pass', label: 'Customize Pass', icon: SlidersHorizontal },
                  { id: 'frame', label: 'Attendee Frame', icon: Camera },
                  { id: 'itinerary', label: 'Itinerary Builder', icon: Calendar },
                  { id: 'edit', label: 'Edit Profile', icon: Edit3 },
                  { id: 'swag', label: 'Digital Swag', icon: Sparkles }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 bg-transparent cursor-pointer border-0 ${
                        isActive 
                          ? 'shadow-sm font-black' 
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-455 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                      }`}
                      style={isActive ? {
                        backgroundColor: accentColor,
                        color: accentTextColor,
                        boxShadow: `0 4px 12px ${glowColorStrong}`
                      } : {}}
                    >
                      <Icon size={14} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* PANEL 1: CUSTOMIZE PASS */}
              {activeTab === 'pass' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h5 className="font-heading font-extrabold text-base text-dark dark:text-white">Customize Pass Accent & Theme</h5>
                    <p className="text-xs text-gray-secondary dark:text-gray-400 mt-1">
                      Personalize your attendee pass styling. The details are synchronized instantly.
                    </p>
                  </div>

                  {/* Themes Selection */}
                  <div className="space-y-2.5">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Pass Theme</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {PRESET_THEMES.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => handleUpdateTheme(t.id)}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            passTheme === t.id 
                              ? 'border-brand-green bg-brand-green/5 dark:bg-brand-green/8 text-dark dark:text-white shadow-sm'
                              : 'border-gray-100 dark:border-white/5 bg-transparent text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5'
                          }`}
                        >
                          <span className="font-bold text-xs block text-dark dark:text-white">{t.name}</span>
                          <span className="text-[10px] text-gray-400 mt-1 block leading-normal">{t.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Colors Selection */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Accent Glow Color</label>
                    <div className="flex flex-wrap items-center gap-3">
                      {PRESET_COLORS.map((col) => (
                        <button
                          key={col.name}
                          onClick={() => handleUpdateAccent(col.hex)}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                            accentColor.toLowerCase() === col.hex.toLowerCase()
                              ? 'border-brand-green bg-brand-green/5 text-dark dark:text-white'
                              : 'border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-500'
                          }`}
                        >
                          <span className="w-3.5 h-3.5 rounded-full border border-black/10 flex-shrink-0" style={{ backgroundColor: col.hex }} />
                          {col.name}
                        </button>
                      ))}

                      {/* Custom Hex input */}
                      <div className="flex items-center gap-2 border border-gray-150 dark:border-white/10 rounded-xl px-2.5 py-1.5 bg-transparent">
                        <input
                          type="color"
                          value={accentColor}
                          onChange={(e) => handleUpdateAccent(e.target.value)}
                          className="w-5 h-5 rounded cursor-pointer border-0 bg-transparent"
                        />
                        <input
                          type="text"
                          value={accentColor.toUpperCase()}
                          onChange={(e) => handleUpdateAccent(e.target.value)}
                          placeholder="#52D237"
                          className="bg-transparent border-0 text-[11px] font-mono focus:outline-none w-16 text-dark dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Simulator activation help banner */}
                  <div className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl flex items-start gap-3.5">
                    <QrCode size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-xs text-dark dark:text-white block">Digital Check-In Simulator</span>
                      <span className="text-[10px] text-gray-400 block mt-1 leading-relaxed">
                        Clicking the QR Code on your digital pass opens the interactive check-in console. Test scan and verify access at OpenSourceCon Kolkata gates.
                      </span>
                    </div>
                  </div>

                </div>
              )}

              {/* PANEL 2: ATTENDEE PHOTO FRAME GENERATOR (New Frame Overlay Section) */}
              {activeTab === 'frame' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 animate-fade-in text-left">
                  <div className="md:col-span-12">
                    <h5 className="font-heading font-extrabold text-base text-dark dark:text-white">Attendee Photo Frame Generator</h5>
                    <p className="text-xs text-gray-secondary dark:text-gray-400 mt-1">
                      Announce that you are attending OpenSourceCon! Reposition your image and download your custom branded avatar.
                    </p>
                  </div>

                  {/* Canvas Preview Column */}
                  <div className="md:col-span-5 flex flex-col items-center gap-2">
                    <span className="text-[9px] font-mono font-bold text-gray-450 uppercase tracking-widest self-start">Live Output Canvas</span>
                    
                    <div 
                      className="relative w-full aspect-square max-w-[280px] rounded-2xl overflow-hidden border border-gray-250 dark:border-white/10 bg-[#070C16] shadow-lg cursor-move select-none group"
                      onMouseDown={handleMouseDown}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                      onTouchStart={handleMouseDown}
                      onTouchMove={handleMouseMove}
                      onTouchEnd={handleMouseUp}
                    >
                      <canvas 
                        ref={canvasRef} 
                        className="w-full h-full block object-contain pointer-events-none" 
                      />
                      
                      {frameImage && (
                        <div className="absolute inset-x-0 bottom-4 text-center pointer-events-none">
                          <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-mono text-white inline-block">
                            ↔ DRAG PHOTO TO ALIGN
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Settings and Controls Column */}
                  <div className="md:col-span-7 space-y-4">
                    
                    {/* Source Selection Checkbox */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl">
                      <div className="text-left pr-4">
                        <span className="font-bold text-xs text-dark dark:text-white block">Sync Profile Avatar</span>
                        <span className="text-[9px] text-gray-405 block mt-0.5">Use your current profile image automatically</span>
                      </div>
                      <input
                        type="checkbox"
                        checked={syncWithProfile}
                        onChange={(e) => {
                          setSyncWithProfile(e.target.checked);
                        }}
                        className="w-4 h-4 accent-brand-green cursor-pointer"
                      />
                    </div>

                    {/* Custom File Upload if sync is disabled */}
                    {!syncWithProfile && (
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Choose Custom Image</label>
                        <label className="btn-outline w-full py-3.5 rounded-xl text-xs font-semibold cursor-pointer border-gray-150 dark:border-white/10 dark:text-white block text-center bg-transparent hover:bg-gray-50 dark:hover:bg-white/5">
                          Select Image File
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                const reader = new FileReader();
                                reader.onload = (ev) => setCustomImage(ev.target.result);
                                reader.readAsDataURL(file);
                              }
                            }}
                          />
                        </label>
                      </div>
                    )}

                    {/* Drag and Zoom sliders */}
                    {frameImage ? (
                      <div className="space-y-3.5 p-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-2xl">
                        {/* Zoom control */}
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-mono font-bold text-gray-450 uppercase tracking-widest">
                            <span>Image Scale</span>
                            <span>{Math.round(zoom * 100)}%</span>
                          </div>
                          <input
                            type="range"
                            min="0.5"
                            max="3.0"
                            step="0.02"
                            value={zoom}
                            onChange={(e) => setZoom(parseFloat(e.target.value))}
                            className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                          />
                        </div>

                        {/* Fallback Panning Sliders */}
                        <div className="grid grid-cols-2 gap-4 pt-1">
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono font-bold text-gray-450 uppercase tracking-widest block">Offset X</span>
                            <input
                              type="range"
                              min="-200"
                              max="200"
                              value={panX}
                              onChange={(e) => setPanX(parseInt(e.target.value))}
                              className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[9px] font-mono font-bold text-gray-450 uppercase tracking-widest block">Offset Y</span>
                            <input
                              type="range"
                              min="-200"
                              max="200"
                              value={panY}
                              onChange={(e) => setPanY(parseInt(e.target.value))}
                              className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-green"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 border border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-center text-xs text-gray-400">
                        Please upload a profile photo under "Edit Profile" or upload a custom image here to activate controls.
                      </div>
                    )}

                    <div className="pt-2">
                      <Button
                        onClick={handleDownloadFrame}
                        disabled={!frameImage}
                        variant="primary"
                        className="w-full py-4 text-xs font-bold"
                        icon={Printer}
                      >
                        Download Branded Frame Photo
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* PANEL 3: ITINERARY BUILDER */}
              {activeTab === 'itinerary' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h5 className="font-heading font-extrabold text-base text-dark dark:text-white">Custom Itinerary Planner</h5>
                      <p className="text-xs text-gray-secondary dark:text-gray-400 mt-1">
                        Build your custom conference day schedule. Bookmarked sessions will display in your planner.
                      </p>
                    </div>

                    <button
                      onClick={() => setShowBookmarkedOnly(!showBookmarkedOnly)}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all ${
                        showBookmarkedOnly 
                          ? 'bg-brand-green/15 border-brand-green text-brand-green-dark dark:text-brand-green' 
                          : 'border-gray-150 dark:border-white/10 text-gray-400 hover:text-dark dark:hover:text-white'
                      }`}
                    >
                      <Bookmark size={12} className={showBookmarkedOnly ? 'fill-current' : ''} />
                      Show Bookmarked Only ({bookmarks.length})
                    </button>
                  </div>

                  {/* Search and track filter row */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-8 relative">
                      <input
                        type="text"
                        placeholder="Search session title..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-3 pl-10 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    <div className="sm:col-span-4">
                      <select
                        value={selectedTrack}
                        onChange={(e) => setSelectedTrack(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl bg-gray-50 dark:bg-[#131c31] border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none"
                      >
                        <option value="all">All Tracks</option>
                        <option value="talk">Keynotes & Talks</option>
                        <option value="workshop">Workshops</option>
                        <option value="panel">Panels</option>
                        <option value="break">Breaks & Socials</option>
                      </select>
                    </div>
                  </div>

                  {/* Render Schedule Slots */}
                  <div className="space-y-6 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin">
                    {Object.entries(scheduleData).map(([tabKey, sessions]) => {
                      const filteredSessions = sessions.map((session, origIdx) => ({
                        ...session,
                        id: `${tabKey}-${origIdx}`,
                        origIdx
                      })).filter(s => {
                        const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase());
                        const matchesTrack = selectedTrack === 'all' || s.type === selectedTrack;
                        const matchesBookmark = !showBookmarkedOnly || bookmarks.includes(s.id);
                        return matchesSearch && matchesTrack && matchesBookmark;
                      });

                      if (filteredSessions.length === 0) return null;

                      return (
                        <div key={tabKey} className="space-y-3">
                          <h6 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-white/5 pb-1 block">
                            {tabKey} Timeline
                          </h6>
                          <div className="space-y-2.5">
                            {filteredSessions.map((session) => {
                              const isBookmarked = bookmarks.includes(session.id);
                              
                              const getBadgeStyles = (type) => {
                                switch(type) {
                                  case 'break':
                                    return { color: 'text-gray-500 bg-gray-500/10 border-gray-500/20', icon: Coffee, label: 'Break / Networking' };
                                  case 'talk':
                                    return { color: 'text-blue-500 bg-blue-500/10 border-blue-500/20', icon: Mic, label: 'Talk / Keynote' };
                                  case 'workshop':
                                    return { color: 'text-orange-500 bg-orange-500/10 border-orange-500/20', icon: Laptop, label: 'Workshop' };
                                  case 'panel':
                                    return { color: 'text-purple-500 bg-purple-500/10 border-purple-500/20', icon: Users, label: 'Panel' };
                                  default:
                                    return { color: 'text-brand-green bg-brand-green/10 border-brand-green/20', icon: Award, label: 'Session' };
                                }
                              };

                              const badge = getBadgeStyles(session.type);
                              const IconComponent = badge.icon;

                              return (
                                <div 
                                  key={session.id}
                                  className={`p-4 bg-white dark:bg-white/5 border rounded-2xl flex items-center justify-between gap-4 transition-all ${
                                    isBookmarked 
                                      ? 'border-brand-green/30 shadow-sm'
                                      : 'border-gray-100 dark:border-white/5 hover:border-gray-200 dark:hover:border-white/10'
                                  }`}
                                  style={isBookmarked ? { boxShadow: `inset 3px 0 0 ${accentColor}` } : {}}
                                >
                                  <div className="flex items-start gap-3.5 min-w-0">
                                    <div className="text-left flex-shrink-0">
                                      <span className="text-[11px] font-mono font-bold text-dark dark:text-white block">
                                        {session.time}
                                      </span>
                                    </div>
                                    <div className="min-w-0 text-left">
                                      <div className="flex flex-wrap items-center gap-2">
                                        <span className={`inline-flex items-center gap-1 text-[9px] font-bold font-mono px-2 py-0.5 rounded-full border ${badge.color}`}>
                                          <IconComponent size={10} />
                                          {badge.label}
                                        </span>
                                      </div>
                                      <h6 className="text-xs font-bold text-dark dark:text-white mt-1 leading-snug">
                                        {session.title}
                                      </h6>
                                    </div>
                                  </div>

                                  <button
                                    onClick={() => handleToggleBookmark(session.id)}
                                    className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all cursor-pointer ${
                                      isBookmarked 
                                        ? 'bg-brand-green/10 border-brand-green text-brand-green-dark dark:text-brand-green' 
                                        : 'bg-transparent border-gray-150 dark:border-white/10 text-gray-400 hover:text-dark dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                                    }`}
                                  >
                                    <Bookmark size={14} className={isBookmarked ? 'fill-current' : ''} />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {showBookmarkedOnly && bookmarks.length === 0 && (
                      <div className="text-center py-12 border border-dashed border-gray-150 dark:border-white/5 rounded-2xl text-gray-400">
                        <Bookmark className="mx-auto text-gray-300 dark:text-gray-500 mb-2 animate-bounce" size={24} />
                        <span className="text-xs font-bold block text-dark dark:text-white">Your Itinerary is empty</span>
                        <span className="text-[10px] text-gray-405 block mt-1">Bookmarked sessions will appear here.</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* PANEL 4: EDIT PROFILE */}
              {activeTab === 'edit' && (
                <div className="space-y-6 animate-fade-in text-left">
                  <div>
                    <h5 className="font-heading font-extrabold text-base text-dark dark:text-white">Update Attendee Profile</h5>
                    <p className="text-xs text-gray-secondary dark:text-gray-400 mt-1">
                      Modify details printed on your badge and linked to your open source socials.
                    </p>
                  </div>

                  {/* Validation Alerts */}
                  {formError && (
                    <div className="p-3.5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-500 text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle className="text-red-500 flex-shrink-0" size={14} />
                      <span>{formError}</span>
                    </div>
                  )}
                  {formSuccess && (
                    <div className="p-3.5 bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-brand-green text-xs rounded-xl flex items-center gap-2">
                      <CheckCircle className="text-brand-green flex-shrink-0" size={14} />
                      <span>{formSuccess}</span>
                    </div>
                  )}

                  {/* PROFILE PHOTO EDIT/UPLOAD (Incorporating user request) */}
                  <div className="p-5 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[24px] flex flex-col sm:flex-row items-center gap-5">
                    <div className="relative group">
                      <div className="w-20 h-20 rounded-full border border-gray-250 dark:border-white/10 overflow-hidden bg-brand-green/10 text-brand-green-dark dark:text-brand-green flex items-center justify-center font-heading font-black text-2xl relative shadow-md">
                        {user.avatarUrl ? (
                          <img src={user.avatarUrl} alt={user.name} className="w-full h-full object-cover animate-fade-in" />
                        ) : (
                          getInitials(user.name)
                        )}
                      </div>
                    </div>
                    <div className="space-y-1 text-center sm:text-left flex-grow">
                      <span className="font-bold text-xs text-dark dark:text-white block">Profile Picture / Avatar</span>
                      <span className="text-[10px] text-gray-405 block max-w-sm leading-normal">
                        Upload an image (PNG, JPG) to print on your attendee pass. File will be client-side compressed to load instantly.
                      </span>
                      <div className="flex flex-wrap gap-2 pt-2.5 justify-center sm:justify-start">
                        <label className="btn-outline py-2.5 px-4 rounded-xl text-[10px] font-bold cursor-pointer border-gray-150 dark:border-white/10 dark:text-white inline-block text-center hover:bg-gray-100 dark:hover:bg-white/5 transition-all">
                          Upload Photo
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleAvatarFileChange}
                          />
                        </label>
                        {user.avatarUrl && (
                          <button
                            type="button"
                            onClick={handleRemoveAvatar}
                            className="py-2.5 px-4 rounded-xl text-[10px] font-bold text-red-500 hover:text-red-650 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 border-0 cursor-pointer transition-all"
                          >
                            Remove Avatar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Main Details Form */}
                  <form onSubmit={handleSaveProfile} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Attendee Name</label>
                        <input
                          type="text"
                          required
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          placeholder="Your Name"
                          className="w-full px-3.5 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green focus:bg-white dark:focus:bg-dark"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Organization / College</label>
                        <input
                          type="text"
                          value={editCompany}
                          onChange={(e) => setEditCompany(e.target.value)}
                          placeholder="Company Name"
                          className="w-full px-3.5 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green focus:bg-white dark:focus:bg-dark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Role / Designation</label>
                        <input
                          type="text"
                          value={editRole}
                          onChange={(e) => setEditRole(e.target.value)}
                          placeholder="Job Title / Student"
                          className="w-full px-3.5 py-3.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green focus:bg-white dark:focus:bg-dark"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Ticket Registration Email</label>
                        <input
                          type="email"
                          disabled
                          value={user.email}
                          className="w-full px-3.5 py-3.5 rounded-xl bg-gray-100 dark:bg-white/2 border border-gray-200 dark:border-white/5 text-xs text-gray-450 cursor-not-allowed"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs font-bold text-dark dark:text-white block mb-3">Linked Accounts</span>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="GitHub username"
                            value={editGithub}
                            onChange={(e) => setEditGithub(e.target.value)}
                            className="w-full px-3.5 py-3.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                          />
                          <RiGithubFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-405 text-sm" />
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            placeholder="LinkedIn username"
                            value={editLinkedin}
                            onChange={(e) => setEditLinkedin(e.target.value)}
                            className="w-full px-3.5 py-3.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                          />
                          <RiLinkedinBoxFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-405 text-sm" />
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Twitter username"
                            value={editTwitter}
                            onChange={(e) => setEditTwitter(e.target.value)}
                            className="w-full px-3.5 py-3.5 pl-9 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-150 dark:border-white/5 text-xs text-dark dark:text-white focus:outline-none focus:ring-1 focus:ring-brand-green"
                          />
                          <RiTwitterXFill className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-405 text-[11px]" />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto py-3.5 px-8 text-xs font-semibold mt-4 animate-fade-in"
                    >
                      Save Changes
                    </Button>
                  </form>
                </div>
              )}

              {/* PANEL 5: DIGITAL SWAG */}
              {activeTab === 'swag' && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h5 className="font-heading font-extrabold text-base text-dark dark:text-white">Github README Badges & Swag</h5>
                    <p className="text-xs text-gray-secondary dark:text-gray-400 mt-1">
                      Showcase your official OpenSourceCon Attendee status on your GitHub profile and share the word.
                    </p>
                  </div>

                  {/* Badge Preview and Snippet */}
                  <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 rounded-[24px] p-6 space-y-4">
                    <span className="text-xs font-bold text-dark dark:text-white block">Official Profile Badge Preview</span>
                    
                    <div className="py-6 px-4 bg-white dark:bg-[#070c16] border border-gray-100 dark:border-white/5 rounded-2xl flex items-center justify-center">
                      <img 
                        src={badgeUrl} 
                        alt="Readme Badge Live Preview"
                        className="h-9 object-contain"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-450 uppercase tracking-widest block">Copy Profile Markdown</label>
                      <div className="relative">
                        <textarea
                          readOnly
                          rows="2"
                          value={markdownBadge}
                          className="w-full px-4 py-3.5 pr-14 rounded-xl bg-black/45 border border-white/5 text-[10px] text-gray-300 font-mono focus:outline-none select-all leading-normal resize-none"
                        />
                        <button
                          onClick={handleCopyBadge}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border-0 cursor-pointer transition-colors"
                        >
                          {badgeCopied ? <Check size={14} className="text-brand-green" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Social Share Callout */}
                  <div className="p-6 border border-brand-green/20 rounded-[24px] bg-brand-green/5 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div className="text-left">
                      <span className="font-bold text-sm text-dark dark:text-white block">Tell the community you are attending!</span>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 leading-normal max-w-md">
                        Share your pass style customization or badge on socials using hashtags <strong className="text-brand-green-dark dark:text-brand-green">#OpenSourceCon</strong> and <strong className="text-brand-green-dark dark:text-brand-green">#OpenSourceCon2026</strong>.
                      </p>
                    </div>

                    <Button
                      href={`https://twitter.com/intent/tweet?text=I%27m%20attending%20%40OpenSourceConIN%20in%20Kolkata%20this%20December%21%20Check%20out%20my%20attendee%20pass%20badge%3A%20${encodeURIComponent(badgeUrl)}%20%23OpenSourceCon%20%23OpenSourceCon2026`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="py-3 px-6 text-xs font-semibold flex-shrink-0"
                      icon={Share2}
                      iconPosition="left"
                    >
                      Share on Twitter
                    </Button>
                  </div>

                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
