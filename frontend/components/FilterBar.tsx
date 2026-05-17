"use client";

interface FilterBarProps {
    keyword: string;
    setKeyword: (val: string) => void;
    category: string;
    setCategory: (val: string) => void;
}

export default function FilterBar({ keyword, setKeyword, category, setCategory }: FilterBarProps) {
    return (

        <section className="bg-[#f0edef] border-[#e2e8f0]">
            <div className="container-custom py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Search keywords..." value={keyword}
                    onChange={(e) =>
                        setKeyword(e.target.value)}
                    className="border border-[#c9cfd6] rounded-lg px-4 py-3 bg-white"></input>
                <div className="relative">
                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)}
                        className="w-full appearance-none border border-[#c9cfd6] rounded-lg py-3 pl-5 pr-10 bg-white">
                        <option value="All">All Categories</option>
                        <option value="Plumbing">Plumbing</option>
                        <option value="Electrical">Electrical</option>
                        <option value="Painting">Painting</option>
                        <option value="Joinery">Joinery</option>
                    </select>

                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">▼</div>
                </div>


            </div>
        </section>

    );
}