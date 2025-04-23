import { getDictionary } from '@/locales/dictionaries'
import StartProjectBtn from '@/components/shared/StartProjectBtn'
import { HeroCarouselImages } from '@/constants/home'
import MainCarousel from '../../../components/shared/MainCarousel'

export default async function HomeHero({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section>
			{/* ---------------------------------- Text ---------------------------------- */}
			<div className='flex flex-col items-center justify-center gap-4 '>
				<h1 className='text-center capitalize'>
					{dict.homePage.homeHero.h2}
					<br />
					<span className='text-primary'>{dict.homePage.homeHero.h2Br}</span>
				</h1>
				<p className='text-center'>
					{dict.homePage.homeHero.p}
					<br /> {dict.homePage.homeHero.pBr}
				</p>
				<StartProjectBtn params={params} />
			</div>

			{/* ------------------------------ HeroCarousel ------------------------------ */}
			<MainCarousel images={HeroCarouselImages} />
		</section>
	)
}
