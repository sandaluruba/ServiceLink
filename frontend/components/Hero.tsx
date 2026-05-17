import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[420px] text-white overflow-hidden"
            style={{
                backgroundImage: 'url(/images/section-bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-[#0B132B]/80"></div>

            <div className="container-custom relative z-10 flex flex-col justify-center h-full">
                <h1 className="text-4xl font-bold max-w-3xl leading-tight">
                    Connect with Skilled Trade Professionals
                </h1>

                <p className="mt-6 text-lg text-gray-300 max-w-xl">
                    The leading marketplace for high value service requests.
                </p>

                <div className="flex gap-4 mt-8">
                    <a href=""><button className="bg-white text-black px-8 py-3 rounded-lg font-semibold">Find a Job</button></a>
                    <a href=""><button className="border border-white px-8 py-3 rounded-lg font-semibold">How it Works</button></a>
                </div>

            </div>


        </section>
    );
}