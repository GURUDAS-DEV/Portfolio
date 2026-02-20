import { FaLocationDot } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mb-5 font-space-grotesk">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 px-12 gap-10">
        <div className="w-full flex flex-col gap-6 justify-center items-center ">
          <div className="w-full cta-overlay-shell">
            <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
            <div className=" w-full  bg-[#ffd93d] relative inline-flex rounded-lg border-[3px] border-black px-6 py-3 text-5xl text-black font-black leading-none">
              <h1 className="text-5xl">EDUCATION</h1>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
              <div className=" w-full  bg-white relative inline-flex flex-col justify-between rounded-lg border-[3px] border-black px-8 py-9  text-black leading-7 ">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col leading-7 gap-3">
                    <h1 className="text-3xl font-black">
                      Bachelor's of Computer Application
                    </h1>
                    <h2 className="text-xl font-normal">
                      DAV Centenary College
                    </h2>
                  </div>
                  <div className="px-6 py-2 font-semibold  border-3 border-black text-black bg-[#66d9ef] w-fit">
                    2024-2027
                  </div>
                </div>

                <div className="mt-14">
                  <FaLocationDot className="inline-block mr-2" />
                  Faridabad, Haryana, India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-center items-center ">
          <div className="w-full cta-overlay-shell">
            <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
            <div className=" w-full  bg-[#ffd93d] relative inline-flex rounded-lg border-[3px] border-black px-6 py-3 text-5xl text-black font-black leading-none">
              <h1 className="text-5xl">LANGUAGES</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full cta-overlay-shell flex flex-col gap-4">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />

              <div className="flex flex-col gap-6 relative rounded-lg border-[3px] border-black bg-white px-8 py-8 text-black leading-7">
                {/* English */}
                <div className="w-full cta-overlay-shell">
                  <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
                  <div className="w-full hover:translate-1 transition-all ease-in-out bg-white cursor-pointer hover:bg-[#66d9ef] relative flex items-center justify-between rounded-lg border-[3px] border-black px-6 py-4">
                    <h3 className="text-xl font-bold text-black">English</h3>
                    <div className="flex gap-2">
                      <div className="flex gap-2 relative">
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hindi */}
                <div className="w-full cta-overlay-shell">
                  <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
                  <div className="w-full hover:translate-1 transition-all ease-in-out bg-white hover:bg-[#66d9ef] cursor-pointer relative flex items-center justify-between rounded-lg border-[3px] border-black px-6 py-4">
                    <h3 className="text-xl font-bold text-black">Hindi</h3>
                    <div className="flex gap-2 relative">
                      <div className="cta-overlay-shell">
                        <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                        <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                      </div>
                      <div className="cta-overlay-shell">
                        <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                        <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                      </div>
                      <div className="cta-overlay-shell">
                        <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                        <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Japanese */}
                <div className="w-full cta-overlay-shell">
                  <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
                  <div className="w-full hover:translate-1 transition-all ease-in-out cursor-pointer hover:bg-[#66d9ef] bg-white relative flex items-center justify-between rounded-lg border-[3px] border-black px-6 py-4">
                    <h3 className="text-xl font-bold text-black">Japanese</h3>
                    <div className="flex gap-2">
                      <div className="flex gap-2 relative">
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-white z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black bg-black" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-white z-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
