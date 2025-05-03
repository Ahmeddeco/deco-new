import AboutUs from '../../components/frontend/home/AboutUs'
import Hero from '../../components/frontend/home/Hero'
import OurServices from '../../components/frontend/home/OurServices'
import WorkProcesses from '../../components/frontend/home/WorkProcesses'

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
