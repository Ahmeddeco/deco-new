import { getDictionary } from '@/locales/dictionaries'
import BigLogo from './BigLogo'
import SocialIcons from './SocialIcons'

export default async function Footer({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<footer className=' bg-card/95 border-t shadow-2xl flex flex-col gap-12 items-center justify-center lg:py-24 py-12 mt-16'>
			<div className='max-w-xl lg:max-w-4xl w-dvw flex flex-col lg:flex-row gap-8 items-center justify-center'>
				{/* ------------------------------- Logo & text ------------------------------ */}
				<BigLogo />
				<div className='flex gap-8 flex-col lg:items-start items-center w-full justify-center '>
					<p className='max-w-lg text-center lg:text-start'>{dict.footer.p}</p>
					<nav className='flex items-center justify-center gap-8 '>
						<SocialIcons />
					</nav>
					<p>©️ All copy rights reserved. </p>
				</div>
			</div>
		</footer>
	)
}
