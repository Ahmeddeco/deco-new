export default async function IdPage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar'; id: string }>
}) {
  const id=(await params).id

	return <h1>Welcome to Idpage!</h1>
}
