import JobCard from "./JobCard"
import React from 'react'

const JobList = ({jobs}) => {
  return (
    <div>
      {
        jobs.map((job,index)=>(
      <JobCard 
       key={index}
          position={job.position}
          company={job.company}
          status={job.status}
          date={job.date}/>
        ))}
    </div>
  )
}

export default JobList;
 