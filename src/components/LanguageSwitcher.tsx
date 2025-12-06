'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'zh-CN', flag: '🇨🇳', name: '中文' },
  { code: 'en', flag: '🇺🇸', name: 'English' },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const [isChanging, setIsChanging] = useState(false);

  const handleLanguageChange = async (newLocale: string) => {
    if (newLocale === locale || isChanging) return;
    
    setIsChanging(true);
    
    try {
      const response = await fetch('/api/locale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale: newLocale }),
      });

      if (response.ok) {
        // 刷新页面以应用新语言
        router.refresh();
        window.location.reload();
      }
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsChanging(false);
    }
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];
  const otherLanguage = languages.find(lang => lang.code !== locale) || languages[1];

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
    }}>
      <button
        onClick={() => handleLanguageChange(otherLanguage.code)}
        disabled={isChanging}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '8px',
          padding: '8px 12px',
          cursor: isChanging ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '18px',
          color: '#fff',
          transition: 'all 0.2s',
          opacity: isChanging ? 0.6 : 1,
        }}
        onMouseEnter={(e) => {
          if (!isChanging) {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
        }}
        title={`切换到 ${otherLanguage.name}`}
      >
        <span>{otherLanguage.flag}</span>
        <span style={{ fontSize: '14px' }}>{otherLanguage.name}</span>
      </button>
    </div>
  );
}

