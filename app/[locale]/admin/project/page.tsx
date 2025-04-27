import { auth } from '@/auth'
import { notFound } from 'next/navigation'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

import AddProjectForm from './components/AddProjectForm'
import { prisma } from '@/lib/prisma'

export default async function ProjectPage() {
	const session = await auth()

	if (session?.user?.email !== (process.env.ADMIN_EMAIL as string)) {
		return notFound()
	}

	const userDb = await prisma.client.findMany({
		select: {
			firstName: true,
			id: true,
		},
	})

	return (
		<Card>
			<CardHeader>
				<CardTitle className='capitalize'>add a new project</CardTitle>
				<CardDescription>Add a new project for your database</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent>
				<AddProjectForm userDb={userDb} />
			</CardContent>
		</Card>
	)
}
