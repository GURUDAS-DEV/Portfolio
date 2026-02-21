import { FaLocationDot } from "react-icons/fa6";

const Education = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center mb-5 font-space-grotesk text-black dark:text-white">
      <div className="w-full grid grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 md:px-12">
        <div className="w-full flex flex-col gap-6 justify-center items-center">
          <div className="w-full cta-overlay-shell">
            <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
            <div className="w-full relative inline-flex rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-[#ffd93d] dark:bg-[#67d6ea] px-4 py-2 text-3xl font-black leading-none text-black sm:px-5 sm:py-2.5 sm:text-4xl md:px-6 md:py-3 md:text-5xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">EDUCATION</h1>
            </div>
          </div>
          <div className="w-full h-80 sm:h-90 md:h-105">
            <div className="w-full cta-overlay-shell">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
              <div className="w-full h-80 sm:h-90 md:h-105 bg-white dark:bg-stone-800 relative inline-flex flex-col justify-between rounded-lg border-[3px] border-black dark:border-[#a8e6cf] px-5 py-6 text-black dark:text-white leading-7 sm:px-6 sm:py-7 md:px-8 md:py-9 overflow-y-auto">
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <h1 className="text-2xl font-black sm:text-3xl">
                      Bachelor's of Computer Application
                    </h1>
                    <h2 className="text-base font-normal sm:text-xl">
                      DAV Centenary College
                    </h2>
                  </div>
                  <div className="w-fit border-3 border-black bg-[#66d9ef] px-4 py-2 text-sm font-semibold text-black sm:px-6 sm:text-base">
                    2024-2027
                  </div>
                </div>

                <div className="mt-8 text-sm sm:mt-12 sm:text-base">
                  <FaLocationDot className="inline-block mr-2" />
                  Faridabad, Haryana, India
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6 justify-center items-center">
          <div className="w-full cta-overlay-shell">
            <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
            <div className="w-full relative inline-flex rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-[#ffd93d] dark:bg-[#67d6ea] px-4 py-2 text-3xl font-black leading-none text-black sm:px-5 sm:py-2.5 sm:text-4xl md:px-6 md:py-3 md:text-5xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl">LANGUAGES</h1>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 h-80 sm:h-90 md:h-105">
            <div className="w-full cta-overlay-shell flex flex-col gap-4">
              <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />

              <div className="flex flex-col gap-4 sm:gap-6 relative rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 px-5 py-6 text-black dark:text-white leading-7 h-80 sm:h-90 md:h-105 overflow-y-auto">
                {/* English */}
                <div className="w-full cta-overlay-shell">
                  <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                  <div className="w-full hover:translate-1 transition-all ease-in-out bg-white dark:bg-stone-900 cursor-pointer hover:bg-[#66d9ef] dark:hover:bg-[#67d6ea] relative flex items-center justify-between rounded-lg border-[3px] border-black dark:border-[#a8e6cf] px-4 py-3 sm:px-6 sm:py-4">
                    <h3 className="text-base font-bold text-black dark:text-white sm:text-xl">English</h3>
                    <div className="flex gap-2">
                      <div className="flex gap-2 relative">
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hindi */}
                <div className="w-full cta-overlay-shell">
                  <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                  <div className="w-full hover:translate-1 transition-all ease-in-out bg-white dark:bg-stone-900 hover:bg-[#66d9ef] dark:hover:bg-[#67d6ea] cursor-pointer relative flex items-center justify-between rounded-lg border-[3px] border-black dark:border-[#a8e6cf] px-4 py-3 sm:px-6 sm:py-4">
                    <h3 className="text-base font-bold text-black dark:text-white sm:text-xl">Hindi</h3>
                    <div className="flex gap-2 relative">
                      <div className="cta-overlay-shell">
                        <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                        <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                      </div>
                      <div className="cta-overlay-shell">
                        <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                        <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                      </div>
                      <div className="cta-overlay-shell">
                        <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                        <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Japanese */}
                <div className="w-full cta-overlay-shell">
                  <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                  <div className="w-full hover:translate-1 transition-all ease-in-out cursor-pointer hover:bg-[#66d9ef] dark:hover:bg-[#67d6ea] bg-white dark:bg-stone-900 relative flex items-center justify-between rounded-lg border-[3px] border-black dark:border-[#a8e6cf] px-4 py-3 sm:px-6 sm:py-4">
                    <h3 className="text-base font-bold text-black dark:text-white sm:text-xl">Japanese</h3>
                    <div className="flex gap-2">
                      <div className="flex gap-2 relative">
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black bg-[#ffd93d] z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 z-20"></div>
                        </div>
                        <div className="cta-overlay-shell">
                          <div className="cta-overlay-back absolute inset-0  z-10  border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
                          <div className="w-4 cta-overlay-shell  top-1 left-1  h-4 border-2 border-black dark:border-[#a8e6cf] bg-white dark:bg-stone-800 z-20"></div>
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
