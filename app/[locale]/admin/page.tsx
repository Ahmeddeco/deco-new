import { IsAdmin } from '@/functions/isAdmin'

export default async function AdminPage() {
	await IsAdmin()

	return (
		<>
			<h1>Admin Page</h1>
		</>
	)
}
