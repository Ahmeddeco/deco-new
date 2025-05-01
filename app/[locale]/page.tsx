import AboutUs from '../../components/pages/home/AboutUs'
import Hero from '../../components/pages/home/Hero'
import OurServices from '../../components/pages/home/OurServices'
import WorkProcesses from '../../components/pages/home/WorkProcesses'

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
