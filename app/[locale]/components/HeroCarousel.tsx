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
import { HeroCarouselImages } from '@/constants/home'

export default function HeroCarousel() {
	return (
		<Carousel
			className='lg:max-w-6xl w-full'
			plugins={[
				Autoplay({
					delay: 7000,
				}),
			]}
		>
			<CarouselContent>
				{HeroCarouselImages.map(({ href, id }) => (
					<CarouselItem key={id}>
						<Card className='w-full p-0'>
							<CardContent className='relative lg:aspect-video aspect-square'>
								<Image
									src={href}
									alt={'hero'}
									fill
									className='rounded-2xl object-cover'
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
