import '../assest/css/Landlayout.css'

function Landlayout() {
  return (
    <div className="land-container flex justify-center items-center">
        <div className="back-circle"></div>
        <div className='back-circle1'></div>
        <div className='land-content flex flex-col items-center'>
            <div className='land-title font-bold text-white leading-tight text-5xl lg:text-7xl'>Transparent CEX</div>
            <div className='land-title text-white mt-5  leading-relaxed text-5xl lg:text-7xl'>on-chain settlement</div>
            <div className='text-white opacity-60 mt-5 leading-relaxed  text-sm lg:text-lg'>InfinityBit will be a CEX with On-Chain Settlement and verifiable 1:1 reserves. Anyone can audit the exchange at any time using our public permissioned settlement blockchain.</div>
            <div className='email-input mt-5'>
              <input className='text-base text-white' placeholder='Enter Your Email'></input>
              <button className='text-base text-white font-bold'>
                  <div className='pc-text'>Get Started</div>
                  <div className="mobile-text space-y-2 hidden">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-8 w-8">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  </div>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Landlayout;