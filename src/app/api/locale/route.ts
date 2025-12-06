import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const locales = ['zh-CN', 'en'] as const;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { locale } = body;

    // 验证语言代码
    if (!locale || !locales.includes(locale as typeof locales[number])) {
      return NextResponse.json(
        { error: 'Invalid locale' },
        { status: 400 }
      );
    }

    // 设置 cookie
    const cookieStore = await cookies();
    cookieStore.set('NEXT_LOCALE', locale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1 年
      sameSite: 'lax',
    });

    return NextResponse.json({ success: true, locale });
  } catch (error) {
    console.error('Error setting locale:', error);
    return NextResponse.json(
      { error: 'Failed to set locale' },
      { status: 500 }
    );
  }
}

