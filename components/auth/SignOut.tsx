import { signOut } from '@/auth'
import React from 'react'
import { Button } from '../ui/button'
import { LogOut } from 'lucide-react'

export default function SignOut() {
	return (
		<form
			action={async () => {
				'use server'
				await signOut()
			}}
		>
			<Button type='submit' size={'wide'}>
      SignOut
				<LogOut />
			</Button>
		</form>
	)
}
