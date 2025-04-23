'use client'

import { NavLinks } from '@/constants/navLinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCurrentLocale } from '@/locales/client'

export default function NavigationLinks() {
	const pathName = usePathname()
	const lang = useCurrentLocale()

	return (
		<>
			{NavLinks.map(({ href, id, title }) => (
				<Link
					href={href}
					key={id}
					className={`${
						pathName === `/${lang}${href}` &&
						'font-bold text-primary underline-offset-4 underline'
					} capitalize `}
				>
					{title}
				</Link>
			))}
		</>
	)
}
