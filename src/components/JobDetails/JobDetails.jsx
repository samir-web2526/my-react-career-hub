import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { getAppliedJob, saveAppliedJob } from "../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  console.log(job, intId);

  const handleApply = () => {
    const appliedjobs = getAppliedJob();
    const isExits = appliedjobs.find(appliedjob=>appliedjob.id ===job.id)
    if (isExits) {
        toast('Already applied')
    }
    else{
        saveAppliedJob(job);
      toast("Applied successfully done");
    }
  };
  return (
    <div className="md:mx-20 mx-5 mt-5 mb-5">
      <div className="text-center text-4xl font-bold mb-4">
        <h1>Job Details</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <h3 className="mb-3">
            <span className="font-bold">Job Description: </span>
            {job.job_description}
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">Job Responsibility: </span>
            {job.job_responsibility}
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">Educational Requirements: </span>
            <br></br>
            {job.educational_requirements}
          </h3>
          <h3 className="mb-3">
            <span className="font-bold">Experience: </span>
            {job.experiences}
          </h3>
        </div>

        <div>
          <div className="bg-base-200 rounded px-4 py-3">
            <h1 className="mb-3 font-bold text-xl">Job Details</h1>
            <hr />
            <div>
              <div className="mt-3 mb-3">
                <div className="flex gap-2 mb-2">
                  <span>
                    <img src={"/assets/media/icons/money.png"} alt="" />
                  </span>
                  <p>
                    <span className="font-bold">Salary: </span>
                    {job.salary}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span>
                    <img src={"/assets/media/icons/calendar.png"} alt="" />
                  </span>
                  <p>
                    <span className="font-bold">Job Title: </span>
                    {job.job_title}
                  </p>
                </div>
              </div>
            </div>
            <h1 className="mb-3 font-bold text-xl">Contact Information</h1>
            <hr />
            <div>
              <div className="flex gap-2 mb-3 mt-3">
                <span>
                  <img src={"/assets/media/icons/phone.png"} alt="" />
                </span>
                <p>
                  <span className="font-bold">Phone: </span>
                  {job.contact_information.phone}
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <span>
                  <img src={"/assets/media/icons/email.png"} alt="" />
                </span>
                <p>
                  <span className="font-bold">Email: </span>
                  {job.contact_information.email}
                </p>
              </div>
              <div className="flex gap-2">
                <span>
                  <img src={"/assets/media/icons/location2.png"} alt="" />
                </span>
                <p>
                  <span className="font-bold">Address: </span>
                  {job.contact_information.address}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#7E90FE] py-2 text-center mt-3 font-medium rounded">
            <button onClick={() => handleApply()}>Apply Now</button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
