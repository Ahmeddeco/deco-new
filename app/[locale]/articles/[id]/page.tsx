import connectDB from '@/lib/db'
import Article from '@/models/articleModel'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import Image from 'next/image'

type Points = {
	title: {
		ar: string
		en: string
	}
	paragraph: {
		ar: string
		en: string
	}
	_id: string
}[]

export default async function IdPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
	const locale = (await params).locale
	const id = (await params).id
	await connectDB()
	const data = await Article.findById(id)
	const points: Points = data.points

	return (
		<div className='flex flex-col gap-8 items-center justify-between'>
			{/* -------------------------------- main text ------------------------------- */}
			<div className='flex flex-col justify-center gap-8 pt-12 max-w-7xl '>
				<h2 className='text-center'>{data.title[locale]}</h2>
				<p className='text-center'>{data.mainParagraph[locale]}</p>
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<div className='relative max-w-5xl w-full aspect-square lg:aspect-video '>
				<Image
					src={data.image}
					alt={data.title.en}
					fill
					className='rounded-2xl object-cover'
				/>
			</div>

			{/* -------------------------------- Accordion ------------------------------- */}
			{points.map(({ _id, paragraph, title }) => (
				<Accordion
					type='single'
					collapsible
					key={_id}
					className='w-full max-w-4xl'
				>
					<AccordionItem value='item-1'>
						<AccordionTrigger>
							<h6>{title[locale]}</h6>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-start px-4'>{paragraph[locale]}</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			))}
		</div>
	)
}
