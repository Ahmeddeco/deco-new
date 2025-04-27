import { auth } from '@/auth'
import SignIn from './SignIn'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import { UserRound } from 'lucide-react'
import SignOut from './SignOut'

export default async function UserButton() {
	const session = await auth()

	if (!session) {
		return <SignIn />
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className='size-9 relative'>
					{session.user?.image ? (
						<Image
							src={session.user?.image}
							alt={'user'}
							fill
							className='rounded-full object-cover'
						/>
					) : (
						<UserRound />
					)}
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='w-full flex flex-col items-center justify-center p-8'
			>
				<DropdownMenuLabel>
					<h5>{session.user?.name}</h5>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<p>{session.user?.email}</p>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<SignOut />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
