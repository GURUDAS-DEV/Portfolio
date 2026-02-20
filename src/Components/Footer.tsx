import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full flex justify-center pb-3 h-64 items-center font-space-grotesk">
      <div className=" w-[97%] h-2 border-t-4 border-black">
        <div className="w-full pt-8 flex justify-between items-center px-12">
            <div className="flex flex-col gap-1">
                <h1 className="text-black text-2xl font-bold">Gurudas Bhardwaj</h1>
                <h1 className="text-black text-lg ">Software Developer</h1>
            </div>
            <div className="flex gap-10 font-semibold">
                <Link href="#Home" className="text-black hover:underline">Home</Link>
                <Link href="#About" className="text-black hover:underline">About</Link>
                <Link href="#Projects" className="text-black hover:underline">Projects</Link>
                <Link href="#Skills" className="text-black hover:underline">Skills</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
