import StartProjectBtn from '@/components/shared/StartProjectBtn'
import { Card, CardContent } from '@/components/ui/card'
import { getDictionary } from '@/locales/dictionaries'
import aboutImage from '@/public/images/home/about.webp'
import Image from 'next/image'

export default async function AboutUs({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section className=''>
			{/* ---------------------------------- Text ---------------------------------- */}
			<div className='w-full lg:w-1/2 flex flex-col gap-8'>
				<h2>{dict.homePage.aboutUs.title}</h2>
				<div className='flex flex-col gap-4 '>
					<p>{dict.homePage.aboutUs.p1}</p>
					<p>{dict.homePage.aboutUs.p2}</p>
				</div>

				{/* --------------------------------- Status --------------------------------- */}
				<div className='flex items-center gap-4 '>
					{dict.homePage.aboutUs.status.map(({ title, value }) => (
						<div className='flex flex-col  gap-0 even:border-x-4 even:border-chart-3 px-8 first:px-0' key={title}>
							<h4>{value}</h4>
							<p className='text-chart-3 capitalize'>{title}</p>
						</div>
					))}
				</div>
				<StartProjectBtn params={params} />
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<Card className='relative w-full lg:w-1/2 aspect-square '>
				<CardContent className='w-full p-0'>
					<Image
						src={aboutImage}
						alt={'about us'}
						fill
						className='rounded-2xl object-cover '
					/>
				</CardContent>
			</Card>
		</section>
	)
}
