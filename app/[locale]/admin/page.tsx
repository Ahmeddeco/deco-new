import { auth } from '@/auth'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { notFound } from 'next/navigation'

export default async function AdminPage() {
	const session = await auth()

	if (session?.user?.email !== (process.env.ADMIN_EMAIL as string)) {
		return notFound()
	}
	return (
		<Card>
			<CardContent>
				<CardHeader>
					<CardTitle className='capitalize'>add a new project</CardTitle>
				</CardHeader>
			</CardContent>
		</Card>
	)
}
