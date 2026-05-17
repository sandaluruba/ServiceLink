"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import API from "@/services/api";
import { Job } from "@/types/job";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
        case "open":
            return "bg-green-100 text-green-700";
        case "in progress":
            return "bg-blue-100 text-blue-700";
        case "closed":
            return "bg-gray-200 text-gray-700";
        default:
            return "bg-yellow-100 text-yellow-700";
    }
};

export default function JobDetails() {

    const { id } = useParams();
    const router = useRouter();
    const [job, setJob] = useState<Job | null>(null);
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const fetchjob = async () => {
            try {
                const res = await API.get(`/jobs/${id}`);
                setJob(res.data.jobRequest);
                setStatus(res.data.jobRequest.status);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchjob();

    }, [id]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleStatus = async (newStatus: string) => {
        setStatus(newStatus);
        try {
            await API.patch(`/jobs/${id}`, { status: newStatus });
        } catch (error) {
            console.error(error);
        }
    };


    const deleteJob = async () => {
        if (!confirm("Are you Sure?")) return;
        try {
            await API.delete(`/jobs/${id}`);
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!job) return <p>Job not found.</p>;


    return (

        <main>
            <Navbar />

            <div className="container-custom py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-[#c9cfd6] p-8 pt-15 pb-15 shadow-sm">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div>
                                <h1 className="text-3xl font-bold">{job.title}</h1>
                            </div>
                            <span className={`text-sm font-semibold px-4 py-1.5 rounded-full ${getStatusStyle(status)}`}>● {status}</span>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-lg font-semibold mb-2">Description</h2>
                            <p>{job.description}</p>
                        </div>

                        <hr className="border-[#e5e5e5] my-6" />

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <span className="text-xl">📍</span>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide">Location</p>
                                    <p className="text-gray-500">{job.location}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl">🔧</span>
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-wide">Category</p>
                                    <p className="text-gray-500">{job.category}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-[#c9cfd6] p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm">
                                {job.contactName?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <p className="font-semibold">{job.contactName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <span>✉️</span>
                            <span>{job.contactEmail}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>📅</span>
                            <span>Posted: {new Date(job.createdAt).toLocaleDateString()}</span>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl border border-[#c9cfd6] p-6 shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Management Actions</h2>
                        <label className="text-sm text-gray-500 block mb-1">Update Status</label>
                        <select
                            value={status}
                            onChange={(e) =>
                                handleStatus(e.target.value)}
                            className="w-full border border-[#c9cfd6] rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        >
                            <option value="Open">Open</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Closed">Closed</option>
                        </select>


                        {isLoggedIn && (
                            <button
                                onClick={deleteJob}
                                className="w-full bg-[#ba1a1a] hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors"
                            >
                                🗑 Delete Job
                            </button>
                        )}
                        {isLoggedIn && (
                            <p className="text-xs text-gray-400 italic text-center mt-2">Warning: This action cannot be undone.</p>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main >

    )
}