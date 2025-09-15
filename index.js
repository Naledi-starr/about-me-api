const express = require('express');
const app = express();
app.use(express.json());

// Your About Me data
let about = {
  summary: "Dynamic Software Developer with expertise in programming, database management, web and mobile development, and IT project management. Skilled in leveraging AI tools and methodologies to create innovative, scalable technology solutions. Passionate about collaborative problem-solving and delivering impactful software solutions.",
  languages: ["Java", "C#", "Python", "Kotlin", "PHP", "HTML", "CSS", "JavaScript"],
  frameworks: ["ASP.NET", "Flask", "Bootstrap"],
  contact: {
    name: "Naledi Mankogele Motswiane",
    email: "nmmotswiane@gmail.com",
    phone: "0733978321",
    linkedin: "https://www.linkedin.com/in/naledi-motswiane-1234a5243/"
  }
};

// Root route with a button
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Welcome</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #6a0dad, #c084fc);
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
          }
          h1 {
            margin-bottom: 20px;
          }
          a button {
            background-color: white;
            color: #6a0dad;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s;
          }
          a button:hover {
            background-color: #c084fc;
            color: white;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Naledi's About Me API 🚀</h1>
        <a href="/about"><button>View My Profile</button></a>
      </body>
    </html>
  `);
});

// GET endpoint for About Me (JSON response)
app.get("/about", (req, res) => {
  res.json(about);
});

// POST endpoint to update About Me
app.post("/about", (req, res) => {
  about = { ...about, ...req.body };
  res.json({ message: "Profile updated successfully", about });
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
