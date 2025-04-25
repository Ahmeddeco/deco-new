import { Card, CardContent } from '@/components/ui/card'
import { getDictionary } from '@/locales/dictionaries'
import Image from 'next/image'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default async function WorkProcesses({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section className=''>
			{/* ---------------------------------- Text ---------------------------------- */}
			<div className='w-full lg:w-1/2 flex flex-col gap-8 '>
				<h2>{dict.homePage.WorkProcesses.title}</h2>
				{dict.homePage.WorkProcesses.Processes.map(({ icon, id, p, title }) => (
					<div className='flex flex-col gap-4' key={id}>
						<Accordion type='single' collapsible>
							<AccordionItem value={id}>
								<AccordionTrigger>
									<div className='flex gap-4'>
										<div className='size-8  relative'>
											<Image
												src={icon}
												alt={title}
												fill
												className='object-cover'
											/>
										</div>
										<h6>{title}</h6>
									</div>
								</AccordionTrigger>
								<AccordionContent className='px-4'>
									<p className='text-start'>{p}</p>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				))}
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<Card className='w-full lg:w-1/2 aspect-square  relative'>
				<CardContent className=' w-full'>
					<Image
						src={'/images/home/workProcess.webp'}
						alt={'Work Processes'}
						fill
						className='object-cover rounded-2xl'
					/>
				</CardContent>
			</Card>
		</section>
	)
}
