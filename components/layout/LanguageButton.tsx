'use client'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { notoKufi } from '@/styles/fonts'


export default function LanguageButton() {
	const changeLocale = useChangeLocale()
	const locale = useCurrentLocale()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='' asChild>
				<Button
					size={'icon'}
					variant={'ghost'}
					className={`${notoKufi.className} capitalize font-bold `}
				>
					{locale}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-full' align='end'>
				<DropdownMenuItem>
					<Button
						size={'icon'}
						variant={'ghost'}
						onClick={() => changeLocale('ar')}
						className={`${notoKufi.className} capitalize font-bold w-full`}
					>
						Ar
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Button
						size={'icon'}
						variant={'ghost'}
						onClick={() => changeLocale('en')}
						className={`${notoKufi.className} capitalize font-bold w-full`}
					>
						En
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
