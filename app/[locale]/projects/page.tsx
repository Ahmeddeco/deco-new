import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getDictionary } from '@/locales/dictionaries'
import Image from 'next/image'
import Link from 'next/link'

export default async function ProjectsPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<>
			<section className='flex flex-col gap-16'>
				<div className='flex flex-col gap-8'>
					<h1>{dict.ourWorksPage.title}</h1>
					<p>{dict.ourWorksPage.p}</p>
				</div>
				{dict.ourWorksPage.ourProjects.map(
					({ id, location, paragraph, pic, title }) => (
						<div
							key={id}
							className='flex lg:flex-row lg:odd:flex-row-reverse flex-col items-center justify-center gap-8 w-full '
						>
							{/* ---------------------------------- Image --------------------------------- */}
							<Card className='w-full lg:w-1/2 relative aspect-square lg:aspect-video'>
								<CardContent>
									<Image
										src={pic}
										alt={title}
										fill
										className='rounded-2xl object-cover'
									/>
								</CardContent>
							</Card>
							{/* ---------------------------------- Title --------------------------------- */}
							<div className='w-full lg:w-1/2 flex flex-col gap-4'>
								<h2>{title}</h2>
								<h6 className='text-chart-3'>{location}</h6>
								<p className='max-w-2xl '>{paragraph}</p>
								<Link href={`/projects/${id}`}>
									<Button className='capitalize'>
										{dict.seeFullProject.title}
									</Button>
								</Link>
							</div>
						</div>
					)
				)}
			</section>
		</>
	)
}
