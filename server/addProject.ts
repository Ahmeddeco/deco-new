'use server'

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
  console.log('submission', submission)

  const valideProject = Object.entries(submission)
  console.log('valideProject', valideProject)

  redirect('/admin')
}