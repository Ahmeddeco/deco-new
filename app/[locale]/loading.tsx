import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
	// Or a custom loading skeleton component
	return (
		<div className='flex flex-col h-dvh items-center justify-center gap-4'>
			<Skeleton className='h-96 aspect-video rounded-2xl' />
		</div>
	)
}
