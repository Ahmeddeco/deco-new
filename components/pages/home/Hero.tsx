import { getDictionary } from '@/locales/dictionaries'
import StartProjectBtn from '@/components/shared/StartProjectBtn'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

export default async function Hero({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section className='flex-col'>
			{/* ---------------------------------- Text ---------------------------------- */}
			<div className='flex flex-col items-center justify-center gap-8 '>
				<h1 className='text-center capitalize'>{dict.homePage.homeHero.h2}</h1>
				<h2 className='text-chart-3 text-center'>
					{dict.homePage.homeHero.h2Br}
				</h2>
				<p className='text-center'>
					{dict.homePage.homeHero.p}
					<br /> {dict.homePage.homeHero.pBr}
				</p>
				<StartProjectBtn params={params} />
			</div>

			{/* ------------------------------ HeroCarousel ------------------------------ */}
			{/* <MainCarousel images={HeroCarouselImages} /> */}
			<Card className='w-full max-w-6xl relative aspect-square lg:aspect-video'>
				<CardContent>
					<Image
						src={'/images/home/HeroImage3.webp'}
						alt={'hero'}
						fill
						priority
						className='rounded-2xl object-cover'
					/>
				</CardContent>
			</Card>
		</section>
	)
}
