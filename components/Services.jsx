import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <>
    <div className="flex gap-8 mt-[3rem] mb-[7rem] px-20 text-black max-md:flex-wrap max-md:px-5">
      <div className="justify-center px-2 text-4xl font-space-grotesk font-medium whitespace-nowrap bg-lime-300 rounded-lg">
        Services
      </div>
      <div className="text-lg max-md:max-w-full font-space-grotesk">
        <span className="block">At our digital marketing agency, we offer a range of services to</span>
        <span className="block">help businesses grow and succeed online. These services include:</span>
      </div>

    </div>
    <div className="flex flex-col">
      <div className="px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-between p-12 w-full border border-solid shadow-sm bg-zinc-100 border-zinc-900 rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-3xl font-medium text-black max-md:mt-10">
                    <div className="justify-center px-2 bg-lime-300 rounded-lg">
                      Search engine
                    </div>
                    <div className="justify-center px-2 whitespace-nowrap bg-lime-300 rounded-lg">
                      optimization
                    </div>
                    <div className="flex gap-4 mt-24 text-xl leading-7 text-black max-md:mt-10">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c155ad6306357e11316d18c55a18730de9e66074803717986519ce8a0a0fa4?"
                        className="shrink-0 aspect-square w-[41px]"
                      />
                      <div className="my-auto">Learn more</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center self-stretch py-0.5 my-auto max-md:mt-10">
                    <Image
                      width='100'
                      height='100'
                      src="/s2.png"
                      className="aspect-[1.27] w-[270px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-between p-12 w-full bg-lime-300 border border-solid shadow-sm border-zinc-900 rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-3xl font-medium text-black max-md:mt-10">
                    <div className="justify-center px-2 whitespace-nowrap bg-white rounded-lg">
                      Pay-per-click
                    </div>
                    <div className="justify-center px-2 whitespace-nowrap bg-white rounded-lg">
                      advertising
                    </div>
                    <div className="flex gap-4 mt-24 text-xl leading-7 text-black max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c155ad6306357e11316d18c55a18730de9e66074803717986519ce8a0a0fa4?"
                        className="shrink-0 aspect-square w-[41px]"
                      />
                      <div className="my-auto">Learn more</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center self-stretch my-auto max-md:mt-10">
                  <Image
                      width='100'
                      height='100'
                      src="/s3.png"
                      className="aspect-[1.27] w-[270px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-between p-12 w-full border border-solid shadow-sm bg-zinc-900 border-zinc-900 rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-3xl font-medium text-black max-md:mt-10">
                    <div className="justify-center px-2 bg-white rounded-lg">
                      Social Media
                    </div>
                    <div className="justify-center px-2 whitespace-nowrap bg-white rounded-lg">
                      Marketing
                    </div>
                    <div className="flex gap-4 mt-24 text-xl leading-7 text-white max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ded8e890fe35ff81e337e3eb3ebd23cbd535e936af7c2d3bb88b0e982a2dd97?"
                        className="shrink-0 aspect-square w-[41px]"
                      />
                      <div className="my-auto">Learn more</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center px-px max-md:mt-10">
                  <Image
                      width='100'
                      height='100'
                      src="/s4.png"
                      className="aspect-[1.27] w-[270px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-between p-12 w-full border border-solid shadow-sm bg-zinc-100 border-zinc-900 rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center text-3xl font-medium text-black max-md:mt-10">
                    <div className="justify-center px-2 whitespace-nowrap bg-lime-300 rounded-lg">
                      Email
                    </div>
                    <div className="justify-center px-2 whitespace-nowrap bg-lime-300 rounded-lg">
                      Marketing
                    </div>
                    <div className="flex gap-4 mt-24 text-xl leading-7 text-black max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c155ad6306357e11316d18c55a18730de9e66074803717986519ce8a0a0fa4?"
                        className="shrink-0 aspect-square w-[41px]"
                      />
                      <div className="my-auto">Learn more</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                      width='100'
                      height='100'
                      src="/s5.png"
                      className="aspect-[1.27] w-[270px]"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-20 mt-10 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-between p-12 w-full bg-lime-300 border border-solid shadow-sm border-zinc-900 rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-3xl font-medium text-black max-md:mt-10">
                    <div className="justify-center px-2 whitespace-nowrap bg-white rounded-lg">
                      Content
                    </div>
                    <div className="justify-center px-2 whitespace-nowrap bg-white rounded-lg">
                      Creation
                    </div>
                    <div className="flex gap-4 mt-24 text-xl leading-7 text-black max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/72c155ad6306357e11316d18c55a18730de9e66074803717986519ce8a0a0fa4?"
                        className="shrink-0 aspect-square w-[41px]"
                      />
                      <div className="my-auto">Learn more</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center self-stretch my-auto max-md:mt-10">
                  <Image
                      width='100'
                      height='100'
                      src="/s6.png"
                      className="aspect-[1.27] w-[270px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow justify-between p-12 w-full border border-solid shadow-sm bg-zinc-900 border-zinc-900 rounded-[45px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-3xl font-medium text-black max-md:mt-10">
                    <div className="justify-center px-2 bg-lime-300 rounded-lg">
                      Analytics and{" "}
                    </div>
                    <div className="justify-center px-2 whitespace-nowrap bg-lime-300 rounded-lg">
                      Tracking
                    </div>
                    <div className="flex gap-4 mt-24 text-xl leading-7 text-white max-md:mt-10">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ded8e890fe35ff81e337e3eb3ebd23cbd535e936af7c2d3bb88b0e982a2dd97?"
                        className="shrink-0 aspect-square w-[41px]"
                      />
                      <div className="my-auto">Learn more</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex justify-center items-center self-stretch my-auto max-md:mt-10">
                  <Image
                      width='100'
                      height='100'
                      src="/s7.png"
                      className="aspect-[1.27] w-[270px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </>
  )
}

export default Services;