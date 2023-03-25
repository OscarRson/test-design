import '../assest/css/Footer.css'
import logo from '../assest/img/Logo.png';

function SubscribeLayout() {
  return (
    <div className="footer-container flex flex-col justify-center items-center"  data-aos="fade-up">
        <div className='footer-content grid gap-8 border-t-2 border-opacity-30 border-white pt-16 pb-10 md:grid-cols-1 lg:grid-cols-3 '>
          <div className='flex flex-col pr-10'>
            <div className='flex flex-row justify-items-center items-center'>
              <img className="logo" alt="Vue logo" src={logo}/>
              <div className="text-xl text-white ml-2"> Infinity</div>
              <div className="text-xl text-white font-bold"> Bit</div>
            </div>
            <div className='text-left text-white opacity-60 text-base leading-relaxed mt-5'>
              InfinityBit.io is a completely on-chain CEX built on top of the Ethereum blockchain.  It will serve as a transparent on-ramp and exchange for individuals and firms alike.
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-white text-lg  font-bold text-left'>
              User Links
            </div>
            <div className='text-left grid grid-cols-2'>
              <div className=' text-white opacity-60 text-base leading-relaxed mt-5'>What a CEX?</div>
              <div className=' text-white opacity-60 text-base leading-relaxed mt-5'>Press</div>
              <div className=' text-white opacity-60 text-base leading-relaxed mt-5'>Road Map</div>
              <div className=' text-white opacity-60 text-base leading-relaxed mt-5'>About</div>
              <div className=' text-white opacity-60 text-base leading-relaxed mt-5'>Whitepaper</div>
              <div className=' text-white opacity-60 text-base leading-relaxed mt-5'>Blockchain</div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='text-white text-lg  font-bold text-left'>
              Subscribe
            </div>
            <div className='flex flex-col'>
              <div className='footer-email-input mt-5'>
                <input className='text-base text-white' placeholder='Enter Your Email'></input>
                <button className='text-base text-white font-bold'>
                  <div className='footer-pc-text'>Get Started</div>
                  <div className="footer-mobile-text space-y-2 hidden">
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
              <div className='text-left text-white opacity-60 text-base leading-relaxed mt-5'>
              Don’t miss out on the latest updates! Subscribe now and stay in touch. We won’t send unrelated email.
              </div>
            </div>
          </div>
        </div>
        <div className='footer-content border-t-2 border-opacity-30 border-white pt-5 block'>
          <div className='text-left text-white opacity-60 text-base leading-relaxed inline-block float-left'>
            @2023 InfinityBit.io Copyright and All rights reserved.
          </div>
          <div className='text-left text-white opacity-60 text-base leading-relaxed inline-block float-right ml-10'>
            Privacy Policy
          </div>
          <div className='text-left text-white opacity-60 text-base leading-relaxed inline-block float-right ml-10'>
            Terms and Conditions
          </div>
        </div>
    </div>
  );
}

export default SubscribeLayout;