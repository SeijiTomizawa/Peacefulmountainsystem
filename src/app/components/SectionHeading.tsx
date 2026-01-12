import React from 'react';
import { FONTS, COLORS } from '../constants/theme';

interface SectionHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  color?: 'navy' | 'maroon' | 'white';
  align?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
  withUnderline?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  level = 2,
  color = 'navy',
  align = 'center',
  className = '',
  style = {},
  withUnderline = false,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const colorMap = {
    navy: COLORS.navyBlue,
    maroon: COLORS.mainMaroon,
    white: COLORS.white,
  };

  const sizeMap = {
    1: '32px',
    2: '26px',
    3: '20px',
    4: '18px',
  };

  return (
    <div className={className}>
      <Tag
        style={{
          fontFamily: FONTS.serif,
          fontSize: sizeMap[level],
          fontWeight: 700,
          color: colorMap[color],
          lineHeight: '1.5',
          textAlign: align,
          ...style,
        }}
      >
        {children}
      </Tag>
      {withUnderline && (
        <div
          style={{
            width: '60px',
            height: '3px',
            backgroundColor: COLORS.heritageRed,
            margin: align === 'center' ? '8px auto' : '8px 0',
          }}
        />
      )}
    </div>
  );
};
