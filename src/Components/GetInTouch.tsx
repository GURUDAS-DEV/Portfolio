import SocialMediaComponentGIT from "./SocialMediaComponentGIT";

const GetInTouch = () => {
  return (
    <div className="w-full  flex flex-col justify-center items-center font-space-grotesk">
      <div className="w-full flex flex-col px-12 py-5">
        <div className="cta-overlay-shell w-fit">
          <div className="cta-overlay-back absolute inset-0 rounded-lg border-[3px] border-black bg-black" />
          <div className="nav-cta relative inline-flex w-fit rounded-lg border-[3px] border-black bg-[#ffd93d] px-6 py-3 text-5xl text-black font-black leading-none">
            <h1>GET IN TOUCH</h1>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center text-black mt-8">
          <div className="flex flex-col  text-2xl font-medium">
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
