import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'
const Navbar=()=>{
    return(
        <nav className="navbar-block w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="navbar-container max-w-[1500px] px-6">
                <div className='flex justify-between items-center'>
                    logo 
                    <Link href='/'>

                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar