import React from 'react';

const Testimonials = () => {
  return (
    <>
      <div className="flex flex-col py-20 bg-white mx-[2.7rem]">
        <div className="flex gap-8 px-20 text-black max-md:flex-wrap max-md:px-5">
          <div className="justify-center px-2 text-4xl font-space-grotesk font-medium whitespace-nowrap bg-lime-300 rounded-lg">
            Testimonials
          </div>
          <div className="text-lg max-md:max-w-full font-space-grotesk">
            <span className="block">Hear from Our Satisfied Clients: Read Our Testimonials</span>
            <span className="block">to Learn More about Our Digital Marketing Services</span>
          </div>
        </div>
        <div className="flex flex-col self-center py-20 mt-36 w-full bg-zinc-900 max-w-[1240px] rounded-[45px] max-md:mt-10 max-md:max-w-full">
          <div className="justify-between px-5 mt-1 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-lg text-white max-md:mt-10">
                  <div className="flex flex-col justify-center items-center py-16 px-10 w-full border border-lime-300 border-solid bg-zinc-900 rounded-lg">
                    <div className="text-xl font-medium leading-7 text-lime-300">
                      John Smith
                    </div>
                    <div>Marketing Director at XYZ Corp</div>
                    <p className="mt-5">
                      &quot;We have been working with Positivus for the past year
                      and have seen a significant increase in website&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[53%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-lg text-white max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col justify-center items-center px-14 py-16 w-full border border-lime-300 border-solid bg-zinc-900 rounded-lg">
                    <div className="text-xl font-medium leading-7 text-lime-300">
                      Jane Doe
                    </div>
                    <div>CEO at ABC Inc</div>
                    <p className="mt-5">
                      &quot;Positivus has been an essential partner in our digital
                      marketing strategy. Their expertise and dedication have led to
                      a substantial increase&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-lg text-white max-md:mt-10">
                  <div className="flex flex-col justify-center items-center py-16 px-10 w-full border border-lime-300 border-solid bg-zinc-900 rounded-lg">
                    <div className="text-xl font-medium leading-7 text-lime-300">
                      Alex Johnson
                    </div>
                    <div>CTO at Tech Solutions</div>
                    <p className="mt-5">
                      &quot;Working with Positivus has been a game-changer for our
                      business.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0359f43c70590ea7e66398b3e63b2b7a8018e757ca0400de8fa719168cc64b9?"
          className="self-center mt-32 max-w-full aspect-[10] w-[146px] max-md:mt-10"
        />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
