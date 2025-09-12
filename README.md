
# About Me API 🚀

A simple Node.js and Express-based REST API that serves information about **Naledi Mankogele Motswiane** — Software Developer, problem-solver, and tech enthusiast.

---

## 📌 Features
- **`/` (GET)** → Welcome message with instructions  
- **`/about` (GET)** → Returns a full JSON profile (summary, education, experience, projects, skills, achievements, and contact details)  
- **`/about` (POST)** → Update profile data dynamically (send JSON body with the fields you want to override)  

---

## ⚙️ Technologies Used
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository
```bash
git clone https://github.com/Naledi-starr/about-me-api.git
cd about-me-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

By default, the app runs at:

```
http://localhost:3000
```

---

## 🌐 Deployment

This project is deployed on [Render](https://render.com).
Once deployed, you can access endpoints like:

```
https://about-me-api-yn8b.onrender.com/
https://about-me-api-yn8b.onrender.com/about
```

---

## 📚 Example API Usage

### GET `/about`

```bash
curl https://about-me-api-yn8b.onrender.com/about
```

Response:

```json
{
  "summary": "Dynamic Software Developer with expertise in programming...",
  "languages": ["Java", "C#", "Python", "Kotlin", "PHP", "HTML", "CSS", "JavaScript"],
  ...
}
```

### POST `/about`

```bash
curl -X POST https://about-me-api-yn8b.onrender.com/about \
-H "Content-Type: application/json" \
-d '{"summary":"Updated profile summary here"}'
```

Response:

```json
{
  "message": "Profile updated successfully",
  "about": {
    "summary": "Updated profile summary here",
    ...
  }
}
```

---

## 📬 Contact

**Naledi Mankogele Motswiane**
📧 Email: [nmmotswiane@gmail.com](mailto:nmmotswiane@gmail.com)
📱 Phone: 0733978321
🔗 [LinkedIn](https://www.linkedin.com/in/naledi-motswiane-1234a5243/)

````
