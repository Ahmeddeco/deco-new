import { getDictionary } from '@/locales/dictionaries'
import React from 'react'

export default async function HomeAbout({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return <section><h1>{dict.homePage.aboutUs.title}</h1></section>
}
