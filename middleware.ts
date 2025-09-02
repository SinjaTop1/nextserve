import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle trailing slashes consistently
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newPathname = pathname.slice(0, -1)
    return NextResponse.redirect(new URL(newPathname, request.url), 301)
  }

  // Redirect old paths to new structure if needed
  if (pathname === '/privacy-policy') {
    return NextResponse.redirect(new URL('/privacy', request.url), 301)
  }
  
  if (pathname === '/terms-of-service') {
    return NextResponse.redirect(new URL('/terms', request.url), 301)
  }

  // Ensure www redirects to non-www
  if (request.headers.get('host')?.startsWith('www.')) {
    const newUrl = new URL(request.url)
    newUrl.hostname = newUrl.hostname.replace('www.', '')
    return NextResponse.redirect(newUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
