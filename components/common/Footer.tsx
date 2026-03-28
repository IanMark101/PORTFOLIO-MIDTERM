import Link from "next/link"
export default function Footer() {
  return (
    <footer className="flex flex-col items-center border-t p-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 lg:text-lg">
          <div className="flex rounded-md bg-blue-600 px-3 py-1 font-extrabold text-white">
            IB
          </div>
          <h1 className="text-base font-bold lg:text-lg">
            IAN MARK J. BUENAFLOR
          </h1>
        </div>
        <ul className="mt-5 flex flex-wrap justify-center gap-8">
          <Link href="./">
            <li className="text-sm lg:text-base">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-sm lg:text-base">About</li>
          </Link>
          <Link href="blog">
            <li className="text-sm lg:text-base">Blog</li>
          </Link>
          <Link href="contact">
            <li className="text-sm lg:text-base">Contact</li>
          </Link>
          <Link href="projects">
            <li className="text-sm lg:text-base">Projects</li>
          </Link>
        </ul>
        <p className="md:text-md mt-3 text-center sm:text-sm lg:text-lg">
          © 2024 IAN MARK BUENAFLOR | MIDTERM PROJECT MOCKUP | BSIT-3 CPC
        </p>
      </div>
    </footer>
  )
}
