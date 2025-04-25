import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
	SheetFooter,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import NavigationLinks from './NavigationLinks'
import { Separator } from '../ui/separator'
import ThemeButton from '../theme/ThemeButton'
import LanguageButton from './LanguageButton'

export default function MobileNavigation() {
	return (
		<aside className='lg:hidden block'>
			<Sheet>
				<SheetTrigger>
					<Menu />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Digital</SheetTitle>
					</SheetHeader>
					<Separator />
					<div className='flex flex-col gap-4 p-8'>
						<NavigationLinks />
					</div>
					<SheetFooter className=''>
						<Separator />
						<div className='flex items-center justify-between py-4 px-8  '>
							<ThemeButton />
							<LanguageButton />
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</aside>
	)
}
