import connectDB from '@/lib/db'
import Project from '@/models/projectModel'
import AllImages from '@/components/frontend/projects/AllImages'

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
	const id = (await params).id
	const locale = (await params).locale

	await connectDB()
	const data = (await Project.findById(id)) as { images: string[] } | null
	if (!data) {
		throw new Error('Project not found')
	}
	console.log('data', data)

	return (
		<section className='pt-44 lg:pt-16'>
			<AllImages id={id} images={data.images} />
		</section>
	)
}
