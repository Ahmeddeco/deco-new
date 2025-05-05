import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import connectDB from '@/lib/db'
import Project from '@/models/project'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProjectsPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const locale = (await params).locale
	await connectDB()
	const data = await Project.find().sort({ createdAt: -1 })

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
			<div className='grid gap-8 lg:grid-cols-4 grid-cols-1 mt-8'>
				{data.map(({ images, city, title, country, _id }, i) => (
					<Card key={i} className='hover:scale-105 duration-500 ease-in-out'>
						<CardContent className=' w-full flex flex-col gap-4'>
							{/* ---------------------------------- Image --------------------------------- */}
							<Link href={`/admin/projects/${_id}`}>
								<div className='w-full aspect-square relative mb-4'>
									<Image
										src={images[0]}
										alt={title?.[locale] ?? 'Untitled'}
										fill
										className='rounded-2xl object-cover'
									/>
								</div>

								{/* ---------------------------------- title --------------------------------- */}
								<h6>{title?.[locale] ?? 'Untitled'}</h6>
								<div className='flex  items-center justify-between'>
									<p className='text-sm text-chart-3 capitalize'>
										{city?.[locale] ?? 'Untitled'}
									</p>
									<p className='text-sm text-chart-3 capitalize'>
										{country?.[locale] ?? 'Untitled'}
									</p>
								</div>
							</Link>
							<Separator />
							<div className='flex items-center justify-between'>
								<Link href={`/admin/projects/edit/${_id}`}>
									<Button size={'sm'} variant={'ghost'}>
										edit
									</Button>
								</Link>
								<Link href={`/admin/projects/delete/${_id}`}>
									<Button size={'sm'} variant={'ghost'}>
										delete
									</Button>
								</Link>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</>
	)
}
