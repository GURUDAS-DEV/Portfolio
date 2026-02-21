import SocialMediaComponentGIT from "./SocialMediaComponentGIT";

const GetInTouch = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center font-space-grotesk text-black dark:text-white">
      <div className="w-full flex flex-col px-5 py-4 sm:px-8 sm:py-5 md:px-12">
        <div className="cta-overlay-shell w-fit">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-black dark:bg-[#a8e6cf]" />
          <div className="nav-cta relative inline-flex w-fit rounded-lg border-[3px] border-black dark:border-[#a8e6cf] bg-[#ffd93d] dark:bg-[#67d6ea] px-4 py-2 text-3xl font-black leading-none text-black sm:px-5 sm:py-2.5 sm:text-4xl md:px-6 md:py-3 md:text-5xl">
            <h1>GET IN TOUCH</h1>
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col items-center justify-center text-black dark:text-white sm:mt-8">
          <div className="flex flex-col text-lg font-medium sm:text-xl md:text-2xl">
            <h1>Let's Build something amazing together</h1>
          </div>
          <div className="flex justify-center items-center w-full">
            <SocialMediaComponentGIT/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
