export default async function IdPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
	const locale = (await params).locale
  const id=(await params).id
  console.log('id', id)

	return <h1>Welcome to Idpage!</h1>
}
