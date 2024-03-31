import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.svg'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import bluebutton from '../../public/assets/blue-button.svg'
import greenbutton from '../../public/assets/green-button.svg'
import pinkbutton from '../../public/assets/pink-button.svg'

export function Features(){
    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature1} alt='Feature 1 image' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>

                    <h3 className="font-medium text-[#0085FF] lg:text-[18px]">Sale Moitoring</h3>

                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                        Simplify your sales monitoring
                    </h1>
                    <Image src={Feature1} alt="feature 1 image" className='pt-[24px] sm:hidden'/>
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                        Stay on top with our game changing feature. Get a bird eye view with our customizable dashboard.
                    </p>
                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex items-center gap-x-2 text-[#36485C] '>
                            <span>
                                <Image src={Check} alt='Checkmark'/>
                            </span>
                            Lorem ipsum dolar sit amit.
                        </li>

                        <li className='flex items-center gap-x-2 text-[#36485C] '>
                            <span>
                                <Image src={Check} alt='Checkmark'/>
                            </span>
                            Lorem ipsum dolar sit amit.
                        </li>

                        <li className='flex items-center gap-x-2 text-[#36485C] '>
                            <span>
                                <Image src={Check} alt='Checkmark'/>
                            </span>
                            Lorem ipsum dolar sit amit.
                        </li>
                    </ul>

                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]'>
                        Learn more{" "} <span><Image src={bluebutton} alt='Learn more'/></span>
                    </p>
                </div>
            </div>


            <div className="flex flex-col gap-x-6 sm:flex-row">
                <Image src={Feature2} alt='Feature 2 image' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>

                    <h3 className="font-medium text-[#00A424] lg:text-[18px]">Customer Support</h3>

                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                        Get in touch with us
                    </h1>
                    <Image src={Feature2} alt="feature 2 image" className='pt-[24px] sm:hidden'/>
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                        Stay on top with our game changing feature. Get a bird eye view with our customizable dashboard.
                    </p>
                    <ul className='flex flex-col gap-y-3 lg:text-[18px]'>
                        <li className='flex items-center gap-x-2 text-[#36485C] '>
                            <span>
                                <Image src={Check} alt='Checkmark'/>
                            </span>
                            Lorem ipsum dolar sit amit.
                        </li>

                        <li className='flex items-center gap-x-2 text-[#36485C] '>
                            <span>
                                <Image src={Check} alt='Checkmark'/>
                            </span>
                            Lorem ipsum dolar sit amit.
                        </li>

                        <li className='flex items-center gap-x-2 text-[#36485C] '>
                            <span>
                                <Image src={Check} alt='Checkmark'/>
                            </span>
                            Lorem ipsum dolar sit amit.
                        </li>
                    </ul>

                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]'>
                        Learn more{" "} <span><Image src={greenbutton} alt='Learn more'/></span>
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
                <Image src={Feature3} alt='Feature 3 image' className='hidden w-1/2 sm:block'/>
                <div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>

                    <h3 className="font-medium text-[#EB2891] lg:text-[18px]">Growth Moitoring</h3>

                    <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                        Monitor your site's new subscribers
                    </h1>
                    <Image src={Feature3} alt="feature 3 image" className='pt-[24px] sm:hidden'/>
                    <p className='py-[24px] text-[#36485C] lg:text-[18px]'>
                        Stay on top with our game changing feature. Get a bird eye view with our customizable dashboard.
                    </p>
                    <div className='flex w-full gap-x-[24px]'>
                        <div className='w-1/2 flex flex-col gap-y-3'>
                            <h3 className='text-[20px] font-medium text-[#172026]'>100+</h3>
                            <p className='text-[#36485C]'>Lorem ipsum dolar sit.</p>
                        </div>
                        <div className='w-1/2 flex flex-col gap-y-3'>
                            <h3 className='text-[20px] font-medium text-[#172026]'>800+</h3>
                            <p className='text-[#36485C]'>conse adipiscing elit</p>
                        </div>
                    </div>

                    <p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]'>
                        Learn more{" "} <span><Image src={pinkbutton} alt='Learn more'/></span>
                    </p>
                </div>
            </div>



            
        </div>
    )
}