import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  // Páginas públicas que não exigem login
  const publicPages = [
    '/',
    '/municipios',
    '/municipios/[slug]',
    '/editais',
    '/editais/[id]',
    '/projetos',
    '/projetos/[id]',
    '/indicadores',
    '/sobre',
    '/legislacao',
    '/faq',
    '/contato',
    '/login',
    '/cadastro',
    '/recuperar-senha'
  ];

  const isPublicPage = publicPages.some(page => {
    if (page.includes('[')) {
      const regex = new RegExp(`^${page.replace('[', '\\[').replace(']', '\\]').replace('[slug]', '[^/]+')}$`);
      return regex.test(pathname);
    }
    return pathname === page;
  });

  // Se for página pública, permite acesso
  if (isPublicPage) {
    return NextResponse.next();
  }

  // Se não houver sessão e não for página pública, redireciona para login
  if (!session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Rotas específicas por tipo de usuário
  const proponenteRoutes = ['/dashboard/proponente'];
  const gestorRoutes = ['/dashboard/gestor'];
  const analistaRoutes = ['/dashboard/analista'];

  if (proponenteRoutes.some(route => pathname.startsWith(route)) && session.user.tipo !== 'proponente') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (gestorRoutes.some(route => pathname.startsWith(route)) && session.user.tipo !== 'gestor') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (analistaRoutes.some(route => pathname.startsWith(route)) && session.user.tipo !== 'analista') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};