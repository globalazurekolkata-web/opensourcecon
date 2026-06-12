export const scheduleTabs = [
  { name: 'Morning', time: '09:00 AM - 12:30 PM' },
  { name: 'Afternoon', time: '01:30 PM - 05:00 PM' },
  { name: 'Evening', time: '05:00 PM - 08:30 PM' },
];

export const scheduleData = {
  Morning: [
    { time: '09:00 AM', title: 'Registration & Welcome Tea', type: 'break' },
    { time: '10:00 AM', title: 'Opening Keynote', type: 'talk' },
    { time: '11:00 AM', title: 'Panel Discussion', type: 'panel' },
    { time: '12:00 PM', title: 'Lightning Talks', type: 'talk' },
    { time: '12:30 PM', title: 'Lunch Break', type: 'break' },
  ],
  Afternoon: [
    { time: '01:30 PM', title: 'Workshop Track A: Kubernetes 101', type: 'workshop' },
    { time: '01:30 PM', title: 'Workshop Track B: Contributing to OSS', type: 'workshop' },
    { time: '03:00 PM', title: 'Tech Talks', type: 'talk' },
    { time: '04:00 PM', title: 'Community Showcase', type: 'panel' },
    { time: '04:45 PM', title: 'Tea Break', type: 'break' },
  ],
  Evening: [
    { time: '05:00 PM', title: 'Closing Keynote', type: 'talk' },
    { time: '06:00 PM', title: 'Awards & Recognition', type: 'panel' },
    { time: '06:30 PM', title: 'Networking & After Party', type: 'break' },
  ],
};

export const scheduleHighlights = [
  {
    num: '01',
    title: 'Keynotes & Panels',
    desc: 'Hear from industry leaders and learn about the future of open source.',
  },
  {
    num: '02',
    title: 'Hands-on Workshops',
    desc: 'Dive deep into technical sessions led by core maintainers.',
  },
  {
    num: '03',
    title: 'Networking',
    desc: 'Connect with community members and build relationships.',
  },
  {
    num: '04',
    title: 'After Party',
    desc: 'Celebrate the day with music, food, and like-minded developers.',
  },
];
