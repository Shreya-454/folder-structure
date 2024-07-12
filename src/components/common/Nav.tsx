import Link from "next/link";

export default function Nav() {
    return (
        <>
        <div className="container max-w-[1140px] mx-auto px-3 flex justify-between">
<Link href="./">
<p className="text-4xl font-bold">LOGO</p></Link>
<ul className="flex gap-8">
    <li><Link href="./" className="text-xl ">Home</Link></li>
    <li><Link href="./about" className="text-xl">About</Link></li>
    <li><Link href="./contact" className="text-xl ">Contact US</Link></li>

</ul>
        </div>
        </>
    )
}