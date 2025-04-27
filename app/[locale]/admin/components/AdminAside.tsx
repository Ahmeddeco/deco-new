'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { AdminNavLinks } from '@/constants/adminNavLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminAside() {
	const pathName = usePathname()

	return (
		<aside className='lg:block hidden w-2/12 h-dvh'>
			<Card>
				<CardHeader>
					<CardTitle>
						<Link href={'/admin'} className='font-bold'>
							Admin
						</Link>
					</CardTitle>
				</CardHeader>
				<Separator />
				<CardContent className='flex flex-col gap-8'>
					{AdminNavLinks.map(({ href, id, title }) => (
						<Link
							href={href}
							key={id}
							className={`${
								['en', 'ar'].some(
									(locale) => pathName === `/${locale}${href}`
								) && 'text-chart-3 font-semibold'
							} capitalize`}
						>
							{title}
						</Link>
					))}
				</CardContent>
			</Card>
		</aside>
	)
}
