import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme/theme-provider'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { I18nProviderClient } from '@/locales/client'
import localFont from 'next/font/local'

export const Cairo = localFont({
	src: '../../public/fonts/Cairo.ttf',
})

export const metadata: Metadata = {
	title: 'Deco | Interior Design Studio',
	description:
		'An Interior Design Studio from egypt , We believe in the good design equal good life.',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: 'ar' | 'en' }>
}>) {
	const { locale } = await params
	return (
		<html
			lang={locale}
			suppressHydrationWarning
			dir={locale === 'en' ? 'ltr' : 'rtl'}
		>
			<body className={`${Cairo.className} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<I18nProviderClient locale={locale}>
						<Header />
						<main className='container mx-auto  px-4 min-h-dvh pt-16'>
							{children}
						</main>
						<Footer params={params} />
					</I18nProviderClient>
				</ThemeProvider>
			</body>
		</html>
	)
}
