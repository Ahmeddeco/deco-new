import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const I18nMiddleware = createI18nMiddleware({
	locales: ['en', 'ar'], // Supported locales
	defaultLocale: 'en', // Default locale
})

const isProtectedRoute = createRouteMatcher(['admin/(.*)'])

export default clerkMiddleware(async (auth, req) => {
	if (isProtectedRoute(req)) await auth.protect()

	return I18nMiddleware(req)
})

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
		'/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)',
	],
}