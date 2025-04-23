import { Card, CardContent } from '@/components/ui/card'
import { NotoKofi } from '@/styles/fonts'
import Image from 'next/image'
import Dots from '../../../components/shared/Dots'
import { StarIcon } from 'lucide-react'
import { getDictionary } from '@/locales/dictionaries'
import StartProjectBtn from '@/components/shared/StartProjectBtn'

export default async function Hero({
	params,
}: {
	params: Promise<{ locale: 'en' | 'ar' }>
}) {
	const { locale } = await params
	const dict = await getDictionary(locale)

	return (
		<section className='flex flex-col items-center gap-24 lg:gap-12 min-h-[800px] h-auto relative pb-48 lg:pb-24'>
			{/* ---------------------------------- Text ---------------------------------- */}
			<div className='flex flex-col gap-8 lg:gap-12 items-center'>
				<h1 className={`${NotoKofi.className} text-center capitalize `}>
					{dict.homePage.homeHero.h1} <br /> {dict.homePage.homeHero.h1Br}
				</h1>
				<p className='text-center'>
					{dict.homePage.homeHero.p}
					<br />
					{dict.homePage.homeHero.pBr}
				</p>
				<StartProjectBtn params={params} />
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<Card className='aspect-square w-full lg:w-9/12 lg:aspect-video p-0 '>
				<CardContent className='relative w-full h-full '>
					<Image
						src={dict.homePage.homeHero.image}
						alt={'hero'}
						fill
						className='object-cover rounded-2xl shadow-2xl'
						priority
					/>
					{/* ------------------------------ Image Circles ----------------------------- */}
					<div className='size-8 lg:size-12 bg-chart-1 rounded-full absolute right-4 lg:-right-24 -top-6 -z-50' />
					<div className='size-8 lg:size-12 bg-chart-2 rounded-full absolute -left-6 lg:-left-24 -bottom-8 lg:bottom-72 -z-50' />
					{/* -------------------------------- Top Dots -------------------------------- */}
					<Dots
						color={'bg-chart-5'}
						rowNumber={4}
						className={' lg:block hidden -top-8 right-3/4 rotate-6 '}
					/>
					{/* ------------------------------- Bottom Dots ------------------------------ */}
					<Dots
						color={'bg-chart-2'}
						rowNumber={4}
						className={' lg:block hidden -bottom-10 right-1/4 -rotate-6'}
					/>
					{/* ------------------------------ Top Left Card ----------------------------- */}
					<Card className='z-40 absolute -top-12 lg:top-12 lg:-left-12'>
						<CardContent className='flex flex-col items-center justify-center'>
							<div className='flex items-center gap-2'>
								<StarIcon fill='gold' stroke='gold' />
								<p className='uppercase'>
									{dict.homePage.homeHero.topLeftCard.title}
								</p>
							</div>
							<div className='flex items-center gap-2'>
								<h4 className={`${NotoKofi.className}`}>
									{dict.homePage.homeHero.topLeftCard.number}+
								</h4>
								<h6>{dict.homePage.homeHero.topLeftCard.done}</h6>
							</div>
						</CardContent>
					</Card>

					{/* ---------------------------- Bottom Right Card --------------------------- */}
					<Card className='z-40 absolute -bottom-48 lg:bottom-12 right-2 lg:-right-12 w-72'>
						<CardContent className='flex flex-col gap-4 justify-center'>
							<div className='flex items-center gap-2'>
								{/* Image */}
								<div className='relative size-12'>
									<Image
										src={dict.homePage.homeHero.bottomRightCard.image}
										alt={'avatar'}
										fill
										className='rounded-full object-cover'
									/>
								</div>
								{/* Name */}
								<div className='flex flex-col'>
									<h6 className={`capitalize ${NotoKofi.className}`}>
										{dict.homePage.homeHero.bottomRightCard.clientName}
									</h6>
									<p className={`capitalize text-muted-foreground`}>
										{dict.homePage.homeHero.bottomRightCard.job}
									</p>
								</div>
							</div>
							{/* Text */}
							<p className=''>{dict.homePage.homeHero.bottomRightCard.p}</p>
						</CardContent>
					</Card>
				</CardContent>
			</Card>
			{/* ---------------------------- Circle Top Right ---------------------------- */}
			<div className='size-8 lg:size-12 bg-chart-5 rounded-full absolute lg:right-0 right-1 lg:top-12 top-12 -z-50' />
			{/* ----------------------------- Circle Top Left ---------------------------- */}
			<div className='size-8 lg:size-12 bg-chart-3 rounded-full absolute lg:left-0 left-6 lg:top-72 top-72 -z-50' />
		</section>
	)
}
