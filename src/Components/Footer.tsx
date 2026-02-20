import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full font-space-grotesk">
      <div className="mx-auto w-full max-w-375 px-4 pb-6 pt-8 sm:px-6 sm:pb-8 sm:pt-10 md:px-12">
        <div className="h-2 w-full border-t-4 border-black" />
        <div className="flex w-full flex-col items-start justify-between gap-6 pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold text-black sm:text-2xl">Gurudas Bhardwaj</h1>
            <p className="text-xs text-black/80 sm:text-base">Software Developer</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold sm:gap-8 sm:text-sm md:text-base">
            <Link href="#Home" className="text-black transition-opacity hover:opacity-80">Home</Link>
            <Link href="#About" className="text-black transition-opacity hover:opacity-80">About</Link>
            <Link href="#Projects" className="text-black transition-opacity hover:opacity-80">Projects</Link>
            <Link href="#Skills" className="text-black transition-opacity hover:opacity-80">Skills</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
