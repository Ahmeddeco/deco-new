import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center gap-8 h-dvh'>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>
				<Button>Return Home</Button>
			</Link>
		</div>
	)
}
