import React from 'react';

const CustomButton = ({
  variant = 'default',
  size = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    default: 'bg-gray-700 text-white hover:bg-gray-800',
    outline: 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-800',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
  };

  const sizeClasses = {
    default: 'h-10 px-4 py-2 text-sm rounded-xl',
    sm: 'h-9 px-3 py-1 text-sm rounded-md',
    lg: 'h-11 px-8 py-3 text-lg rounded-xl',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;
