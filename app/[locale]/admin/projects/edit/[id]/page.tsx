export default async function IdPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
	const id = (await params).id
	console.log('id', id)

	return (
		<h1>
			Welcome to Editpage! Project No <br /> {id}
		</h1>
	)
}
