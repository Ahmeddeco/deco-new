'use client'

import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-react'
import { useFormStatus } from 'react-dom'

type SubmitButtonProps = {
	title: string
}

export default function SubmitButton({ title }: SubmitButtonProps) {
	const status = useFormStatus()

	return (
		<Button type='submit' size={'wide'} className='mt-6'>
			{status.pending ? <LoaderCircle className='animate-spin' /> : title}
		</Button>
	)
}
