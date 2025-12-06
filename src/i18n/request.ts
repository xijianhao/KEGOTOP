import {getRequestConfig} from 'next-intl/server';
import {headers, cookies} from 'next/headers';
 
// 支持的语言列表
const locales = ['zh-CN', 'en'] as const;
export type Locale = (typeof locales)[number];

// 默认语言
const defaultLocale: Locale = 'zh-CN';

// 从 Accept-Language 头中解析语言偏好
function getLocaleFromHeaders(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) {
    return defaultLocale;
  }

  // 解析 Accept-Language 头，例如: "zh-CN,zh;q=0.9,en;q=0.8"
  const languages = acceptLanguage
    .split(',')
    .map((lang: string) => {
      const [locale, q = 'q=1'] = lang.trim().split(';');
      const quality = parseFloat(q.replace('q=', ''));
      return { locale: locale.toLowerCase(), quality };
    })
    .sort((a: { quality: number }, b: { quality: number }) => b.quality - a.quality);

  // 匹配支持的语言
  for (const { locale } of languages) {
    // 精确匹配
    if (locale === 'zh-cn' || locale.startsWith('zh')) {
      return 'zh-CN';
    }
    if (locale === 'en' || locale.startsWith('en')) {
      return 'en';
    }
  }

  return defaultLocale;
}

export default getRequestConfig(async () => {
  const headersList = await headers();
  const cookieStore = await cookies();
  
  // 优先从 cookie 中读取用户保存的语言偏好
  const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
  
  let locale: Locale;
  
  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    // 如果 cookie 中有有效的语言设置，使用它
    locale = cookieLocale as Locale;
  } else {
    // 否则从请求头中检测
    const acceptLanguage = headersList.get('accept-language');
    locale = getLocaleFromHeaders(acceptLanguage);
  }
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});