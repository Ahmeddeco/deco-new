import HomeAbout from './components/HomeAbout'
import HomeHero from './components/HomeHero'

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	return (
		<>
			<HomeHero params={params} />
			<HomeAbout params={params} />
		</>
	)
}
