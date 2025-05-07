import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'

type MainCardType = {
	image: string
	_id: string
	title: { en: string; ar: string }
	distention: string
	city?: { en: string; ar: string }
	country?: { en: string; ar: string }
	params: Promise<{ locale: 'en' | 'ar' }>
}

export default async function MainCard({
	image,
	_id,
	params,
	title,
	distention,
	city,
	country,
}: MainCardType) {
	const { locale } = await params

	return (
		<Card className='hover:scale-105 duration-500 ease-in-out'>
			<CardContent className=' w-full flex flex-col gap-4'>
				{/* ---------------------------------- Image --------------------------------- */}
				<Link href={`/${distention}/${_id}`}>
					<div className='w-full aspect-square relative mb-4'>
						<Image
							src={image}
							alt={title[locale]}
							fill
							className='rounded-2xl object-cover'
						/>
					</div>

					{/* ---------------------------------- title --------------------------------- */}
					<h6 className='line-clamp-2'>{title[locale]}</h6>
					{country || city ? (
						<p className='text-chart-3'>
							{city && city[locale]} - {country && country[locale]}
						</p>
					) : (
						''
					)}
				</Link>
				<Separator />
				<div className='flex items-center justify-between'>
					<Link href={`/admin/${distention}/edit/${_id}`}>
						<Button
							size={'icon'}
							variant={'link'}
							className='text-muted-foreground'
						>
							edit
						</Button>
					</Link>
					<Link href={`/admin/${distention}/delete/${_id}`}>
						<Button size={'icon'} variant={'link'} className='text-destructive'>
							delete
						</Button>
					</Link>
				</div>
			</CardContent>
		</Card>
	)
}
