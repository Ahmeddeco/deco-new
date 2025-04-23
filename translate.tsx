
export default async function HomePage({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	return (
		<>
			<Hero params={params} />
		
		</>
	)
}
