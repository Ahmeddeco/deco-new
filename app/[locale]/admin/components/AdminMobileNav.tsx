'use client'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { AdminNavLinks } from '@/constants/adminNavLinks'
import { ShieldUser } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminMobileNav() {

	const pathName = usePathname()


	return (
		<Sheet>
			<SheetTrigger>
				<div className="size-12 bg-background/90 flex items-center justify-center rounded-full border-foreground border">

			<ShieldUser className='size-8'/>
				</div>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Admin</SheetTitle>
					
				</SheetHeader>
				{AdminNavLinks.map(({ href, id, title }) => (
						<Link
							href={href}
							key={id}
							className={`${
								['en', 'ar'].some(
									(locale) => pathName === `/${locale}${href}`
								) && 'text-chart-3 font-semibold'
							} capitalize px-8 py-4`}
						>
							{title}
						</Link>
					))}
			</SheetContent>
		</Sheet>
	)
}
