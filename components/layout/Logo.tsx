import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
	return (
		<Link href={'/'}>
			<div className='relative size-9'>
				<Image src={'/icons/logo.svg'} alt={'Logo'} fill/>
			</div>
		</Link>
	)
}
