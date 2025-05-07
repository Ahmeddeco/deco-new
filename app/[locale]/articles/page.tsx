import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import connectDB from '@/lib/db'
import { getDictionary } from '@/locales/dictionaries'
import Article from '@/models/articleModel'
import { checkRole } from '@/utils/roles'
import Image from 'next/image'
import Link from 'next/link'

export default async function ArticlesPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)
	await connectDB()
	const data = await Article.find()
		.sort({ createdAt: -1 })
		.select({ title: true, mainParagraph: true, image: true })

	const isModerator = await checkRole('moderator')
	const isAdmin = await checkRole('admin')

	return (
		<>
			<section className='flex flex-col gap-16'>
				<div className='flex flex-col gap-8'>
					<h1>{dict.articles.title}</h1>
					<p>{dict.articles.subTitle}</p>
				</div>
				{data.map(({ title, mainParagraph, image, _id }) => (
					<Card
						key={_id}
						className='flex lg:flex-row lg:odd:flex-row-reverse flex-col items-center justify-center gap-8 w-full p-4 lg:p-12 '
					>
						{/* ---------------------------------- Image --------------------------------- */}
						<div className='w-full lg:w-1/2 relative aspect-square lg:aspect-video'>
							<Image
								src={image}
								alt={title?.[locale]}
								fill
								className='rounded-2xl object-cover'
							/>
						</div>
						{/* ---------------------------------- Title --------------------------------- */}
						<div className='w-full lg:w-1/2 flex flex-col gap-4'>
							<h4>{title?.[locale]}</h4>

							<p className='max-w-2xl '>{mainParagraph?.[locale]}</p>
							<Link href={`/articles/${_id}`}>
								<Button size={'wide'}>{dict.articles.button}</Button>
							</Link>

							{isModerator ||
								(isAdmin && (
									<>
										<Separator />
										<div className='flex items-center justify-between px-16'>
											<Link href={`/admin/articles/edit/${_id}`}>
												<Button
													variant={'link'}
													size={'icon'}
													className='text-muted-foreground'
												>
													edit
												</Button>
											</Link>
											<Link href={`/admin/articles/delete/${_id}`}>
												<Button
													variant={'link'}
													size={'icon'}
													className='text-destructive'
												>
													delete
												</Button>
											</Link>
										</div>
									</>
								))}
						</div>
					</Card>
				))}
			</section>
		</>
	)
}
