import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../Utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [jobsApplied, setJobsApplied] = useState([]);
  const [filterJob, setFilterJob] = useState([]);

  const handleFilter =(filter)=>{
    if(filter==='all'){
      setFilterJob(jobsApplied);
    }
    else if(filter==='remote'){
      const remoteJob = jobsApplied.filter(job=>job.remote_or_onsite==='Remote');
      setFilterJob(remoteJob)
    }
    else if(filter === 'onsite'){
      const onsiteJob = jobsApplied.filter(job=>job.remote_or_onsite==='Onsite');
      setFilterJob(onsiteJob)
    }
  }

  useEffect(() => {
    const jobAppliedIds = getAppliedJob();
    if (jobs.length > 0) {
      const targetJob = [];
      for (const id of jobAppliedIds) {
        const job = jobAppliedIds.find((jobId) => jobId === id);
        targetJob.push(job);
      }
      setJobsApplied(targetJob);
      setFilterJob(targetJob);
    }
  }, [jobs]);
  return (
    <div>
      <div className="text-center mt-5 mb-5">
      <h1 className="text-4xl font-bold mb-3">Applied Jobs:{jobsApplied.length}</h1>
      <details className="dropdown">
        <summary className="btn m-1 bg-[#7E90FE]">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a  onClick={()=>handleFilter('all')}>All</a>
          </li>
          <li>
            <a onClick={()=>handleFilter('remote')}>Romote</a>
          </li>
          <li onClick={()=>handleFilter('onsite')}>
            <a>Onsite</a>
          </li>
         
        </ul>
      </details>
      </div>

      <div className="md:mx-20 mx-5">
        {filterJob.map((job) => (
          <AppliedJob key={job.id} job={job}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
