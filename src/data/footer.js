import { openKonfHub } from '../utils/konfhub';

export const footerLinks = {
  Event: [
    { label: 'About', href: '#about' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Team', href: '#team' },
    { label: 'Venue', href: '#venue' },
  ],
  'Get Involved': [
    { label: 'Register Now', href: '', onClick: openKonfHub },
    { label: 'Become a Sponsor', href: 'https://forms.fillout.com/t/2sKNq3RM68us', external: true },
    { label: 'Submit a Talk', href: 'https://forms.gle/tFUzkFuCyb1heshu9', external: true },
    { label: 'Community Partners', href: 'https://forms.gle/Kr6y4FFjtyH1mxaW8', external: true },
    { label: 'Volunteer', href: 'https://docs.google.com/forms/d/e/1FAIpQLScmPrA5nQAFVUPHbTd_wWH0WTaTAvMQPDZiSpe15sAgpFVVGw/viewform', external: true },
  ],
  Contact: [
    { label: 'opensourceconkol@gmail.com', href: 'mailto:opensourceconkol@gmail.com' },
  ],
};

export const socialLinks = [
  { iconName: 'linkedin', href: 'https://www.linkedin.com/company/opensource-con-india', label: 'LinkedIn' },
  { iconName: 'instagram', href: 'https://www.instagram.com/opensourceconindia', label: 'Instagram' },
  { iconName: 'twitter', href: 'https://www.x.com/OpenSourceConIN', label: 'Twitter' },
  { iconName: 'github', href: 'https://www.github.com/Souvik-kundu-off/opensource-convention', label: 'GitHub' },
];
