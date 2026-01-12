import React, { Component, ReactNode } from 'react';
import { COLORS, FONTS } from '../constants/theme';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.offWhite,
            fontFamily: FONTS.sans,
            padding: '24px',
          }}
        >
          <div
            style={{
              maxWidth: '500px',
              textAlign: 'center',
              backgroundColor: COLORS.white,
              padding: '48px 32px',
              borderRadius: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                fontSize: '64px',
                marginBottom: '24px',
              }}
            >
              ⚠️
            </div>
            <h1
              style={{
                fontFamily: FONTS.serif,
                fontSize: '24px',
                fontWeight: 700,
                color: COLORS.mainMaroon,
                marginBottom: '16px',
              }}
            >
              エラーが発生しました
              <br />
              <span style={{ fontSize: '18px' }}>An Error Occurred</span>
            </h1>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.8',
                color: COLORS.navyBlue,
                marginBottom: '32px',
                opacity: 0.8,
              }}
            >
              申し訳ございません。予期しないエラーが発生しました。
              <br />
              ホームページに戻ってもう一度お試しください。
            </p>
            {this.state.error && (
              <details
                style={{
                  marginBottom: '24px',
                  textAlign: 'left',
                  fontSize: '12px',
                  color: COLORS.navyBlue,
                  opacity: 0.6,
                  padding: '12px',
                  backgroundColor: COLORS.warmBeige,
                  borderRadius: '8px',
                }}
              >
                <summary style={{ cursor: 'pointer', marginBottom: '8px' }}>
                  エラー詳細 (Error Details)
                </summary>
                <pre
                  style={{
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              style={{
                backgroundColor: COLORS.skyBlue,
                color: COLORS.white,
                padding: '12px 32px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.skyBlueHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.skyBlue;
              }}
            >
              ホームに戻る / Return to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
