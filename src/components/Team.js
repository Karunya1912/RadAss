import React from "react";
import picOne from "./Images/team1.jpeg";
import picTwo from "./Images/Pic03.jpeg";
import picThree from "./Images/Pic02.jpg";
import picFour from "./Images/team4.jpeg";
import "./Team.css"; 

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    image: picOne, 
  },
  {
    name: "Jane Smith",
    position: "CTO",
    image: picTwo, 
  },
  {
    name: "Sam Wilson",
    position: "CFO",
    image: picThree,
  },
  {
    name: "Emily Davis",
    position: "COO",
    image: picFour, 
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="team-member p-0" key={index}>
            <div>
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-member-info">
              <h2>{member.name}</h2>
              <h5>{member.position}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
