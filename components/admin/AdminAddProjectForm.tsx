'use client'

import Form from 'next/form'
import { Card, CardContent } from '../ui/card'
import SubmitButton from '../shared/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'
import { Textarea } from '../ui/textarea'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { UploadDropzone } from '@/utils/uploadthing'
import { AddProjectAction } from '@/functions/addProjectAction'

type userPropsType = {
	fullName: string
	email?: string
	image?: string
}

export default function AddProject({
	email,
	fullName,
	image,
}: userPropsType) {
	const [images, setImages] = useState<string[]>([])

	const handleDelete = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
	}

	return (
		<Card>
			<CardContent>
				<Form
					action={AddProjectAction}
					className='flex flex-col justify-center items-center gap-8'
				>
					<h2 className='w-full h-12 '>Add Project</h2>
					<Separator />
					<div className=' grid lg:grid-cols-2 grid-cols-1 w-full gap-8'>
						{/* --------------------------------- titleEn --------------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>Title En</Label>
							<Input required minLength={3} maxLength={64} name='titleEn' />
						</div>
						{/* --------------------------------- titleAr --------------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>Title Ar</Label>
							<Input required minLength={3} maxLength={64} name='titleAr' />
						</div>

						{/* --------------------------------- cityEn --------------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>city En</Label>
							<Input required minLength={3} maxLength={64} name='cityEn' />
						</div>
						{/* --------------------------------- cityAr --------------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>city Ar</Label>
							<Input required minLength={3} maxLength={64} name='cityAr' />
						</div>

						{/* -------------------------------- CountryEn ------------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>Country En</Label>
							<Input required minLength={3} maxLength={64} name='countryEn' />
						</div>
						{/* -------------------------------- CountryAr ------------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>Country Ar</Label>
							<Input required minLength={3} maxLength={64} name='countryAr' />
						</div>

						{/* ------------------------------ DescriptionEn ----------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>Description En</Label>
							<Textarea
								required
								minLength={64}
								maxLength={500}
								name='descriptionEn'
							/>
						</div>
						{/* ------------------------------ DescriptionAr ----------------------------- */}
						<div className='flex flex-col gap-2'>
							<Label>Description Ar</Label>
							<Textarea
								required
								minLength={64}
								maxLength={500}
								name='descriptionAr'
							/>
						</div>
					</div>

					{/* --------------------------------- author --------------------------------- */}
					<Input name='authorFullName' type='hidden' value={fullName} />
					<Input name='authorImage' type='hidden' value={image} />
					<Input name='authorEmail' type='hidden' value={email} />

					{/* --------------------------------- Images --------------------------------- */}
					<Card className='w-full'>
						<CardContent className='flex flex-col gap-3 w-full'>
							<Label>Images</Label>
							<input type='hidden' name='images' value={images} />
							{images.length > 0 ? (
								<div className='grid lg:grid-cols-6 grid-cols-3 gap-6'>
									{images.map((image, index) => (
										<div key={index} className='relative w-full aspect-square'>
											<Image
												height={100}
												width={100}
												src={image}
												alt='Product Image'
												className='w-full h-full object-cover rounded-lg border border-foreground'
											/>

											<button
												onClick={() => handleDelete(index)}
												type='button'
												className='absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white'
											>
												<XIcon className='w-3 h-3' />
											</button>
										</div>
									))}
								</div>
							) : (
								<UploadDropzone
									className='ut-button:bg-foreground ut-button:text-background ut-upload-icon:text-foreground ut-label:text-muted-foreground ut-button:font-bold ut-allowed-content:text-muted-foreground ut-button:ut-readying:bg-foreground '
									endpoint='imageUploader'
									onClientUploadComplete={(res) => {
										setImages(res.map((r) => r.ufsUrl))
									}}
									onUploadError={() => {
										alert('Something went wrong')
									}}
								/>
							)}
						</CardContent>
					</Card>

					<SubmitButton title={'add project'} />
				</Form>
			</CardContent>
		</Card>
	)
}
