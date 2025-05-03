import { IsAdmin } from '@/functions/isAdmin'

export default async function AdminPage() {
	await IsAdmin()

	return <h1>Welcome to Adminpage!</h1>
}
