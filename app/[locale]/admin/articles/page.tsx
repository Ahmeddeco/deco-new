import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import connectDB from '@/lib/db'
import Article from '@/models/articleModel'
import { PlusCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default async function ArticlesPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const locale = (await params).locale
	await connectDB()
	const data = await Article.find().sort({ createdAt: -1 })

	return (
		<>
			<div className=' flex items-center justify-between pb-8'>
				<h1>admin projects page</h1>
				<Link href={'/admin/articles/add'}>
					<Button>
						<PlusCircle className='size-6' />
						Add article
					</Button>
				</Link>
			</div>
			<Separator />
			<div className='grid gap-8 lg:grid-cols-4 grid-cols-1 mt-8'>
				{data.map(({ image, _id ,title }, i) => (
					<Card key={i} className='hover:scale-105 duration-500 ease-in-out'>
						<CardContent className=' w-full flex flex-col gap-4'>
							{/* ---------------------------------- Image --------------------------------- */}
							<Link href={`/articles/${_id}`}>
								<div className='w-full aspect-square relative mb-4'>
									<Image
										src={image}
										alt={title?.[locale] ?? 'Untitled'}
										fill
										className='rounded-2xl object-cover'
									/>
								</div>

								{/* ---------------------------------- title --------------------------------- */}
								<h6>{title?.[locale] ?? 'Untitled'}</h6>
								
							</Link>
							<Separator />
							<div className='flex items-center justify-between'>
								<Link href={`/admin/articles/edit/${_id}`}>
									<Button size={'sm'} variant={'ghost'}>
										edit
									</Button>
								</Link>
								<Link href={`/admin/articles/delete/${_id}`}>
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
