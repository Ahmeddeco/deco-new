'use server'
import connectDB from '@/lib/db'
import Project from '@/models/project'
import Author from '@/models/author'
import { redirect } from 'next/navigation'

export const addProjectToDb = async (formData: FormData) => {
  const rawData = Object.fromEntries(formData)
  console.log('rawData:', rawData)

  // Ensure all required fields are present
  const splitedImages = typeof rawData.images === 'string' ? rawData.images.split(',').map((img) => img.trim()) : []

  try {
    await connectDB()

    // Find or create the author
    let author = await Author.findOne({ email: rawData.authorEmail })
    if (!author) {
      author = await Author.create({
        authorName: rawData.authorFullName,
        email: rawData.authorEmail,
        image: rawData.authorImage,
      })
    }

    // Create the project with the required fields
    await Project.create({
      title: { ar: rawData.titleAr, en: rawData.titleEn },
      city: { ar: rawData.cityAr, en: rawData.cityEn },
      country: { ar: rawData.countryAr, en: rawData.countryEn },
      description: { ar: rawData.descriptionAr, en: rawData.descriptionEn },
      images: splitedImages,
      author: author._id, // Link the author by ObjectId
    })

    console.log('Project created successfully')
  } catch (error) {
    console.error('Error creating project:', error)
  }

  redirect('/admin/projects')
}