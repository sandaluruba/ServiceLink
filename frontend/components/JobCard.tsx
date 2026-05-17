import { Job } from "@/types/job";
import Link from "next/link";

interface Props {
  job: Job;
}

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

export default function JobCard({ job }: Props) {
  return (

    <div className="bg-white rounded-2xl border border-[#c9cfd6] p-6 shadow-sm">
      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(job.status)}`}>
        {job.status}
      </span>
      <h3 className="text-2xl font-semibold mt-5 line-clamp-1">{job.title}</h3>
      <div className="text-gray-500 flex gap-3 mt-3">
        <span>{job.category}</span>
        <span>.</span>
        <span>{job.location}</span>
      </div>
      <p className="text-gray-600 mt-4 line-clamp-2">{job.description}</p>
      <hr className="w-90% border-[#e5e5e5] mt-4" />
      <div className="flex justify-between items-center mt-6">
        <span className="text-sm font-semibold">{new Date(job.createdAt).toLocaleDateString()}</span>
        <Link href={`/jobs/${job._id}`} className="font-semibold hover:underline">
          View Details
        </Link>
      </div>
    </div>

  );
}