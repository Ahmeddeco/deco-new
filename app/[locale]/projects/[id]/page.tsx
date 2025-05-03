import { getDictionary } from '@/locales/dictionaries'
import AllImages from '../../../../components/frontend/projects/AllImages'

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
	const id = (await params).id
	const locale = (await params).locale
	const dict = await getDictionary(locale)
	const projectDict = dict.ourWorksPage.ourProjects[parseInt(id) - 1]

	return <AllImages id={id} projectDict={projectDict} />
}
