import AddArticleFrom from '@/components/admin/AddArticleFrom'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { currentUser } from '@clerk/nextjs/server'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export default async function ArticlesPage() {
	const user = await currentUser()
	const fullName = user?.fullName ?? 'Unknown User'
	const email = user?.emailAddresses?.[0]?.emailAddress
	const image = user?.imageUrl

	return (
		<>
			<div className=' flex items-center justify-between pb-8'>
				<h1>admin Articles page</h1>
				<Link href={'/admin/articles/add'}>
					<Button>
						<PlusCircle className='size-6' />
						Add Article
					</Button>
				</Link>
			</div>
			<Separator />
		</>
	)
}
