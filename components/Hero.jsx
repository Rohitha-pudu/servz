import Image from 'next/image';
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="flex flex-col justify-center pt-5 pb-20 bg-white">
      <div className="justify-between px-20 py-2.5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
            <Image
              src='/s1.png'
              width={200}
              height={200}
              className="grow w-full max-md:mt-9 pl-0"
            />
          </div>
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-10 justify-center items-center self-stretch my-auto text-xl leading-7 text-black max-md:flex-wrap max-md:mt-10">
              <div className="self-stretch my-auto">About Us</div>
              <div className="self-stretch my-auto">Services</div>
              <div className="self-stretch my-auto">Use Cases</div>
              <div className="self-stretch my-auto">Pricing</div>
              <div className="self-stretch my-auto">Blog</div>
              <div className="justify-center self-stretch px-9 py-5 text-center rounded-2xl border border-solid border-zinc-900 max-md:px-5">
                Request a quote
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between px-20 mt-20 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-xl text-black max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl font-space-grotesk font-medium max-md:max-w-full max-md:text-4xl flex flex-col">
              <span>Navigating the </span>
              <span className='mt-4'>digital landscape</span>
              <span className='mt-4'>for success</span>
            </div>

              <div className="mt-9 mr-8 font-space-grotesk font-medium sleading-7 max-md:mr-2.5 max-md:max-w-full">
                <span>Our digital marketing agency helps businesses</span>  
                <span className='mt-4'>grow and succeed online through a</span>
                <span className='mt-4'>range of services including SEO, PPC, social
                media marketing, and content creation.</span>
              </div>
              <div className="justify-center self-start px-9 py-5 mt-9 text-center text-white rounded-2xl bg-zinc-900 leading-[140%] max-md:px-5">
                Book a consultation
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6826d5b86ffa247944a2ebc2872dc510b3ad9e806508bd5af3272502e95d7a2a?"
              className="grow w-full max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-20 mt-16 w-full max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2539e1bbbada3a306719a3aec2e34e6a44d86534ff9bff0b919e40601fab982?"
          className="shrink-0 max-w-full mix-blend-luminosity aspect-[2.56] w-[124px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97155378e933a578f20b8deccd7692da3c8e5a369736b196067ac956487b4ea7?"
          className="shrink-0 max-w-full mix-blend-luminosity aspect-[2.63] w-[126px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/da043d074d1410ea5bec3d53ed3b7a4e2da1c48f471ca89c76c8ad924d5d503e?"
          className="shrink-0 max-w-full mix-blend-luminosity aspect-[2.7] w-[129px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/43502afe5d3e1f58c0db323bb2dc2cbf174f52b7dffc446d0969070415105e44?"
          className="shrink-0 max-w-full mix-blend-luminosity aspect-[3.03] w-[145px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d30d1dc05efc04c42c595d12c325d385ea68ac9a825f0795234cacd980c00d14?"
          className="shrink-0 max-w-full mix-blend-luminosity aspect-[2.63] w-[126px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c8d576ea3af7734af6a34707ab365fd12be2e4937c37179404e49a1dde94d7b?"
          className="shrink-0 max-w-full mix-blend-luminosity aspect-[2.33] w-[111px]"
        />
      </div>
    </div>




    </>
  )
}

export default Hero;