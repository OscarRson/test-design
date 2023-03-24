import '../assest/css/TeamLayout.css'
import ficon1 from '../assest/img/fi1.png'
import in_icon from '../assest/img/In.png'
function TeamLayout() {
  return (
    <div className="team-container flex flex-col justify-center items-center">
        <div className='feature-title flex flex-col'>
           <div className='text-5xl text-white text-center font-bold'>Our Team Members</div>
        </div>
        <div className='feature-content gap-8 alien-items mt-10 grid md:grid-cols-1 lg:grid-cols-3'>
             <div className='team-item flex flex-col items-center'>
                 <div className='flex flex-row justify-end items-end'><img className='w-12 h-12' src={in_icon}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Igor Zaitsev   </div>
                 <div className='text-lg text-white opacity-60 mt-3'>CHIEF EXECUTIVE OFFICIER</div>
             </div>     
             <div className='team-item flex flex-col items-center'>
                 <div className='flex flex-row justify-end items-end'><img className='w-12 h-12' src={in_icon}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Alyssa McKeown   </div>
                 <div className='text-lg text-white opacity-60 mt-3'>CHIEF EXECUTIVE OFFICIER</div>
             </div>   
             <div className='team-item flex flex-col items-center'>
                 <div className='flex flex-row justify-end items-end'><img className='w-12 h-12' src={in_icon}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>sW</div>
                 <div className='text-lg text-white opacity-60 mt-3'>CHIEF EXECUTIVE OFFICIER</div>
             </div>   
        </div>
    </div>
  );
}

export default TeamLayout;