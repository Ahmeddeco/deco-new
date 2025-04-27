'use server'

import { prisma } from '@/lib/prisma'
import ClientSchema from '@/schema/ClientSchema'
import { parseWithZod } from '@conform-to/zod'
import { redirect } from 'next/navigation'

export const AddClientAction = async (prevState: unknown, formData: FormData) => {

  const submission = parseWithZod(formData, {
    schema: ClientSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }
  console.log('submission', submission)

  try {
    await prisma.client.create({
      data: {
        firstName: submission.value.firstName,
        lastName: submission.value.lastName,
        description: submission.value.description,
        email: submission.value.email,
        phone: submission.value.phone
      }
    })
  } catch (error) {
    console.error(error)
  }

  redirect('/admin')
}