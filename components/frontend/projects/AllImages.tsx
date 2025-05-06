'use client'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

type AllImagesProps = {
	id?: string
	images: string[]
}

export default function AllImages({ images }: AllImagesProps) {
	const [image, setImage] = useState(images[0])

	return (
		<div className='flex lg:flex-row flex-col-reverse lg:gap-8 gap-4 lg:h-fit max-h-[660px] my-8 lg:items-center lg:justify-center w-full'>
			{/* ------------------------------- ImageThumbs ------------------------------ */}
			<Card className='lg:w-2/12 w-full h-full '>
				<CardContent className='grid items-center justify-center gap-4 lg:grid-cols-2 grid-cols-3 overflow-x-scroll lg:overflow-scroll h-96 lg:h-[700px]'>
					{images.map((img, i) => (
						<div
							className={`${
								image === img && 'border-4 border-foreground'
							} size-24 relative cursor-pointer rounded-md `}
							key={i}
							onClick={() => setImage(img)}
						>
							<Image
								src={img}
								alt={'project'}
								fill
								className='rounded-md object-cover'
							/>
						</div>
					))}
				</CardContent>
			</Card>

			{/* ---------------------------------- Image --------------------------------- */}
			<Card className='w-full lg:w-10/12 h-full p-0'>
				<CardContent className='relative lg:aspect-video aspect-square '>
					<Image
						src={image}
						alt={'project'}
						fill
						className='rounded-xl object-cover'
					/>
				</CardContent>
			</Card>
		</div>
	)
}
