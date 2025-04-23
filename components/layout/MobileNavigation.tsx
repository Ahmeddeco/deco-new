import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetClose,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import NavigationLinks from './NavigationLinks'
import { Separator } from '../ui/separator'

export default function MobileNavigation() {
	return (
		<aside className='lg:hidden block'>
			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetClose>
					<SheetContent>
						<SheetHeader>
							<SheetTitle>Digital</SheetTitle>
						</SheetHeader>
						<Separator />
						<div className='flex flex-col gap-4 p-8'>
							<NavigationLinks />
						</div>
					</SheetContent>
				</SheetClose>
			</Sheet>
		</aside>
	)
}
