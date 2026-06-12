import { openKonfHub } from '../utils/konfhub';

export const footerLinks = {
  Event: [
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Topics', href: '#topics' },
    { label: 'Venue', href: '#venue' },
  ],
  'Get Involved': [
    { label: 'Register Now', href: '#', onClick: openKonfHub },
    { label: 'Submit a Talk', href: 'https://forms.gle/tFUzkFuCyb1heshu9', external: true },
    { label: 'Become a Sponsor', href: 'https://drive.google.com/file/d/1RVrIZV0d6UskRM9k62cOlUU1A3J2pBg4/view?usp=sharing', external: true },
    { label: 'Community Partners', href: 'https://forms.gle/Kr6y4FFjtyH1mxaW8', external: true },
    { label: 'Volunteer', href: 'mailto:hello@opensourcecon.in?subject=Volunteering%20for%20OpenSourceCon%20Kolkata%202026', external: true },
  ],
  Contact: [
    { label: 'hello@opensourcecon.in', href: 'mailto:hello@opensourcecon.in' },
  ],
};

export const socialLinks = [
  { iconName: 'github', href: 'https://github.com/Souvik-kundu-off/opensource-convention', label: 'GitHub' },
  { iconName: 'twitter', href: '#', label: 'Twitter' },
  { iconName: 'linkedin', href: '#', label: 'LinkedIn' },
  { iconName: 'instagram', href: '#', label: 'Instagram' },
];
