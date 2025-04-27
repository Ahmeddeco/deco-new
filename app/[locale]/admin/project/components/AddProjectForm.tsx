'use client'

import { AddProjectAction } from '@/server/addProject'
import Form from 'next/form'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import ProjectSchema from '@/schema/ProjectSchema'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useActionState, useEffect, useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import SubmitButton from '../../../../../components/shared/SubmitButton'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import StyleSchema from '@/prisma/generated/inputTypeSchemas/StyleSchema'
import { UploadDropzone } from '@/utils/uploadthing'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { XIcon } from 'lucide-react'

type AddProjectFormType = {
	userDb: {
		id: string
		firstName: string
	}[]
}

export default function AddProjectForm(userDb: AddProjectFormType) {
	const [lastResult, action] = useActionState(AddProjectAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ProjectSchema })
		},
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	const [images, setImages] = useState<string[]>([])

	const handleDelete = (index: number) => {
		setImages(images.filter((_, i) => i !== index))
	}

	return (
		<Form
			id={form.id}
			onSubmit={form.onSubmit}
			action={action}
			noValidate
			className='flex flex-col gap-4 max-w-4xl mx-auto py-12'
		>
			{/* --------------------------------- Client --------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Client Name</Label>
				<Select
					key={fields.clientId.key}
					name={fields.clientId.name}
					defaultValue={fields.clientId.initialValue}
				>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Client' />
					</SelectTrigger>
					<SelectContent>
						{userDb.userDb.map(({ firstName, id }) => (
							<SelectItem value={id} key={id}>
								{firstName}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<div className='text-destructive'>{fields.clientId.errors}</div>
			</div>

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

			{/* ------------------------------- Description ------------------------------ */}
			<div className='flex flex-col gap-2'>
				<Label>Description</Label>
				<Textarea
					key={fields.description.key}
					name={fields.description.name}
					defaultValue={fields.description.initialValue}
				/>
				<div className='text-destructive'>{fields.description.errors}</div>
			</div>

			{/* --------------------------------- Country -------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Country</Label>
				<Input
					type='text'
					key={fields.country.key}
					name={fields.country.name}
					defaultValue={fields.country.initialValue}
				/>
				<div className='text-destructive'>{fields.country.errors}</div>
			</div>

			{/* ---------------------------------- City ---------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>City</Label>
				<Input
					type='text'
					key={fields.city.key}
					name={fields.city.name}
					defaultValue={fields.city.initialValue}
				/>
				<div className='text-destructive'>{fields.city.errors}</div>
			</div>

			{/* ---------------------------------- Style --------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Style</Label>
				<Select
					key={fields.style.key}
					name={fields.style.name}
					defaultValue={fields.style.initialValue}
				>
					<SelectTrigger className='w-full'>
						<SelectValue placeholder='Style' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value={StyleSchema.Enum.contemporary}>
							{StyleSchema.Enum.contemporary}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.glam}>
							{StyleSchema.Enum.glam}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.industrial}>
							{StyleSchema.Enum.industrial}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.japandy}>
							{StyleSchema.Enum.japandy}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.minimalist}>
							{StyleSchema.Enum.minimalist}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.rustic}>
							{StyleSchema.Enum.rustic}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.scandinavian}>
							{StyleSchema.Enum.scandinavian}
						</SelectItem>
						<SelectItem value={StyleSchema.Enum.traditional}>
							{StyleSchema.Enum.traditional}
						</SelectItem>
					</SelectContent>
				</Select>
				<div className='text-destructive'>{fields.style.errors}</div>
			</div>

			{/* ---------------------------------- Image --------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Image</Label>
				<Input
					type='hidden'
					value={images}
					key={fields.image.key}
					name={fields.image.name}
					defaultValue={fields.image.initialValue as any}
				/>
				{images.length > 0 ? (
					<div className='flex gap-5'>
						{images.map((image, index) => (
							<div className='relative size-32' key={index}>
								<Image
									src={image}
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
									onClick={() => handleDelete(index)}
								>
									<XIcon />
								</Button>
							</div>
						))}
					</div>
				) : (
					<UploadDropzone
						endpoint='imageUploader'
						onClientUploadComplete={(res) => {
							setImages(res.map((r) => r.ufsUrl))
						}}
						onUploadError={(error: Error) => alert(`ERROR! ${error.message}`)}
					/>
				)}
				<div className='text-destructive'>{fields.image.errors}</div>
			</div>

			{/* ------------------------------ SubmitButton ------------------------------ */}
			<SubmitButton title={'add new project'} />
		</Form>
	)
}
