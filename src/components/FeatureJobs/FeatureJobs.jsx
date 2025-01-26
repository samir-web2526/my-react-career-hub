import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJobs = () => {
  const [features, setFeatures] = useState([]);
  const [jobLength,setJobLength]=useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">Featured Jobs</h1>
        <p className="text-xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        {features.slice(0,jobLength).map((feature) => (
          <Job key={feature.id} feature={feature}></Job>
        ))}
      </div>
      <div className={`${jobLength===features.length?'hidden':''} text-center`}>
        <button onClick={()=>setJobLength(features.length)} className="btn bg-[#7E90FE] rounded mt-5 mb-5 font-medium">Show All Jobs</button>
      </div>
    </div>
  );
};

export default FeatureJobs;
