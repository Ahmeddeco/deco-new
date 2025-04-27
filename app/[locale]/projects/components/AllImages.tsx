'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

type AllImagesProps = {
	id: string
	projectDict: {
		id: number
		title: string
		location: string
		paragraph: string
		pic: string
	}
}

export default function AllImages({ id, projectDict }: AllImagesProps) {
	const [image, setImage] = useState('')

	return (
		<div className='flex lg:flex-row flex-col gap-8 max-h-[860px] h-screen py-8 lg:items-center lg:justify-center'>
			{/* ---------------------------------- title --------------------------------- */}
			<Card className='w-full lg:w-1/3 h-full'>
				<CardContent className='flex flex-col gap-4'>
					<h2>{projectDict.title}</h2>
					<p>{projectDict.paragraph}</p>

					{/* ------------------------------- ImageThumbs ------------------------------ */}
				</CardContent>
				<Card className='mx-8'>
					<CardContent className='grid items-center justify-center gap-4 grid-cols-4 relative '>
						<div
							className={`${
								image && 'border border-chart-3'
							} w-full aspect-square relative cursor-pointer `}
						>
							<Image
								src={'/images/home/about.webp'}
								alt={'dsf'}
								fill
								className='rounded-xl object-cover'
							/>
						</div>
					</CardContent>
				</Card>
			</Card>
			{/* ---------------------------------- Image --------------------------------- */}
			<Card className='w-full lg:w-2/3 h-full p-0 '>
			<CardContent className='relative w-full h-full'>
			<Image
								src={'/images/home/about.webp'}
								alt={'dsf'}
								fill
								className='rounded-xl object-cover'
							/>
			</CardContent>
			</Card>
		</div>
	)
}
