'use client'

import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

type HeroCarouselType = {
	images: {
		id: number
		href: string
	}[]
	delay?: number
}

export default function MainCarousel({
	images,
	delay = 5000,
}: HeroCarouselType) {
	return (
		<Carousel
			className='lg:max-w-7xl w-full relative pb-12'
			plugins={[
				Autoplay({
					delay: delay,
				}),
			]}
		>
			<CarouselContent>
				{images.map(({ href, id }) => (
					<CarouselItem key={id}>
						<Card className='w-full p-0'>
							<CardContent className='relative lg:aspect-video aspect-square'>
								<Image
									src={href}
									alt={'hero'}
									fill
									className='rounded-2xl object-cover'
									priority
								/>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
