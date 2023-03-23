import '../assest/css/Roadmap.css'
import ficon1 from '../assest/img/fi1.png'
function Roadmap() {
  return (
    <div className="roadmap-container flex flex-col justify-center items-center">
        <div className="roadmap-design-1 -skew-x-12"></div>
        <div className="roadmap-design-2 skew-x-12"></div>
        <div className='roadmap-content'>
            <div className='text-white font-bold text-5xl'>Our Roadmap</div>
            <div className='roadmap-bar grid grid-cols-5 mt-10'>
                <div className='roadmap-complete-bar'></div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Feb 14, 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Feb 15, 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white opacity-60 rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Q3 2023</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white opacity-60 rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Q1 2024</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className=' w-4 h-4 bg-white opacity-60 rounded-full'></div>
                    <div className='text-lg text-white font-bold mt-4'>Q1 2024</div>
                </div>
            </div>
            <div className='roadmap-content-bar grid grid-cols-5 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Private Sale</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>DEX Listing</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Blockchain Testnet</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Security Audits</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-lg text-white mt-4'>Exchange Official Launch</div>
                </div>
            </div>
            <div className='text-white text-lg opacity-60 mt-28'>
                Demo accounts will be <br/>
                available for platform testing.
            </div>
        </div>
    </div>
  );
}

export default Roadmap;