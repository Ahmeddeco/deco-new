import AdminAside from './components/AdminAside'
import AdminMobileNav from './components/AdminMobileNav'

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex gap-8 pt-16'>
			<AdminAside />
			{/* ------------------------------- Mobile Nav ------------------------------- */}
			<nav className=' lg:hidden block z-50 fixed bottom-24 right-24'>
				<AdminMobileNav />
			</nav>
			<div className='w-full lg:w-10/12'>{children}</div>
		</div>
	)
}
