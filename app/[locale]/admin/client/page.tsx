import { auth } from '@/auth'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { notFound } from 'next/navigation'
import AddClient from './components/AddClientForm'

export default async function ClientPage() {
	const session = await auth()

	if (session?.user?.email !== (process.env.ADMIN_EMAIL as string)) {
		return notFound()
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle className='capitalize'>add a new client</CardTitle>
				<CardDescription>Add a new client for your database</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent>
				<AddClient />
			</CardContent>
		</Card>
	)
}
