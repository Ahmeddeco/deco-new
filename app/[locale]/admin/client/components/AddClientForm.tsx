'use client'

import SubmitButton from '@/components/shared/SubmitButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ClientSchema from '@/schema/ClientSchema'
import { AddClientAction } from '@/server/addClient'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import Form from 'next/form'
import { useActionState } from 'react'

export default function AddClientForm() {
	const [lastResult, action] = useActionState(AddClientAction, undefined)
	const [form, fields] = useForm({
		lastResult,
		onValidate({ formData }) {
			return parseWithZod(formData, { schema: ClientSchema })
		},
		shouldValidate: 'onBlur',
		shouldRevalidate: 'onInput',
	})

	return (
		<Form
			action={action}
			id={form.id}
			onSubmit={form.onSubmit}
			noValidate
			className='flex flex-col gap-4 max-w-4xl mx-auto py-12'
		>
			{/* ------------------------------- First Name ------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>First Name</Label>
				<Input
					type='text'
					key={fields.firstName.key}
					name={fields.firstName.name}
					defaultValue={fields.firstName.initialValue}
				/>
				<div className='text-destructive'>{fields.firstName.errors}</div>
			</div>

			{/* -------------------------------- Last Name ------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Last Name</Label>
				<Input
					type='text'
					key={fields.lastName.key}
					name={fields.lastName.name}
					defaultValue={fields.lastName.initialValue}
				/>
				<div className='text-destructive'>{fields.lastName.errors}</div>
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

			{/* ---------------------------------- Email --------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Email</Label>
				<Input
					type='email'
					key={fields.email.key}
					name={fields.email.name}
					defaultValue={fields.email.initialValue}
				/>
				<div className='text-destructive'>{fields.email.errors}</div>
			</div>

			{/* ---------------------------------- Phone --------------------------------- */}
			<div className='flex flex-col gap-2'>
				<Label>Phone</Label>
				<Input
					type='number'
					key={fields.phone.key}
					name={fields.phone.name}
					defaultValue={fields.phone.initialValue}
				/>
				<div className='text-destructive'>{fields.phone.errors}</div>
			</div>

			{/* ------------------------------ SubmitButton ------------------------------ */}
			<SubmitButton title={'add client'} />
		</Form>
	)
}
