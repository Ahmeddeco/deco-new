import Image from 'next/image'
import Link from 'next/link'
import LogoIcon from '@/public/icons/logo.svg'

export default function BigLogo() {
	return (
		<Link href={'/'} className='hover:scale-105 ease-in-out duration-500'>
			<div className='size-44 lg:size-72 relative'>
				<Image src={LogoIcon} alt={'logo'} fill />
			</div>
		</Link>
	)
}
