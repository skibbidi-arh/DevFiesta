# DevFiesta

DevFiesta is a comprehensive platform designed to automate and streamline **Project Based Learning (PBL)** and **Hackathon Management**. It provides an end-to-end solution for educational institutions and communities to host, manage, and evaluate project-centric events and academic courses seamlessly.

## 🚀 Features

### 🎓 PBL (Project Based Learning) Automation
- **Role-Based Access**: Specialized dashboards and functionalities for Hosts, Supervisors, Judges, and Students.
- **Milestone Tracking**: Manage deadlines for Proposal dates, Progress presentations, and Final presentations.
- **Team Management**: Students can form teams and be assigned dedicated supervisors for guidance.
- **Submission System**: Easy file and presentation submissions by student teams.
- **Advanced Grading System**: Multi-criteria evaluation system allowing judges to assign marks and provide detailed feedback.

### 🏆 Hackathon Management
- **Host Hackathons**: Organizers can easily create and manage hackathon events with specific rulebooks and timelines.
- **Participation**: Users can register, form teams, and participate in hackathons.
- **Evaluation**: Integrated marking and judging system for hackathon submissions.

### 💡 Project Showcase
- **Project Repository**: Users can add, view, and explore a variety of projects built by the community.
- **Profile Management**: Secure user authentication, personalized profiles, and tracking of past hackathons and PBL courses.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React.js](https://react.dev/) (Bootstrapped with [Vite](https://vitejs.dev/))
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **HTTP Client**: Axios

### Backend
- **Environment**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MySQL](https://www.mysql.com/) (using `mysql2` with connection pooling)
- **Authentication**: JSON Web Tokens (JWT) & bcrypt

## 📂 Project Structure
- `/Backend`: Contains the Node.js/Express server, API routes, controllers, and MySQL database models.
- `/Client-2 - Copy`: Contains the active React frontend application (Vite template).

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- MySQL Server running locally or remotely

### Backend Setup
1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory with your database credentials:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=your_db_username
   DB_PASS=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd "Client-2 - Copy"
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 📜 License
This project is licensed under the ISC License.
