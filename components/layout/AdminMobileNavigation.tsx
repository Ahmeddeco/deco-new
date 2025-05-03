import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ShieldUserIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import AdminNavLinks from './AdminNavLinks'

export default async function AdminMobileNavigation({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params

	return (
		<Sheet>
			<SheetTrigger>
				<ShieldUserIcon className='size-10' />
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Admin Panel</SheetTitle>
				</SheetHeader>
				<Separator />
				<AdminNavLinks locale={locale} />
			</SheetContent>
		</Sheet>
	)
}
