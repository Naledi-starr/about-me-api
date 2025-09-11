const express = require('express');
const app = express();
app.use(express.json());

let about = {
  "summary": "Dynamic Software Developer with expertise in programming, database management, web and mobile development, and IT project management. Skilled in leveraging AI tools and methodologies to create innovative, scalable technology solutions. Passionate about collaborative problem-solving and delivering impactful software solutions.",

  "languages": ["Java", "C#", "Python", "Kotlin", "PHP", "HTML", "CSS", "JavaScript"],

  "frameworks": ["ASP.NET", "Flask", "Bootstrap"],

  "certifications": [
    "GenAI Course for Software Engineers - WeThinkCode_",
    "Microsoft AI Skills Fluency Certificate - Microsoft",
    "High School Qualification - Hoërskool Dr Johan Jurgens High School"
 ],

  "education": [
    {
      "institution": "IIE Rosebank College",
      "qualification": "Diploma In Information Technology in Software Development",
      "year": "2023"
    },
    {
      "institution": "WeThinkCode_",
      "qualification": "Software Engineering Course (incomplete)",
      "year": "2024 - 2025"
    },
    {
      "institution": "Hoërskool Dr Johan Jurgens High School",
      "qualification": "High School Qualification",
      "year": "2019"
    }
  ],

  "experience": [
    {
      "role": "Planning, Front-end Developer & Presentation",
      "place": "Hack Campus Life - IIE MSA Roodeport Campus",
      "date": "April 2025",
      "highlights": [
        "Produced a clear and effective plan for the team",
        "Improved frontend development skills",
        "Delivered a functional prototype under pressure",
        "Designed and presented a well-structured presentation"
      ]
    },
    {
      "role": "Project Manager & Solution Designer",
      "place": "Vhaswa Vuwani Hackathon – Virtual",
      "date": "January 2025",
      "highlights": [
        "Led team in designing scalable IT solutions",
        "Resolved technical issues under time constraints",
        "Delivered persuasive presentations to align solutions with stakeholder needs"
      ]
    },
    {
      "role": "Primary School Literacy Facilitator",
      "place": "Rhoo Hlatswayo Art Center - Daveyton",
      "date": "May 2024 – September 2024",
      "highlights": [
        "Tailored teaching to diverse learners",
        "Gained user insights to improve IT support",
        "Supported 4 learners in enhancing their reading skills"
      ]
    },
    {
      "role": "Library Student Assistant - Volunteer",
      "place": "IIE Rosebank College - Pretoria Campus",
      "date": "March 2023 – December 2023",
      "highlights": [
        "Assisted students with IT troubleshooting",
        "Developed strong organisational skills",
        "Improved communication through student and staff collaboration"
      ]
    }
  ],

  "projects": [
    {
      "name": "Advice Generator",
      "tech": ["REST API", "HTML", "CSS", "JavaScript"],
      "description": "Dynamic responsive web app integrating Advice Slip API to deliver real-time advice quotes. Designed a mobile-first UI with accessibility features and smooth animations."
    },
    {
      "name": "Lifestyle Surveys",
      "tech": ["Python Flask", "Bootstrap", "HTML", "JavaScript", "SQLite"],
      "description": "Web app to collect and display lifestyle preferences. Designed a Burberry-inspired UI, implemented form validation, and dynamic survey results."
    }
  ],

  "technical_skills": {
    "os": ["Configuration", "Troubleshooting"],
    "programming": ["Java", "C#", "Python", "Kotlin", "PHP", "HTML", "CSS", "JavaScript", "REST API"],
    "databases": ["MySQL", "MS SQL", "Oracle", "Firebase", "SQLite"],
    "tools": ["Git", "Visual Studio", "VS Code", "IntelliJ", "Canva"],
    "frameworks": ["Agile", "Waterfall", "ASP.NET"]
  },

  "soft_skills": ["Problem-solving", "Project Management", "Strong communication", "Organisation", "Adaptable", "Goal-oriented", "Self-driven"],

  "achievements": [
    "3rd Place – IIE MSA Hack Campus Life"
  ],

  "contact": {
    "name": "Naledi Mankogele Motswiane",
    "email": "nmmotswiane@gmail.com",
    "phone": "0733978321",
    "linkedin": "https://www.linkedin.com/in/naledi-motswiane-1234a5243/"
  }
}



