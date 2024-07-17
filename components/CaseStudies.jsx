import React from 'react'

const CaseStudies = () => {
  return (
    <div className='mb-[10rem]'>
    
    <div className="flex flex-col justify-center mx-[2.7rem] bg-white">
      <div className="flex gap-8 px-20 mt-44 text-black max-md:flex-wrap max-md:px-5 max-md:mt-10">
      <div className="justify-center px-2 text-4xl font-space-grotesk font-medium whitespace-nowrap bg-lime-300 rounded-lg">
    Case Studies
      </div>
      <div className="text-lg max-md:max-w-full font-space-grotesk">
        <span className="block">Explore Real-Life Examples of Our Proven Digital Marketing</span>
        <span className="block">Success through Our Case Studies</span>
      </div>
      </div>
      <div className="mx-[5rem] px-16 py-16 mt-36 w-full bg-zinc-900 max-w-[1234px] rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="text-lgfont-space-grotesk text-white">
                For a local restaurant, we implemented a targeted PPC campaign
                that resulted in a 50% increase in website traffic and a 25%
                increase in sales.
              </div>
              <div className="flex gap-4 pr-5 font-space-grotesk mt-5 text-xl leading-7 text-lime-300">
                <div>Learn more</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="text-lg text-white font-space-grotesk">
                For a B2B software company, we developed an SEO strategy that
                resulted in a first page ranking for key keywords and a 200%
                increase in organic traffic.
              </div>
              <div className="flex gap-4 pr-5 mt-5 font-space-grotesk text-xl leading-7 text-lime-300">
                <div>Learn more</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              <div className="text-lg text-white font-space-grotesk">
                For a national retail chain, we created a social media marketing
                campaign that increased followers by 25% and generated a 20%
                increase in online sales.
              </div>
              <div className="flex font-space-grotesk gap-4 pr-5 mt-5 text-xl leading-7 text-lime-300">
                <div>Learn more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CaseStudies