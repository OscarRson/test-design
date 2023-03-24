import '../assest/css/SubscribeLayout.css'
import ficon1 from '../assest/img/fi1.png'
function SubscribeLayout() {
  return (
    <div className="subscribe-container flex flex-col justify-center items-center">
        <div className='subscribe-content flex flex-col  justify-center items-center'>
            <div className="subscribe-design-2 skew-x-12"></div>
            <div className="subscribe-design-1 -skew-x-12"></div>
            <div className='subscribe-title font-bold text-white md:text-xl lg:text-4xl'>Stay updated on the latest news about InfinityBit</div>
            <div className='subscribe-input mt-5'>
              <input className='text-base text-white placeholder-slate-300' placeholder='Enter Your Email'></input>
              <button className='text-base text-blue-500 font-bold'>
                  <div className='subscribe-pc-text'>Get Started</div>
                  <div className="subscribe-mobile-text space-y-2 hidden">
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

export default SubscribeLayout;