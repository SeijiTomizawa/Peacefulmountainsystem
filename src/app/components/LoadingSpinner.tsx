import { memo } from 'react';
import { COLORS, FONTS } from '../constants/theme';

export const LoadingSpinner = memo(function LoadingSpinner() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center" 
      style={{ 
        backgroundColor: COLORS.offWhite,
        fontFamily: FONTS.sans
      }}
    >
      <div className="text-center">
        <div 
          className="inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          style={{
            width: '3rem',
            height: '3rem',
            color: COLORS.mainMaroon
          }}
          role="status"
          aria-label="読み込み中"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <p 
          className="mt-4" 
          style={{ 
            color: COLORS.navyBlue,
            fontSize: '14px'
          }}
        >
          読み込み中...
        </p>
      </div>
    </div>
  );
});