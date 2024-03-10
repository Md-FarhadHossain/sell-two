import Link from 'next/link'
import logo from '@/public/footer_logo.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white pt-14 pb-32'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
            <ul className='flex flex-col gap-4'>
                <li><Link className='hover:underline' href="/">Trams & Condition</Link></li>
                <li><Link className='hover:underline' href="/">Refund Policy</Link></li>
                <li><Link className='hover:underline' href="/">Payment Support</Link></li>
                <li><Link className='hover:underline' href="/">About Us</Link></li>
            </ul>
            <div>
            <Link href="/">
                <Image src={logo} alt="logo" />
              </Link>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer