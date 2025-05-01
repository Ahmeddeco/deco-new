'use server'

import { prisma } from "@/lib/prisma"
import AdminSchema from "@/schema/AdminSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"

export const AddAdminAction = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: AdminSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  try {
    await prisma.admin.create({
      data: {
        firstName: submission.value.firstName,
        lastName: submission.value.lastName,
        description: submission.value.description,
        phone: submission.value.phone,
        email: submission.value.email,
        role: submission.value.role
      }
    })

  } catch (error) {
    console.error(error)

  }

  redirect('/admin')

}