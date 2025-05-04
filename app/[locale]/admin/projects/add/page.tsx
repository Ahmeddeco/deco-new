import AdminAddProjectForm from '@/components/admin/AdminAddProjectForm'
import { currentUser, User } from '@clerk/nextjs/server'

export default async function AddProjectPage() {
	const user = await currentUser()
	const fullName = user?.fullName ?? 'Unknown User'
	const email = user?.emailAddresses?.[0]?.emailAddress
	const image = user?.imageUrl

	return <AdminAddProjectForm fullName={fullName} email={email} image={image} />
}
