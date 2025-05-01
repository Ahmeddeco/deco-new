'use server'

import { prisma } from "@/lib/prisma"
import SubtitleSchema from "@/schema/SubtitleSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"


export const addSubtitleAction = async (prevState: unknown, formData: FormData) => {


  const Submission = parseWithZod(formData, {
    schema: SubtitleSchema
  })

  if (Submission.status !== 'success') {
    return Submission.reply()
  }

  try {

    await prisma.subtitle.create({
      data: {
        title: Submission.value.title,
        paragraph: Submission.value.paragraph,
        image: Submission.value.image,
        Article: {
          connect: {
            id: Submission.value.articleId
          }
        }
      }
    })
  } catch (error) {
    console.error(error)
  }


  redirect('/admin/article/subtitle')

}