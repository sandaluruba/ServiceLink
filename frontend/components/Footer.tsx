export default function Footer() {
    return (
        <footer className="border border-[#c9cfd6] bg-[#dcd9db]">

            <div className="container-custom py-10 flex justify-between flex-wrap gap-5 items-center">

                <div>
                    <h3 className="font-bold">ServiceLink</h3>
                    <p className="text-gray-600 mt-3 max-w-sm">The premier marketplace connecting homeowners with certified trade professionals.</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-600">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact Support</a>
                </div>

                <div>
                    <p className="text-gray-600 text-sm">&copy; 2026 ServiceLink. All rights reserved.</p>
                </div>

            </div>

        </footer>
    )

}