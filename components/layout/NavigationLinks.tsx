'use client'

import { NavLinks } from '@/constants/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavigationLinks() {
	const pathName = usePathname()

	return (
		<>
			{NavLinks.map(({ href, id, title }) => (
				<Link
					href={href}
					key={id}
					className={`${
						['en', 'ar'].some((locale) => pathName === `/${locale}${href}`) &&
						'text-chart-3 font-semibold'
					} capitalize`}
				>
					{title}
				</Link>
			))}
		</>
	)
}
