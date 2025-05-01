'use server'

import { prisma } from "@/lib/prisma"
import ArticleSchema from "@/schema/ArticleSchema"
import { parseWithZod } from "@conform-to/zod"
import { redirect } from "next/navigation"



/* ---------------------------- addArticleAction ---------------------------- */

export const addArticleAction = async (prevState: unknown, formData: FormData) => {
const image=formData.get('image')

  const submission = parseWithZod(formData, {
    schema: ArticleSchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }


  try {
    await prisma.article.create({
      data: {
        title: submission.value.title,
        mainParagraph: submission.value.mainParagraph,
        image: submission.value.image
      }
    })
  } catch (error) {
    console.error(error)
  }

  redirect('/admin/article/subtitle')
}
