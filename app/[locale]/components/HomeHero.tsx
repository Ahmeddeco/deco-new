import { getDictionary } from '@/locales/dictionaries'
import HeroCarousel from './HeroCarousel'

export default async function HomeHero({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {

  const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section>
			<HeroCarousel />

			<div className='flex flex-col items-center justify-center gap-4 '>
        <h1>{dict.homePage.homeHero.h1}</h1>
        <h1>{dict.homePage.homeHero.h1}</h1>
        <h1>{dict.homePage.homeHero.h1}</h1>
      </div>
		</section>
	)
}
