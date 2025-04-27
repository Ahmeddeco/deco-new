import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className='flex flex-col h-dvh items-center justify-center gap-4'>
			<Skeleton className='h-96 aspect-square rounded-xl' />
			<div className='space-y-2'>
				<Skeleton className='h-12 w-full' />
				<Skeleton className='h-12 w-full' />
				<Skeleton className='h-12 w-full' />
			</div>
		</div>
	)
}
