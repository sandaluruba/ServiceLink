"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import JobCard from "./JobCard";

interface JobsSectionProps {
    keyword: string;
    category: string;
}


export default function JobsSection({ keyword, category }: JobsSectionProps) {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await API.get("/jobs");
                setJobs(res.data.jobRequests);
            } catch (error) {
                console.log(error);
            }
        };
        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job: any) => {
        const matchesKeyword = keyword === "" ||
            job.title.toLowerCase().includes(keyword.toLocaleLowerCase()) ||
            job.description.toLowerCase().includes(keyword.toLocaleLowerCase());

        const matchesCategory = category === "All" ||
            job.category === category;

        return matchesKeyword && matchesCategory;

    });

    return (
        <section className="container-custom py-16">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-4xl font-bold">Job Requests</h2>
                    <p className="text-gray-500 mt-2">Showing  {filteredJobs.length} opportunities</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {filteredJobs.map((job: any) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>

        </section>
    );
}