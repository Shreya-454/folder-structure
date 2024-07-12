import Link from "next/link";

export default function Hero() {
    return(
        <>
      <div className="flex justify-center items-center min-h-screen">
        <Link href='./about'><button className="text-3xl border-2 border-black py-3 px-5 bg-blue-700 text-white">About</button></Link>
      </div>
        </>
    )
}