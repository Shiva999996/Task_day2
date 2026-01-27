import React from 'react'

const JobCard = ({position,company,status,date}) => {
  return (
    <div className="job-card">
      <h3>{position}</h3>
      <p><strong>company:</strong>{company}</p>
      <p><strong>status:</strong>{status}</p>
      
      <span className="status status-applied">{date}</span>
    </div>
  )
}

export default JobCard;
