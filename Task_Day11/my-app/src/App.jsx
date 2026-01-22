import React, { useState } from 'react'
import Header from './components/Header'
import JobCard from './components/JobCard'
import JobList from './components/JobList'
import Filters from './components/Filters'
import Footer from './components/Footer'
import "./App.css"

const App = () => {

  const[filter,setFilter]=useState("All");

  const jobs=[
    {position:"frontend developer", company:"gtasterix", status:"Applied", date:"2026-1-13"},
     {position:"backend developer", company:"aavid softs", status:"Interview", date:"2026-1-15"},
      {position:"full stack developer", company:"bitwise", status:"Offer", date:"2026-1-17"},
       {position:"aws developer", company:"thinkitive", status:"Applied", date:"2026-1-12"},
       {position:"software developer", company:"gtasterix", status:"Applied", date:"2026-1-13"},
       {position:"software Tester", company:"google", status:"Applied", date:"2026-1-13"},
       {position:"system engeenier", company:"microsoft", status:"Offer", date:"2026-1-13"},
       {position:"frontend developer", company:"tcs", status:"Interview", date:"2026-1-13"},
  ];

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.status === filter);

  return (
     <div className="app-wrapper">
      <div className="app-container">
      
      <Header title="Job Application Tracker"/>
      <Filters onFilter={setFilter}/>
      <JobList jobs={filteredJobs} />
      <Footer/>
    </div>
    </div>
  )
}

export default App
