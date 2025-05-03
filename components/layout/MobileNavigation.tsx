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
				<SheetTrigger className="size-9">
					<Menu className="size-9"/>
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Design</SheetTitle>
					</SheetHeader>
					<Separator />
					<div className='flex flex-col gap-4 p-8'>
						<NavigationLinks />
					</div>
					<SheetFooter >
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
