"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        router.push("/");
    };

    return (
        <header className="bg-[#fcf8fa] border border-[#c9cfd6] mb-2">
            <div className="container-custom flex items-center justify-between py-5">
                <div className="flex items-center gap-10">
                    <Link href="/"><h1 className="text-2xl font-bold">ServiceLink</h1></Link>
                    <nav>
                        <Link href="/" className="font-medium border-b-2 border-black pb-1">Browse Jobs</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-3">
                    {isLoggedIn ? (
                        <>
                            <Link href="/jobs/new">
                                <button className="bg-black text-white px-5 py-2 rounded-lg">Post a Job</button>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="border border-[#c9cfd6] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">
                                <button className="border border-[#c9cfd6] px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">Login</button>
                            </Link>
                            <Link href="/register">
                                <button className="bg-black text-white px-5 py-2 rounded-lg">Register</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
