import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const AppliedJob = ({ job }) => {
  console.log(job);
  const {
    logo,
    id,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card shadow-sm py-3">
        <div className="grid  md:grid-cols-3 mx-3 items-center">
          <div className="bg-base-200 md:h-64 h-36 flex items-center px-4 md:mr-10">
            <figure>
              <img className="h-10 w-80" src={logo} alt="" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title mt-1 mb-1">{job_title}</h2>
            <h3>{company_name}</h3>
            <div className="flex gap-5 mt-1 mb-1">
              <div className="border rounded px-4 py-1 text-blue-300 font-bold">
                {remote_or_onsite}
              </div>
              <div className="border rounded px-4 py-1 text-blue-300 font-bold">
                {job_type}
              </div>
            </div>
            <div className="flex mb-1">
              <div className="flex gap-1">
                <span>
                  <img src="/assets/media/icons/Location2.png" alt="" />
                </span>
                {location}
              </div>
              <div className="flex gap-1">
                <span>
                  <img src="/assets/media/icons/money.png" alt="" />
                </span>
                Salary: {salary}
              </div>
            </div>
          </div>
          <div className="card-actions md:mr-14">
            <Link to={`/job/${id}`}>
              <button className="btn bg-[#7E90FE]">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
AppliedJob.propTypes ={
  job: PropTypes.object.isRequired
}
export default AppliedJob;
