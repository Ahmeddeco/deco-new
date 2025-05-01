import ThemeButton from '../theme/ThemeButton'
import AuthButton from './AuthButton'
import LanguageButton from './LanguageButton'
import Logo from './Logo'
import MobileNavigation from './MobileNavigation'
import NavigationLinks from './NavigationLinks'

export default function Header() {
	return (
		<header className='h-16 lg:px-32 px-4 flex items-center justify-between border-b shadow-2xl bg-card/95 fixed top-0 left-0 right-0 z-50 '>
			{/* ---------------------------------- Logo ---------------------------------- */}
			<Logo />

			{/* --------------------------- Desktop Navigation --------------------------- */}
			<nav className='lg:flex items-center justify-center gap-8 hidden'>
				<NavigationLinks />
			</nav>
			{/* ---------------------------- Button Navigation --------------------------- */}
			<div className='flex lg:hidden items-start justify-center gap-4'>
				<AuthButton />
				<MobileNavigation />
			</div>
			<div className='lg:flex hidden items-center justify-center gap-4'>
				<LanguageButton />
				<ThemeButton />
				<AuthButton />
			</div>
		</header>
	)
}
