
import Logo from '../assets/images/ielts.png'

const Navbar = () => {
    return (
        <div  style={{backgroundColor: "rgb(81 34 108)"}} className=' sticky flex items-center justify-between md:px-10 px-5 py-4  text-white font-semibold '>

            <div className='flex gap-6 items-center font-extrabold'>
                <img
                    className='rounded-full w-10 h-10'
                    src={Logo}
                    alt="logo"
                />

                <h1>IELTS practice</h1>
            </div>

            <div className=' flex md:gap-8 gap-2 md:text-base text-sm'>
                <p>
                    About us
                </p>
                <p>
                    Download app
                </p>
            </div>
        </div>
    );
}

export default Navbar;
