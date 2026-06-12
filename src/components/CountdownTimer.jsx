import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-12-05T09:00:00+05:30'); // Kolkata Time

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-4 items-center">
      {timerItems.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px] p-3 rounded-2xl bg-white/5 dark:bg-white/[0.03] backdrop-blur-md border border-gray-200/20 dark:border-white/5 shadow-sm hover:border-brand-green/30 transition-all duration-300"
        >
          <span className="font-mono font-extrabold text-2xl md:text-3xl text-brand-green leading-none">
            {String(item.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-gray-secondary dark:text-gray-400 font-semibold mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
