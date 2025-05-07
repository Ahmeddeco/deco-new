'use client'

import { addArticleAction } from '@/functions/addArticleAction'
import Form from 'next/form'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import SubmitButton from '../shared/SubmitButton'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { UploadDropzone } from '@/utils/uploadthing'
import { XIcon } from 'lucide-react'
import { Separator } from '../ui/separator'

export default function AddArticleForm({
	fullName,
	email,
	image,
}: {
	fullName: string
	email: string
	image: string
}) {
	const [points, setPoints] = useState([
		{ title: { ar: '', en: '' }, paragraph: { ar: '', en: '' } },
	])
	const [mainSources, setMainSources] = useState([{ name: '', url: '' }])

	const [mianImage, setMainImage] = useState<string>('')
	const handleImageDelete = () => {
		setMainImage('')
	}

	const handleAddPoint = () => {
		setPoints([
			...points,
			{ title: { ar: '', en: '' }, paragraph: { ar: '', en: '' } },
		])
	}

	const handleRemovePoint = (index: number) => {
		setPoints(points.filter((_, i) => i !== index))
	}

	const handlePointChange = (
		index: number,
		field: 'title' | 'paragraph',
		lang: 'ar' | 'en',
		value: string
	) => {
		const updatedPoints = [...points]
		updatedPoints[index][field][lang] = value
		setPoints(updatedPoints)
	}

	const handleAddSource = () => {
		setMainSources([...mainSources, { name: '', url: '' }])
	}

	const handleRemoveSource = (index: number) => {
		setMainSources(mainSources.filter((_, i) => i !== index))
	}

	const handleSourceChange = (
		index: number,
		field: 'name' | 'url',
		value: string
	) => {
		const updatedSources = [...mainSources]
		updatedSources[index][field] = value
		setMainSources(updatedSources)
	}

	return (
		<Card>
			<CardContent>
				<Form action={addArticleAction} className='flex flex-col gap-8'>
					<h2 className='w-full py-8 '>Add Article</h2>
					<Separator />

					{/* ---------------------------------- Title --------------------------------- */}
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<Label>Title (English)</Label>
							<Input
								type='text'
								name='titleEn'
								required
								minLength={3}
								maxLength={256}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label>Title (Arabic)</Label>
							<Input
								type='text'
								name='titleAr'
								required
								minLength={3}
								maxLength={256}
							/>
						</div>
					</div>

					{/* Main Paragraph */}
					<div className='flex flex-col gap-4'>
						<div className='flex flex-col gap-2'>
							<Label>Main Paragraph (English)</Label>
							<Textarea
								name='mainParagraphEn'
								required
								minLength={30}
								maxLength={1024}
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label>Main Paragraph (Arabic)</Label>
							<Textarea
								name='mainParagraphAr'
								required
								minLength={30}
								maxLength={1024}
							/>
						</div>
					</div>

					{/* --------------------------------- Points --------------------------------- */}
					<h3>Points</h3>
					{points.map((point, index) => (
						<div className='flex flex-col gap-4' key={index}>
							<div className='flex flex-col gap-2'>
								<Label>Point Title (English)</Label>
								<Input
									type='text'
									name={`pointTitleEn${point.title.en[index]}`}
									onChange={(e) =>
										handlePointChange(index, 'title', 'en', e.target.value)
									}
									required
									minLength={3}
									maxLength={256}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<Label>Point Title (Arabic)</Label>
								<Input
									type='text'
									name={`pointTitleAr${point.title.ar[index]}`}
									onChange={(e) =>
										handlePointChange(index, 'title', 'ar', e.target.value)
									}
									required
									minLength={3}
									maxLength={256}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<Label>Point Paragraph (English)</Label>
								<Textarea
									name={`pointParagraphEn${point.paragraph.en[index]}`}
									onChange={(e) =>
										handlePointChange(index, 'paragraph', 'en', e.target.value)
									}
									required
									minLength={30}
									maxLength={1024}
								/>
							</div>
							<div className='flex flex-col gap-2'>
								<Label>Point Paragraph (Arabic)</Label>
								<Textarea
									name={`pointParagraphAr${point.paragraph.ar[index]}`}
									onChange={(e) =>
										handlePointChange(index, 'paragraph', 'ar', e.target.value)
									}
									required
									minLength={30}
									maxLength={1024}
								/>
							</div>

							<Input
								type='hidden'
								name='articlePoints'
								value={JSON.stringify(points)}
							/>
							<div className='flex items-center justify-between px-12 py-8'>
								<Button onClick={handleAddPoint}>Add Point</Button>
								<Button
									variant={'destructive'}
									onClick={() => handleRemovePoint(index)}
								>
									Remove Point
								</Button>
							</div>
						</div>
					))}

					{/* ------------------------------ End Paragraph ----------------------------- */}
					<div className='flex flex-col gap-4'>
						<Label>End Paragraph (English)</Label>
						<Textarea
							name='endParagraphEn'
							required
							minLength={30}
							maxLength={1024}
						/>
						<Label>End Paragraph (Arabic)</Label>
						<Textarea
							name='endParagraphAr'
							required
							minLength={30}
							maxLength={1024}
						/>
					</div>

					{/* ------------------------------ Main Sources ------------------------------ */}
					<div className='flex flex-col gap-4'>
						<h3>Main Sources</h3>
						{mainSources.map((source, index) => (
							<div key={index} className='flex flex-col gap-4'>
								<div className='flex flex-col gap-2'>
									<Label>Source Name</Label>
									<Input
										type='text'
										value={source.name}
										name={source.name}
										onChange={(e) =>
											handleSourceChange(index, 'name', e.target.value)
										}
										required
									/>
								</div>
								<div className='flex flex-col gap-2'>
									<Label>Source URL</Label>
									<Input
										type='url'
										value={source.url}
										name={source.url}
										onChange={(e) =>
											handleSourceChange(index, 'url', e.target.value)
										}
										required
									/>
								</div>
								<Input
									type='hidden'
									name='sourcesPoints'
									value={JSON.stringify(mainSources)}
								/>
								<div className='flex items-center justify-between px-12 py-8'>
									<Button onClick={handleAddSource}>Add Source</Button>
									<Button
										variant={'destructive'}
										onClick={() => handleRemoveSource(index)}
									>
										Remove Source
									</Button>
								</div>
							</div>
						))}
					</div>

					{/* --------------------------------- Image --------------------------------- */}
					<Card className='w-full'>
						<CardContent className='flex flex-col gap-3 w-full'>
							<Label>Images</Label>
							<input type='hidden' name='image' value={mianImage} />
							{mianImage.length > 0 ? (
								<div className='grid lg:grid-cols-6 grid-cols-3 gap-6'>
									<div className='relative w-full aspect-square'>
										<Image
											height={100}
											width={100}
											src={mianImage}
											alt='Product Image'
											className='w-full h-full object-cover rounded-lg border border-foreground'
										/>

										<button
											onClick={() => handleImageDelete()}
											type='button'
											className='absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white'
										>
											<XIcon className='w-3 h-3' />
										</button>
									</div>
								</div>
							) : (
								<UploadDropzone
									className='ut-button:bg-foreground ut-button:text-background ut-upload-icon:text-foreground ut-label:text-muted-foreground ut-button:font-bold ut-allowed-content:text-muted-foreground ut-button:ut-readying:bg-foreground '
									endpoint='oneImageUploader'
									onClientUploadComplete={(res) => {
										setMainImage(res[0]?.ufsUrl || '')
									}}
									onUploadError={() => {
										alert('Something went wrong')
									}}
								/>
							)}
						</CardContent>
					</Card>

					{/* --------------------------- Author Information --------------------------- */}
					<Input type='hidden' name='authorFullName' value={fullName} />
					<Input type='hidden' name='authorEmail' value={email} />
					<Input type='hidden' name='authorImage' value={image} />

					{/* ------------------------------ Submit Button ----------------------------- */}
					<SubmitButton title={'add article to DB'} />
				</Form>
			</CardContent>
		</Card>
	)
}
