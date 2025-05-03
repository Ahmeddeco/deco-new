import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function AuthButton() {
	return (
		<div className='flex items-center justify-center gap-4'>
			<SignedOut>
				<SignInButton />
			</SignedOut>
			<SignedIn>
				<UserButton />
			</SignedIn>
		</div>
	)
}
