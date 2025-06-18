import React, { useState } from "react";

function Template1() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [summary, setSummary] = useState("");

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const [certifications, setCertifications] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const [hobbies, setHobbies] = useState([]);

  return (
    <div>
      <div className="personalDetails">
        <span>{name}</span>
      </div>
      <div className="summary"></div>
      <div className="workExperience"></div>
      <div className="projects"></div>
      <div className="education"></div>
      <div className="skills"></div>
      <div className="certifications"></div>
      <div className="hobbies"></div>
    </div>
  );
}

export default Template1;
