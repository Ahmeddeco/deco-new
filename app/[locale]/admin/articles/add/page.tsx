import AddArticleFrom from '@/components/admin/AddArticleFrom'
import { currentUser } from '@clerk/nextjs/server'

export default async function AddArticlePage() {
	const user = await currentUser()
	const fullName = user?.fullName ?? 'Unknown User'
	const email = user?.emailAddresses?.[0]?.emailAddress??''
	const image = user?.imageUrl ?? ''

	return <AddArticleFrom fullName={fullName} email={email} image={image} />
}
