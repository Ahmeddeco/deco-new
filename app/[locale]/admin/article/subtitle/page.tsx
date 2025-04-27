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

import { prisma } from '@/lib/prisma'
import AddSubtitleForm from '../components/AddSubtitleForm'


export default async function SubtitlePage() {
	const session = await auth()

	if (session?.user?.email !== (process.env.ADMIN_EMAIL as string)) {
		return notFound()
	}

	const articleDb = await prisma.article.findMany({
		select: {
			id: true,
			title: true,
		},
		orderBy: { createdAt: 'desc' },
	})

	return (
		<Card>
			<CardHeader>
				<CardTitle className='capitalize'>add a new project</CardTitle>
				<CardDescription>Add a new project for your database</CardDescription>
			</CardHeader>
			<Separator />
			<CardContent>
				<AddSubtitleForm articleDb={articleDb} />
			</CardContent>
		</Card>
	)
}
