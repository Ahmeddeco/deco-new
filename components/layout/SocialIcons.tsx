import Link from 'next/link'
import { FaFacebookF,FaWhatsapp,FaGithub,FaInstagram } from "react-icons/fa6";

export default function SocialIcons() {
	return (
		<>
			<Link href={'https://www.facebook.com/decodesignegy/'} target='_blank' >
				<FaFacebookF  className='text-4xl ' />
			</Link>
			<Link href={'https://www.instagram.com/decodesigndecodesign/'} target='_blank'>
				<FaInstagram  className='text-4xl' />
			</Link>
			<Link href={'https://github.com/Ahmeddeco?tab=repositories'} target='_blank'>
				<FaGithub  className='text-4xl' />
			</Link>
			<Link href={'https://wa.me/+201152640142'} target='_blank'>
				<FaWhatsapp  className='text-4xl' />
			</Link>
		</>
	)
}
