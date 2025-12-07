
import Link from "next/link";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import meImage from '@/assets/images/me.webp';
import wxImage from '@/assets/images/wx.webp';
import xhsImage from '@/assets/images/xhs.jpg';
import insImage from '@/assets/images/ins.jpg';
import tgImage from '@/assets/images/tg.jpg';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="profile-container">
      {/* 头像 */}
      <div className="profile-avatar" style={{
        borderRadius: '50%',
        overflow: 'hidden',
        border: '2px solid #fff',
        flexShrink: 0
      }}>
        <Image 
          src={meImage} 
          alt={t('name')}
          width={120}
          height={120}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>

      {/* 个人信息 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        textAlign: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{t('name')}</h1>
        <p style={{ margin: 0, fontSize: '16px', opacity: 0.9 }}>{t('occupation')}</p>
        <p style={{ 
          margin: 0, 
          fontSize: '14px', 
          opacity: 0.8,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          justifyContent: 'center'
        }}>
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{ opacity: 0.8, flexShrink: 0 }}
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {t('location')}
        </p>
      </div>

      {/* 联系方式 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        fontSize: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ opacity: 0.8 }}>{t('emailLabel')}</span>
          <a 
            href="mailto:xijianhao@outlook.com" 
            style={{ color: '#fff', textDecoration: 'none', opacity: 0.9 }}
          >
            xijianhao@outlook.com
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ opacity: 0.8 }}>{t('blogLabel')}</span>
          <Link 
            href="https://blog.keepgoing.top" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', textDecoration: 'none', opacity: 0.9 }}
          >
             blog.keepgoing.top
          </Link>
        </div>
      </div>

      {/* 社交链接区域 */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        marginTop: '20px'
      }}>
        <h2 style={{ 
          margin: 0, 
          fontSize: '18px', 
          fontWeight: 'normal',
          opacity: 0.9 
        }}>
          {t('contactMe')}
        </h2>
        
        <div className="profile-social-grid">
          {/* 微信二维码 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div className="profile-social-item" style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <Image 
                src={wxImage} 
                alt={t('wechat')}
                width={104}
                height={104}
                style={{ 
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <span style={{ fontSize: '14px', opacity: 0.9 }}>{t('wechat')}</span>
          </div>

          {/* 小红书二维码 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div className="profile-social-item" style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <Image 
                src={xhsImage} 
                alt={t('xiaohongshu')}
                width={104}
                height={104}
                style={{ 
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <span style={{ fontSize: '14px', opacity: 0.9 }}>{t('xiaohongshu')}</span>
          </div>

          {/* Instagram二维码 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div className="profile-social-item" style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <Image 
                src={insImage} 
                alt={t('instagram')}
                width={104}
                height={104}
                style={{ 
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <span style={{ fontSize: '14px', opacity: 0.9 }}>{t('instagram')}</span>
          </div>

          {/* Telegram二维码 */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div className="profile-social-item" style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              padding: '8px',
              boxSizing: 'border-box'
            }}>
              <Image 
                src={tgImage} 
                alt={t('telegram')}
                width={104}
                height={104}
                style={{ 
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
            <span style={{ fontSize: '14px', opacity: 0.9 }}>{t('telegram')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
