import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Job = ({ feature }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = feature;
  return (
    <div>
      <div className="card shadow-sm px-3 py-3">
        <figure>
          <img className="h-10" src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-1 mb-1">{job_title}</h2>
          <h3>{company_name}</h3>
          <div className="flex gap-5 mt-1 mb-1">
            <div className="border rounded px-4 py-1 text-blue-300 font-bold">{remote_or_onsite}</div>
            <div className="border rounded px-4 py-1 text-blue-300 font-bold">{job_type}</div>
          </div>
          <div className="flex mb-1">
            <div className="flex gap-1"><span><img src="/assets/media/icons/location2.png" alt="" /></span>{location}</div>
            <div className="flex gap-1"><span ><img src="/assets/media/icons/money.png" alt="" /></span>Salary: {salary}</div>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}><button className='btn bg-[#7E90FE]'>View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Job.propTypes={
  feature:PropTypes.object.isRequired
}
export default Job;
