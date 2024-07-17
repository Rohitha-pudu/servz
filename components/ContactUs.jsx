import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className="flex flex-col justify-center py-16 bg-white mx-[2.7rem]">
      <div className="flex gap-5 justify-between self-start ml-24 text-black max-md:flex-wrap">
        <div className="font-space-grotesk justify-center px-2 text-4xl font-medium bg-lime-300 rounded-lg">
          Contact Us
        </div>
        <div className="my-auto text-lg font-space-grotesk">
          Connect with Us: Lets Discuss Your Digital Marketing Needs
        </div>
      </div>
      <div className="flex justify-center items-center px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="pt-16 pb-16 pl-20 max-w-full bg-zinc-100 rounded-[45px] w-[1240px] max-md:pl-5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex gap-3.5">
                    <div className="flex flex-col justify-center items-center px-1.5 bg-white border border-black border-solid h-[29px] rounded-[29px] w-[29px]">
                      <div className="shrink-0 w-4 h-4 bg-lime-300 rounded-full" />
                    </div>
                    <div className="my-auto text-lg text-black font-space-grotesk">Say Hi</div>
                  </div>
                  <div className="flex gap-3.5 text-lg text-black">
                    <div className="shrink-0 bg-white border border-black border-solid h-[29px] rounded-[29px] w-[29px]" />
                    <div className="flex-auto my-auto font-space-grotesk">Get a Quote</div>
                  </div>
                </div>
                <div className="mt-10 text-base leading-7 text-black max-md:max-w-full font-space-grotesk">
                  Name
                </div>
                <div className="justify-center items-start px-8 py-5 mt-1.5 text-lg font-space-grotesk whitespace-nowrap bg-white rounded-2xl border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                  Name
                </div>
                <div className="mt-6 text-base leading-7 text-black max-md:max-w-full font-space-grotesk">
                  Email
                </div>
                <div className="justify-center items-start px-8 py-5 mt-1.5 text-lg font-space-grotesk whitespace-nowrap bg-white rounded-2xl border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                  Email
                </div>
                <div className="mt-6 text-base leading-7 text-black font-space-grotesk max-md:max-w-full">
                  Message
                </div>
                <div className="justify-center items-start px-8 pt-5 pb-14 mt-1.5 text-lg font-space-grotesk whitespace-nowrap bg-white rounded-2xl border border-black border-solid text-zinc-500 max-md:px-5 max-md:max-w-full">
                  Message
                </div>
                <div className="justify-center items-center px-9 py-5 mt-10 text-xl font-space-grotesk leading-7 text-center text-white rounded-2xl bg-zinc-900 max-md:px-5 max-md:max-w-full">
                  Send Message
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/25ac8205c16df8dd0569a8eeacb02b13bca938b5f494bc5b6e9289b23c2d1a39?"
                className="z-10 grow w-full aspect-[0.72] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactUs