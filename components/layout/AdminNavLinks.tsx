'use client'

import { adminNavLinks } from '@/constants/adminNavLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminNavLinks({ locale }: { locale: 'ar' | 'en' }) {
	const pathName = usePathname()
	
	return (
		<nav className='flex flex-col gap-6'>
			{adminNavLinks.map(({ href, id, title }) => (
				<Link
					key={id}
					href={href}
					className={`${pathName === `/${locale}${href}` && 'text-chart-3'}`}
				>
					<h6>{title}</h6>
				</Link>
			))}
		</nav>
	)
}
