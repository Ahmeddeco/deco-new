import StartProjectBtn from '@/components/shared/StartProjectBtn'
import { Card, CardContent } from '@/components/ui/card'
import { getDictionary } from '@/locales/dictionaries'
import Image from 'next/image'

export default async function OurServices({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section className='reverse'>
			{/* ---------------------------------- Text ---------------------------------- */}
			<div className='w-full lg:w-1/2 flex flex-col gap-8'>
				<h2>{dict.homePage.ourServices.title}</h2>
				<p>{dict.homePage.ourServices.p}</p>
				<StartProjectBtn params={params} />
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<Card className='w-full lg:w-1/2 p-0'>
				<CardContent className='relative w-full aspect-square lg:aspect-video'>
					<Image
						src={'/images/home/ourServices.webp'}
						alt={'Our Services'}
						fill
						className='object-cover rounded-2xl'
					/>
				</CardContent>
			</Card>
		</section>
	)
}
