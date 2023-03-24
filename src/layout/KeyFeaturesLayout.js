import '../assest/css/KeyFeaturesLayout.css'
import React, { useState } from "react";
import ficon1 from '../assest/img/fi1.png'
import ficon2 from '../assest/img/fi2.png'
import ficon3 from '../assest/img/fi3.png'
import ficon4 from '../assest/img/fi4.png'
import ficon5 from '../assest/img/fi5.png'
import ficon6 from '../assest/img/fi6.png'
import ficon_c1 from '../assest/img/fi_1.png'
import ficon_c2 from '../assest/img/fi_2.png'
import ficon_c3 from '../assest/img/fi_3.png'
import ficon_c4 from '../assest/img/fi_4.png'
import ficon_c5 from '../assest/img/fi_5.png'
import ficon_c6 from '../assest/img/fi_6.png'
function KeyFeaturesLayout() {
  const [featureId, setFeatureId] = useState(false);
  return (
    <div className="feature-container flex flex-col justify-center items-center">
        <div className='feature-title flex flex-col'>
           <div className='text-5xl text-white text-center font-bold'>Key features</div>
           <div className='text-base text-white text-center  opacity-60 mt-5'>Today, several centralized exchanges are operating with no transparency. Although DEX are growing in numbers, there will always be a need for fiat on-ramps. InfinityBit is a CEX that offers the transparency of a DEX.</div>
        </div>
        <div className='feature-content gap-8 alien-items mt-10 grid md:grid-cols-2 xl:grid-cols-3 2xl: grid-cols-1'>
             <div className='feature-item flex flex-col items-center' onMouseEnter={() => {setFeatureId(1);}} onMouseLeave={() => {setFeatureId(0);}}>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={featureId != 1?ficon1:ficon_c1}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Token Ecosystem</div>
                 <div className='text-lg text-white opacity-60 mt-3'>InfinityBit.io accepts IBIT tokens for 50% reduced trading fees</div>
             </div>     
             <div className='feature-item flex flex-col items-center'onMouseEnter={() => {setFeatureId(2);}} onMouseLeave={() => {setFeatureId(0);}}>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={featureId != 2?ficon2:ficon_c2}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Secure</div>
                 <div className='text-lg text-white opacity-60 mt-3'>Industry standard encryption and security are implemented in the InfinityBit trade execution system.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'onMouseEnter={() => {setFeatureId(3);}} onMouseLeave={() => {setFeatureId(0);}}>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={featureId != 3?ficon3:ficon_c3}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Transparent</div>
                 <div className='text-lg text-white opacity-60 mt-3'>All transfers and trade executions are published to a public permissioned Ethereum-based blockchain.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'onMouseEnter={() => {setFeatureId(4);}} onMouseLeave={() => {setFeatureId(0);}}>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={featureId != 4?ficon4:ficon_c4}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Certified technology</div>
                 <div className='text-lg text-white opacity-60 mt-3'>The InfinityBit codebase will have passed multiple third-party security audits before launch.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'onMouseEnter={() => {setFeatureId(5);}} onMouseLeave={() => {setFeatureId(0);}}>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={featureId != 5?ficon5:ficon_c5}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>Broad Distribution</div>
                 <div className='text-lg text-white opacity-60 mt-3'>InfinityBit is accessible to nearly everyone from individuals to large investment firms.</div>
             </div>     
             <div className='feature-item flex flex-col items-center'onMouseEnter={() => {setFeatureId(6);}} onMouseLeave={() => {setFeatureId(0);}}>
                 <div className='feature-icon flex flex-row justify-center items-center'><img src={featureId != 6?ficon6:ficon_c6}></img></div>
                 <div className='text-3xl text-white font-bold mt-4'>AI Powered Trading</div>
                 <div className='text-lg text-white opacity-60 mt-3'>A fully automated AI-powered trading system is being developed for IBIT holders.</div>
             </div>     
        </div>
    </div>
  );
}

export default KeyFeaturesLayout;