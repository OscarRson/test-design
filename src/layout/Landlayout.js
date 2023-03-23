import '../assest/css/Landlayout.css'

function Landlayout() {
  return (
    <div className="land-container flex justify-center items-center">
        <div className="back-circle"></div>
        <div className='back-circle1'></div>
        <div className='land-content flex flex-col items-center'>
            <div className='land-title text-7xl font-bold text-white leading-tight'>Transparent CEX</div>
            <div className='land-title text-7xl text-white  leading-relaxed'>on-chain settlement</div>
            <div className='text-lg text-white opacity-60 leading-relaxed'>InfinityBit will be a CEX with On-Chain Settlement and verifiable 1:1 reserves. Anyone can audit the exchange at any time using our public permissioned settlement blockchain.</div>
            <div className='email-input mt-5'>
              <input className='text-base text-white' placeholder='Enter Your Email'></input>
              <button className='text-base text-white font-bold'>Get Started</button>
            </div>
        </div>
    </div>
  );
}

export default Landlayout;