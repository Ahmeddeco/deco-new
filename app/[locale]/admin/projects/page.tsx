import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'

export default function ProjectsPage() {
	return (
		<>
			<div className=' flex items-center justify-between pb-8'>
				<h1>add project page</h1>
				<Link href={'/admin/projects/add'}>
					<Button>
						<PlusCircle className='size-6' />
						Add project
            
					</Button>
				</Link>
			</div>
      <Separator />
		</>
	)
}
