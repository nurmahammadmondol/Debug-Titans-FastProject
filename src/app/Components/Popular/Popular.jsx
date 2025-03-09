import React from 'react';
import cyberimg from '../../../../public/assets/images/cybersecurity.jpg';
import uiImage from '../../../../public/assets/images/uxui.png'
import Image from 'next/image';
import { FaBookmark } from 'react-icons/fa';


const Popular = () => {
    return (
        <div className="bg-card bg-blue-50 lg:h-[550px] container mx-auto rounded-2xl p-6 lg:p-10 my-10 lg:my-20">
            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-10 py-10'>
                <div className='text-center lg:text-left lg:self-center'>
                    <h2 className='text-[#135276] text-3xl lg:text-4xl font-bold'>Popular certificates, new AI skills.</h2>
                    <p className='text-lg lg:text-xl font-semibold mt-6'>Get job-ready with Google Professional Certificates—now including AI skills.</p>
                </div>

                    {/* card-1 */}
                    <div className='card bg-blue-50 shadow-2xl'>
                        <figure className='px-4 pt-4'>
                        <Image className='rounded-2xl' width={410} height={176} src={cyberimg} alt="popular" />

                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title font-bold text-lg lg:text-xl'>Google Cyber-Security</h2>
                            
                                
                                <p className='text-blue-500 font-medium text-sm lg:text-xl flex items-center gap-2'><span className='text-gray-500'><FaBookmark /></span> Make progress towards a degree</p>
                            
                            <p className='text-gray-700 text-sm lg:text-base'>Professional Certificate</p>
                        </div>
                    </div>
                    {/* card-2 */}
                    <div className='card bg-blue-50 shadow-2xl'>
                        <figure className='px-4 pt-4'>
                        <Image className='rounded-2xl' width={410} height={176} src={uiImage} alt="popular" />

                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title font-bold text-lg lg:text-xl'>Google Cyber-Security</h2>
                            
                                
                                <p className='text-blue-500 font-medium text-sm lg:text-xl flex items-center gap-2'><span className='text-gray-500'><FaBookmark /></span> Make progress towards a degree</p>
                            
                            <p className='text-gray-700 text-sm lg:text-base'>Professional Certificate</p>
                        </div>
                    </div>
                
            </div>
        </div>
    );
};

export default Popular;