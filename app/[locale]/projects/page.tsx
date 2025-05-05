import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { IsModerator } from '@/functions/isModerator'
import connectDB from '@/lib/db'
import { getDictionary } from '@/locales/dictionaries'
import Project from '@/models/project'
import { checkRole } from '@/utils/roles'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProjectsPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)
	await connectDB()
	const data = await Project.find().sort({ createdAt: -1 })

	const isModerator = await checkRole('moderator')

	return (
		<>
			<section className='flex flex-col gap-16'>
				<div className='flex flex-col gap-8'>
					<h1>{dict.ourWorksPage.title}</h1>
					<p>{dict.ourWorksPage.p}</p>
				</div>
				{data.map(
					({ _id, city, country, createdAt, description, images, title }) => (
						<Card
							key={_id}
							className='flex lg:flex-row lg:odd:flex-row-reverse flex-col items-center justify-center gap-8 w-full p-4 lg:p-12 '
						>
							{/* ---------------------------------- Image --------------------------------- */}
							<div className='w-full lg:w-1/2 relative aspect-square lg:aspect-video'>
								<Image
									src={images[0]}
									alt={title?.[locale]}
									fill
									className='rounded-2xl object-cover'
								/>
							</div>
							{/* ---------------------------------- Title --------------------------------- */}
							<div className='w-full lg:w-1/2 flex flex-col gap-4'>
								<h2>{title?.[locale]}</h2>
								<h6 className='text-chart-3'>
									{city?.[locale]} - {country?.[locale]}
								</h6>
								<p className='max-w-2xl '>{description?.[locale]}</p>
								<Link href={`/projects/${_id}`}>
									<Button size={'wide'}>{dict.seeFullProject.title}</Button>
								</Link>

								{isModerator && (
									<>
										<Separator />
										<div className='flex items-center justify-between px-16'>
											<Link href={`/admin/projects/edit/${_id}`}>
												<Button variant={'ghost'} size={'icon'} className='text-muted-foreground'>
													edit
												</Button>
											</Link>
											<Link href={`/admin/projects/delete/${_id}`}>
												<Button variant={'ghost'} size={'icon'} className='text-destructive'>
													delete
												</Button>
											</Link>
										</div>
									</>
								)}
							</div>
						</Card>
					)
				)}
			</section>
		</>
	)
}
