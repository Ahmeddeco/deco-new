'use client'

import { addArticleAction } from '@/functions/addArticleAction'
import Form from 'next/form'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import SubmitButton from '../shared/SubmitButton'

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
	const [images, setImages] = useState<string[]>([])

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
		<Form action={addArticleAction} className='flex flex-col gap-8'>
			<h2>Add Article</h2>

			{/* Title */}
			<div className='flex flex-col gap-4'>
				<Label>Title (English)</Label>
				<Input type='text' name='titleEn' required />
				<Label>Title (Arabic)</Label>
				<Input type='text' name='titleAr' required />
			</div>

			{/* Main Paragraph */}
			<div className='flex flex-col gap-4'>
				<Label>Main Paragraph (English)</Label>
				<Textarea name='mainParagraphEn' required />
				<Label>Main Paragraph (Arabic)</Label>
				<Textarea name='mainParagraphAr' required />
			</div>

			{/* Points */}
			<div className='flex flex-col gap-4'>
				<h3>Points</h3>
				{points.map((point, index) => (
					<div key={index} className='border p-4 rounded-lg'>
						<Label>Point Title (English)</Label>
						<Input
							type='text'
							value={point.title.en}
							name={point.title.en}
							onChange={(e) =>
								handlePointChange(index, 'title', 'en', e.target.value)
							}
							required
						/>
						<Label>Point Title (Arabic)</Label>
						<Input
							type='text'
							value={point.title.ar}
							name={point.title.ar}
							onChange={(e) =>
								handlePointChange(index, 'title', 'ar', e.target.value)
							}
							required
						/>
						<Label>Point Paragraph (English)</Label>
						<Textarea
							value={point.paragraph.en}
							name={point.paragraph.en}
							onChange={(e) =>
								handlePointChange(index, 'paragraph', 'en', e.target.value)
							}
							required
						/>
						<Label>Point Paragraph (Arabic)</Label>
						<Textarea
							value={point.paragraph.ar}
							name={point.paragraph.ar}
							onChange={(e) =>
								handlePointChange(index, 'paragraph', 'ar', e.target.value)
							}
							required
						/>
						<div className='flex items-center justify-between'>
							<Button onClick={() => handleRemovePoint(index)}>
								Remove Point
							</Button>
							<Button onClick={handleAddPoint}>Add Point</Button>
						</div>
					</div>
				))}
			</div>

			{/* End Paragraph */}
			<div className='flex flex-col gap-4'>
				<Label>End Paragraph (English)</Label>
				<Textarea name='endParagraphEn' required />
				<Label>End Paragraph (Arabic)</Label>
				<Textarea name='endParagraphAr' required />
			</div>

			{/* Main Sources */}
			<div className='flex flex-col gap-4'>
				<h3>Main Sources</h3>
				{mainSources.map((source, index) => (
					<div key={index} className='border p-4 rounded-lg'>
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
						<Label>Source URL</Label>
						<Input
							type='url'
							value={source.url}
							name={source.url}
							onChange={(e) => handleSourceChange(index, 'url', e.target.value)}
							required
						/>
						<Button onClick={() => handleRemoveSource(index)}>
							Remove Source
						</Button>
					</div>
				))}
				<Button onClick={handleAddSource}>Add Source</Button>
			</div>

			{/* Images */}
			<div className='flex flex-col gap-4'>
				<Label>Images</Label>
				<Input type='file' name='images' multiple />
			</div>

			{/* Author Information */}
			<Input type='hidden' name='authorFullName' value={fullName} />
			<Input type='hidden' name='authorEmail' value={email} />
			<Input type='hidden' name='authorImage' value={image} />

			{/* Submit Button */}
			<SubmitButton title={'add article to DB'} />
		</Form>
	)
}
