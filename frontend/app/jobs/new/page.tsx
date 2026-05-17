"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import API from "@/services/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewJobPade() {

    const [form, setForm] = useState({
        title: "",
        description: "",
        category: "",
        location: "",
        contactName: "",
        contactEmail: ""
    });

    const [errors, setErrors] =
        useState<Record<string, string>>({});

    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!form.title.trim()) newErrors.title = "Title is requuired.";
        if (!form.description.trim()) newErrors.description = "Description is requuired.";
        if (!form.contactEmail.trim()) newErrors.contactEmail = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.contactEmail)) newErrors.contactEmail = "Enter a valid email address."
        if (!form.contactName.trim()) newErrors.contactName = "Name is requuired.";
        if (!form.location.trim()) newErrors.location = "Location is requuired.";
        if (!form.category.trim()) newErrors.category = "Category is requuired.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        try {
            await API.post("/jobs", form);
            router.push("/");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <Navbar />

            <div className="container-custom py-8 max-w-3xl">
                <h1 className="text-3xl font-bold mb-1">New Job Request</h1>
                <p className="text-gray-500 mb-8"> Provide details about your project to receive competitive bids from qualified professionals.</p>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#c9cfd6] p-8 shadow-sm space-y-6">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Job Title<span className="text-red-500"> *</span></label>
                        <input id="title" name="title" type="text" value={form.title} onChange={handleChange} placeholder="e.g. Full Kitchen Renovation or Emergency Pipe Repair"
                            className="w-full border border-[#c9cfd6] rounded-lg px-4 py-2.5 text-sm focus:outline-none
                        focus:ring-2 focus:ring-gray-300"/>
                        {errors.title && (
                            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                        )}

                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold mb-1">Categoty<span className="text-red-500"> *</span></label>
                            <select id="category" name="category" value={form.category} onChange={handleChange}
                                className="w-full border border-[#c9cfd6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 bg-white"
                            >
                                <option value="">Select a category</option>
                                <option value="Plumbing">Plumbing</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Painting">Painting</option>
                                <option value="Joinery">Joinery</option>
                            </select>
                            {errors.category && (
                                <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-1">Location<span className="text-red-500"> *</span></label>
                            <input id="location" name="location" type="text" value={form.location} onChange={handleChange} placeholder="City"
                                className="w-full border border-[#c9cfd6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                            {errors.location && (
                                <p className="text-red-500 text-xs mt-1">{errors.location}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Project Description<span className="text-red-500"> *</span></label>
                        <textarea
                            id="description"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Please describe the work required, including any specific details or preferences..."
                            className="w-full border border-[#c9cfd6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none" />
                        {errors.description && (
                            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
                        )}
                    </div>

                    <hr className="border-[#e5e5e5]" />

                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold mb-1">Full Name<span className="text-red-500"> *</span>
                                </label>
                                <input type="text"
                                    id="contactName"
                                    name="contactName"
                                    value={form.contactName}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full border border-[#c9cfd6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300" />
                                {errors.contactName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-1">Email Address<span className="text-red-500"> *</span></label>
                                <input
                                    id="contactEmail"
                                    name="contactEmail"
                                    type="email"
                                    value={form.contactEmail}
                                    onChange={handleChange}
                                    placeholder="name@example.com"
                                    className="w-full border border-[#c9cfd6] rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                                {errors.contactEmail && (
                                    <p className="text-red-500 text-xs mt-1">{errors.contactEmail}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-5 bg-black hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-60"
                    >
                        {loading ? "Submitting..." : "Submit Request ➤"}
                    </button>

                </form>
            </div >

            <Footer />

        </main >
    )

}