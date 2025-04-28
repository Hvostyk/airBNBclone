// import './navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import SearchFilters from './SearchFilters'
import UserNav from './UserNav'
import AddPropertyButton from './AddPropertyButton'
const Navbar=()=>{
    return(
        <nav className="navbar-block w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
            <div className="navbar-container w-full px-6">
                <div className='navbar-ul flex justify-between items-center'>
                    <Link href='/'>
                        <Image 
                            src="/Navbar/Airbnb_Logo.png"
                            alt='Airbnb logo'
                            width={180}
                            height={38}
                        />
                    </Link>
                    <div className='navbar-search flex space-x-6'> <SearchFilters/> </div>
                    
                    <div className='navbar-user flex space-x-6'>
                        <AddPropertyButton/>
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar