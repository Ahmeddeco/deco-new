import MainCard from '@/components/shared/MainCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import connectDB from '@/lib/db'
import Project from '@/models/projectModel'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import { Fragment } from 'react'

export default async function ProjectsPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	await connectDB()
	const data = await Project.find().sort({ createdAt: -1 })

	return (
		<>
			<div className=' flex items-center justify-between pb-8'>
				<h1>admin projects page</h1>
				<Link href={'/admin/projects/add'}>
					<Button>
						<PlusCircle className='size-6' />
						Add project
					</Button>
				</Link>
			</div>
			<Separator />
			<div className='grid gap-8 lg:grid-cols-4 grid-cols-1 mt-8'>
				{data.map(({ images, city, title, country, _id }) => (
					<Fragment key={_id}>
						<MainCard
							image={images[0]}
							_id={_id}
							title={title}
							params={params}
							distention='projects'
							city={city}
							country={country}
						/>
					</Fragment>
				))}
			</div>
		</>
	)
}
