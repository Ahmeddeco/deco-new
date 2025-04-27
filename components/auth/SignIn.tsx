import { signIn } from '@/auth'
import React from 'react'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'

export default function SignIn() {
	return (
		<form
			action={async () => {
				'use server'
				await signIn('google')
			}}
		>
			<Button type='submit' variant={'default'} size={'default'}>
				Signin
				<LogIn />
			</Button>
		</form>
	)
}
