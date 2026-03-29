🚀 Node.js + Express Docker Project
Yeh project ek simple Node.js + Express app ko Dockerize karne ke liye hai. Is README me aapko step-by-step guide milega:

Project setup
Express server banana
Dockerfile create karna
Environment variable (PORT) use karna
Docker image build karna
Docker Hub pe push karna
Container run karna
GitHub pe code push karna

**📦 1. Project Setup**
mkdir node-docker-app
cd node-docker-app
npm init -y
npm install express

**🧑‍💻 2. Simple Express Server**
index.js file create karo:

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Dockerized Node.js App 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

**📄 3. package.json me start script add karo**
"scripts": {
  "start": "node index.js"
}

**🐳 4. Dockerfile Create karo**
Project root me Dockerfile banao:
# Base image
FROM node:18
# App directory
WORKDIR /app
# Dependencies copy karo
COPY package*.json ./
# Install dependencies
RUN npm install
# Baaki code copy karo
COPY . .
# Port expose (env se aayega)
EXPOSE 3000
# App run karo
CMD ["npm", "start"]

**🌱 5. Environment Variable (PORT)**
Container run karte waqt PORT pass karenge:
-e PORT=4000

**🏗️ 6. Docker Image Build karo**
docker build -t your_dockerhub_username/node-app .
Example:
docker build -t raj123/node-app .

**🔐 7. Docker Hub Login**
docker login

**📤 8. Image Push to Docker Hub**
docker push your_dockerhub_username/node-app

**▶️ 9. Container Run karo**
docker run -d -p 4000:4000 -e PORT=4000 your_dockerhub_username/node-app

Browser me open karo:
http://localhost:4000

**🔄 10. Pull karke dusri machine pe run**
docker pull your_dockerhub_username/node-app

docker run -d -p 5000:5000 -e PORT=5000 your_dockerhub_username/node-app

**🗂️ 11. .gitignore file**
node_modules
.env
🌍 12. GitHub pe Push karo
git init
git add .
git commit -m "Initial commit - Node Docker App"
git branch -M main
git remote add origin https://github.com/your-username/node-docker-app.git
git push -u origin main
📌 Folder Structure
node-docker-app/
│── node_modules/
│── Dockerfile
│── package.json
│── package-lock.json
│── index.js
│── README.md
│── .gitignore
✅ Summary

✔ Node.js + Express app banaya
✔ Dockerfile create ki
✔ Environment variable (PORT) use kiya
✔ Docker image build ki
✔ Docker Hub pe push ki
✔ Container run kiya
✔ GitHub pe project upload kiya

💡 Tips
Production ke liye node:alpine image use kar sakte ho (lightweight)
.env file bhi use kar sakte ho with docker run --env-file
Docker Compose bhi use kar sakte ho future me
