import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, BORDER_RADIUS, TRANSITIONS } from '../constants/theme';

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  style = {},
}) => {
  const sizeStyles = {
    sm: { padding: '10px 20px', fontSize: '13px' },
    md: { padding: '12px 24px', fontSize: '14px' },
    lg: { padding: '14px 32px', fontSize: '15px' },
  };

  const variantStyles = {
    primary: {
      backgroundColor: COLORS.skyBlue,
      hoverColor: COLORS.skyBlueHover,
    },
    secondary: {
      backgroundColor: COLORS.mainMaroon,
      hoverColor: COLORS.heritageRed,
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link
      to={to}
      className={className}
      style={{
        backgroundColor: isHovered
          ? variantStyles[variant].hoverColor
          : variantStyles[variant].backgroundColor,
        color: COLORS.white,
        ...sizeStyles[size],
        borderRadius: BORDER_RADIUS.md,
        fontWeight: 600,
        textDecoration: 'none',
        display: 'inline-block',
        transition: `all ${TRANSITIONS.base}`,
        textAlign: 'center',
        ...style,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
};
