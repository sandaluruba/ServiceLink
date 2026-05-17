import Link from "next/link";

export default function Navbar() {

    return (

        <header className="bg-[#fcf8fa] border border-[#c9cfd6] mb-2">
            <div className="container-custom flex items-center justify-between py-5">
                <div className="flex items-center gap-10">
                    <Link href="/"><h1 className="text-2xl font-bold">ServiceLink</h1></Link>

                    <nav>
                        <Link href="/" className="font-medium border-b-2 border-black pb-1">Browse Jobs</Link>
                    </nav>
                </div>

                <Link href="/jobs/new"><button className="bg-black text-white px-5 py-2 rounded-lg">Post a Job</button></Link>
            </div>

        </header>

    )

}