import AdminAside from './components/AdminAside'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex gap-8 pt-16'>
			<AdminAside />
			<div className='w-full lg:w-10/12'>{children}</div>
		</div>
	)
}
