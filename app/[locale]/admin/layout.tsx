import AdminMobileNavigation from '@/components/layout/AdminMobileNavigation'
import AdminNavLinks from '@/components/layout/AdminNavLinks'
import { Card, CardContent } from '@/components/ui/card'

export default async function AdminLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: 'ar' | 'en' }>
}) {
	const { locale } = await params

	return (
		<div className='flex gap-12 mt-12 '>
			<aside className='hidden lg:block w-2/12 h-[760px]'>
				<Card className='h-full'>
					<CardContent>
						<AdminNavLinks locale={locale} />
					</CardContent>
				</Card>
			</aside>
			<aside className='lg:hidden absolute bottom-24 right-12'>
				<AdminMobileNavigation params={ params } />
			</aside>
			<div className=' lg:w-10/12 w-full min-h-dvh h-auto'>{children}</div>
		</div>
	)
}
