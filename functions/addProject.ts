'use server'

import { prisma } from '@/lib/prisma'
import ProjectSchema from '@/schema/ProjectSchema'
import { parseWithZod } from '@conform-to/zod'
import { redirect } from 'next/navigation'



export const AddProjectAction = async (prevState: unknown, formData: FormData) => {


  const submission = parseWithZod(formData, {
    schema: ProjectSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  try {
    await prisma.project.create({
      data: {
        title: submission.value.title,
        city: submission.value.city,
        country: submission.value.country,
        description: submission.value.description,
        image: submission.value.image,
        style: submission.value.style,
        client: {
          connect: {
            id: submission.value.clientId
          }
        }
      }
    })

  } catch (error) {
    console.error(error)
  }

  redirect('/admin')
}