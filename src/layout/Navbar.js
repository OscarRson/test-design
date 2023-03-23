import logo from '../assest/img/Logo.png';
import '../assest/css/Navbar.css'
 
function Navbar() {
  return (
    <div className="navbar-container  grid grid-cols-10 f-center">
        <div className='col-span-8 lg:col-span-2'>
          <div className='flex flex-row justify-items-center items-center'>
              <img className="logo" alt="Vue logo" src={logo}/>
              <div className="text-3xl text-white ml-2"> Infinity</div>
              <div className="text-3xl text-white font-bold"> Bit</div>
            </div>
        </div>
        <div className="navbar-menu-container col-span-5 mt-6">
            <div className="navbar-menu self-center grid grid-cols-4">
                <div className="navbar-menu-item text-xl text-white font-bold"> Home </div>
                <div className="navbar-menu-item text-xl text-white font-bold"> News </div>
                <div className="navbar-menu-item text-xl text-white font-bold"> Team </div>
                <div className="navbar-menu-item text-xl text-white font-bold"> About </div>
            </div>
        </div>
        <div className='col-span-2 lg:col-span-3'>
            <button className="w-64 down-white-btn text-white text-lg font-bold"><div className='pc-text'>Download Whitepaper</div>
            <div className="mobile-text space-y-2">
              <span class="block w-6 h-1 bg-white"></span>
              <span class="block w-6 h-1 bg-white"></span>
              <span class="block w-6 h-1 bg-white"></span>
            </div></button>
        </div>
    </div>
  );
}

export default Navbar;