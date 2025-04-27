'use client'

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
	return (
		<section>
			{/* ---------------------------------- title --------------------------------- */}
			<div className='w-full lg:w-1/3 bg-amber-500'>title</div>
			{/* ---------------------------------- Image --------------------------------- */}
			<div className='w-full lg:w-2/3 bg-amber-500'>Image</div>
		</section>
	)
}
