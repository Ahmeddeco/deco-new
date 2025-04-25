import AboutUs from './components/AboutUs'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import WorkProcesses from './components/WorkProcesses'

export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	return (
		<>
			<Hero params={params} />
			<AboutUs params={params} />
			<OurServices params={params} />
			<WorkProcesses params={params} />
		</>
	)
}
