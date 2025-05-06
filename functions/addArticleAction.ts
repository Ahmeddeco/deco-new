'use server'

import connectDB from "@/lib/db"
import Article from "@/models/articleModel"
import Author from "@/models/authorModel"
import { redirect } from "next/navigation"

export const addArticleAction = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData)

  try {
    await connectDB()

    let author = await Author.findOne({ email: rawData.authorEmail })
    if (!author) {
      author = await Author.create({
        authorName: rawData.authorFullName,
        email: rawData.authorEmail,
        image: rawData.authorImage,
      })
    }

    await Article.create({
      title: { ar: rawData.titleAr, en: rawData.titleEn },
      mainParagraph: { ar: rawData.mainParagraphAr, en: rawData.mainParagraphEn },
      points: JSON.parse(rawData.articlePoints as string),
      endParagraph: { ar: rawData.endParagraphAr, en: rawData.endParagraphEn },
      mainSources: JSON.parse(rawData.sourcesPoints as string),
      image: rawData.image,
      author: author._id, // Link the author by ObjectId

    })

  } catch (error) {
    console.error('Error creating article:', error)
  }

  redirect('/admin/articles/add')
}