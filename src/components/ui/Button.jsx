import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  onClick,
  target,
  rel,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const hasDisplayClass = className.split(' ').some(c => {
    const clean = c.replace('!', '');
    const parts = clean.split(':');
    const utility = parts[parts.length - 1];
    return ['hidden', 'flex', 'inline-flex', 'block', 'inline-block', 'grid', 'inline-grid'].includes(utility);
  });

  const baseStyles = `${hasDisplayClass ? '' : 'inline-flex'} items-center justify-center gap-2 font-medium text-sm transition-all duration-200`;
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    text: 'text-gray-600 dark:text-gray-400 hover:text-dark dark:hover:text-white !bg-transparent hover:bg-gray-50/80 dark:hover:bg-white/5 px-4 py-2 rounded-xl',
  };

  const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="text-base flex-shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="text-base flex-shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
        target={target}
        rel={rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClassName}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
