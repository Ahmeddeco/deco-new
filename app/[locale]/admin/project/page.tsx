import { IsAdmin } from '@/functions/isAdmin'
import { IsModerator } from '@/functions/isModerator'

export default async function ProjectPage() {
	await IsModerator()

	return <h1>Welcome to Projectpage!</h1>
}
