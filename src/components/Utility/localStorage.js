const getAppliedJob =()=>{
    const getJob = localStorage.getItem('applied-job');
    if(getJob){
        return JSON.parse(getJob);
    }
    return [];
}
const saveAppliedJob =(job)=>{
  const saveJobs = getAppliedJob();
  const exits = saveJobs.find(saveJob=>saveJob.id===job.id);
  if(!exits){
    saveJobs.push(job);
    localStorage.setItem('applied-job',JSON.stringify(saveJobs))
  }
  return saveJobs;
}
export {getAppliedJob,saveAppliedJob};