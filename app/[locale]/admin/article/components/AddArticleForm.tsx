'use client'

import SubmitButton from '@/components/shared/SubmitButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ArticleSchema from '@/schema/ArticleSchema'
import { addArticleAction } from '@/server/addArticle'
import { UploadDropzone } from '@/utils/uploadthing'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { XIcon } from 'lucide-react'
import Form from 'next/form'
import Image from 'next/image'
import { useActionState, useState } from 'react'

export default function AddArticleForm() {
	const [lastResult, action] = useActionState(addArticleAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ArticleSchema })
		},
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	const [mainImage, setMainImage] = useState('')

	const handleDelete = () => {
		setMainImage('')
	}

	return (
		<Form
			id={form.id}
			onSubmit={form.onSubmit}
			action={action}
			noValidate
			className='flex flex-col gap-4 max-w-4xl mx-auto py-12'
		>
			{/* ---------------------------------- Title --------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Title</Label>
				<Input
					type='text'
					key={fields.title.key}
					name={fields.title.name}
					defaultValue={fields.title.initialValue}
				/>
				<div className='text-destructive'>{fields.title.errors}</div>
			</div>

			{/* ----------------------------- Main Paragraph ----------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Main Paragraph</Label>
				<Textarea
					key={fields.mainParagraph.key}
					name={fields.mainParagraph.name}
					defaultValue={fields.mainParagraph.initialValue}
				/>
				<div className='text-destructive'>{fields.mainParagraph.errors}</div>
			</div>

			{/* ---------------------------------- Images --------------------------------- */}
			<Label>Images</Label>
			<Card className=''>
				<CardContent className='flex flex-col gap-2 '>
					<Input
						type='hidden'
						value={mainImage}
						key={fields.image.key}
						name={fields.image.name}
						defaultValue={fields.image.initialValue as any}
					/>
					{mainImage.length > 0 ? (
						<div className='flex gap-5'>
							<div className='relative size-32'>
								<Image
									src={mainImage}
									alt={'product image'}
									height={96}
									width={96}
									className='w-full h-full rounded-lg border object-cover'
								/>
								<Button
									type='button'
									size={'icon'}
									className='absolute -top-3 -right-3 size-8'
									variant={'destructive'}
									onClick={() => handleDelete()}
								>
									<XIcon />
								</Button>
							</div>
						</div>
					) : (
						<UploadDropzone
							endpoint='imageUploader'
							onClientUploadComplete={(res) => {
								setMainImage((res[0] as { ufsUrl: string }).ufsUrl)
							}}
							onUploadError={(error: Error) => alert(`ERROR! ${error.message}`)}
							className='ut-button:bg-primary ut-button:text-background ut-button:font-semibold ut-upload-icon:text-primary'
						/>
					)}
					<div className='text-destructive'>{fields.image.errors}</div>
				</CardContent>
			</Card>

			{/* ------------------------------ SubmitButton ------------------------------ */}
			<SubmitButton title={'add article'} />
		</Form>
	)
}
