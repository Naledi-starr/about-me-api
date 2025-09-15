const express = require('express');
const app = express();
app.use(express.json());

let about = {
  summary: "Dynamic Software Developer with expertise in programming, database management, web and mobile development, and IT project management. Skilled in leveraging AI tools and methodologies to create innovative, scalable technology solutions. Passionate about collaborative problem-solving and delivering impactful software solutions.",

  languages: ["Java", "C#", "Python", "Kotlin", "PHP", "HTML", "CSS", "JavaScript"],

  frameworks: ["ASP.NET", "Flask", "Bootstrap"],

  certifications: [
    "GenAI Course for Software Engineers - WeThinkCode_",
    "Microsoft AI Skills Fluency Certificate - Microsoft"
  ],

  education: [
    {
      institution: "IIE Rosebank College",
      qualification: "Diploma In Information Technology in Software Development",
      year: "2023"
    },
    {
      institution: "WeThinkCode_",
      qualification: "Software Engineering Course (incomplete)",
      year: "2024 - 2025"
    },
    {
      institution: "Hoërskool Dr Johan Jurgens High School",
      qualification: "High School Qualification",
      year: "2019"
    }
  ],

  experience: [
    {
      role: "Planning, Front-end Developer & Presentation",
      place: "Hack Campus Life - IIE MSA Roodeport Campus",
      date: "April 2025",
      highlights: [
        "Produced a clear and effective plan for the team",
        "Improved frontend development skills",
        "Delivered a functional prototype under pressure",
        "Designed and presented a well-structured presentation"
      ]
    }
  ],

  projects: [
    {
      name: "Advice Generator",
      tech: ["REST API", "HTML", "CSS", "JavaScript"],
      description: "Dynamic responsive web app integrating Advice Slip API to deliver real-time advice quotes. Designed a mobile-first UI with accessibility features and smooth animations."
    }
  ],

  contact: {
    name: "Naledi Mankogele Motswiane",
    email: "nmmotswiane@gmail.com",
    phone: "0733978321",
    linkedin: "https://www.linkedin.com/in/naledi-motswiane-1234a5243/"
  }
};

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the About Me API . Go to /about to see my profile.");
});

// GET endpoint to fetch about me data
app.get("/about", (req, res) => {
  res.json(about);
});

// POST endpoint to update about me data
app.post("/about", (req, res) => {
  about = { ...about, ...req.body };
  res.json({ message: "Profile updated successfully", about });
});

// NEW: Purple-themed HTML page
app.get("/about-page", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>About Me</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f3e8ff;
            color: #2d006b;
            margin: 0;
            padding: 20px;
          }
          h1 {
            color: #6a0dad;
            text-align: center;
          }
          .card {
            background: white;
            border-radius: 12px;
            padding: 20px;
            margin: 20px auto;
            width: 80%;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          }
          a {
            color: #6a0dad;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <h1>About Me - ${about.contact.name}</h1>
        <div class="card">
          <h2>Summary</h2>
          <p>${about.summary}</p>
        </div>
        <div class="card">
          <h2>Languages</h2>
          <p>${about.languages.join(", ")}</p>
        </div>
        <div class="card">
          <h2>Projects</h2>
          ${about.projects.map(p => `<p><b>${p.name}</b>: ${p.description}</p>`).join("")}
        </div>
        <div class="card">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:${about.contact.email}">${about.contact.email}</a></p>
          <p>LinkedIn: <a href="${about.contact.linkedin}" target="_blank">View Profile</a></p>
        </div>
      </body>
    </html>
  `);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
