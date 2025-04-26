import { getDictionary } from '@/locales/dictionaries'

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
	const id = (await params).id
	const locale = (await params).locale
	const dict = await getDictionary(locale)

	return <h1>{dict.homePage.WorkProcesses.title}{id}</h1>
}
