# ALX Project 0x01 – Next.js Fundamentals

## 📌 Overview

This project is a comprehensive **Next.js web application** built to demonstrate the fundamentals of modern web development using **TypeScript**, **Tailwind CSS**, and **React**.

The application contains multiple pages that fetch and display **posts** and **users** from an external API, along with interactive **modal dialogs** that allow users to add new data on the client side.

The goal of this project is **learning**, not just completion. By building this application, you gain hands-on experience with real-world frontend development patterns and best practices.

---

## 🎯 Learning Objectives

By completing this project, you will learn how to:

* Set up a **Next.js** application with **TypeScript** and **Tailwind CSS**
* Organize a project using a clean and scalable folder structure
* Implement **page-based routing** using Next.js
* Create **reusable React components**
* Fetch and display data from an external API
* Use **getStaticProps** for static site generation
* Manage component state with **React Hooks**
* Implement **modal dialogs** for user interactions
* Apply **responsive design** using Tailwind CSS
* Enforce **type safety** using TypeScript interfaces

---

## 🧰 Technologies Used

* **Next.js** – React framework for production
* **TypeScript** – Static type checking
* **Tailwind CSS** – Utility-first CSS framework
* **React Hooks** – State and lifecycle management
* **JSONPlaceholder API** – Mock API for posts and users
* **ESLint** – Code quality and linting

---

## ⚙️ Requirements

### Technical Requirements

Ensure you have the following installed:

* **Node.js** (v16 or later)
* **npm** or **yarn**
* A code editor (VS Code recommended)

---

## 🚀 Getting Started

### 1. Create the Next.js Application

```bash
npx create-next-app@latest alx-project-0x01 --typescript
cd alx-project-0x01
```

When prompted:

* Enable **ESLint**
* Enable **Tailwind CSS**
* Use the default `/pages` directory

---

### 2. Install Dependencies (if not already installed)

```bash
npm install
```

---

### 3. Start the Development Server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🗂️ Project Structure

```text
alx-project-0x01/
├── components/
│   ├── common/           # Reusable UI components (Button, Card, Modal)
│   └── layout/           # Layout components (Header, Layout)
├── interfaces/           # TypeScript interfaces
├── pages/
│   ├── posts/
│   │   └── index.tsx     # Posts page
│   ├── users/
│   │   └── index.tsx     # Users page
│   └── index.tsx         # Home page
├── public/               # Static assets
├── styles/
│   └── globals.css       # Global Tailwind styles
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🧭 Navigation System

### Header Navigation

* A shared **Header** component provides navigation links to:

  * Home
  * Posts
  * Users
* Navigation uses Next.js `<Link>` to ensure **client-side routing** (no page reloads).

---

## 📰 Posts Functionality

### Features

* Fetches posts from:

  ```
  https://jsonplaceholder.typicode.com/posts
  ```
* Displays posts using a reusable **PostCard** component
* Allows users to add a new post via a **PostModal**
* Manages form input and modal visibility using React state

### Key Concepts

* `getStaticProps` for fetching posts at build time
* Local state for newly added posts
* Controlled form inputs
* Component-based UI design

---

## 👤 Users Functionality

### Features

* Fetches users from:

  ```
  https://jsonplaceholder.typicode.com/users
  ```
* Displays users using a **UserCard** component
* Handles nested data structures such as:

  * Address
  * Company
* Allows adding new users using a **UserModal**

### Key Concepts

* Working with complex TypeScript interfaces
* Rendering nested objects safely
* Reusable modal patterns

---

## 🧱 Reusable Components

### Common Components

Located in `components/common/`:

* **Button** – Consistent button styling
* **Card** – Shared layout for posts and users
* **Modal** – Reusable modal dialog component

These components:

* Accept typed props
* Are styled using Tailwind CSS
* Can be reused across multiple pages

---

## 🧠 State Management

* Uses **React Hooks** (`useState`)
* State is kept:

  * Local where possible
  * Lifted up when multiple components need access
* No external state management library is used (by design)

---

## 🎨 Styling with Tailwind CSS

* Utility-first approach
* Consistent spacing, colors, and typography
* Fully responsive layouts
* Global styles defined in `styles/globals.css`

---

## 🧪 Best Practices Followed

### Component Architecture

* Separation of concerns
* Reusable and composable components
* Feature-based organization

### Type Safety

* Centralized TypeScript interfaces
* Typed component props and state
* Safe handling of events and form inputs

### Code Quality

* ESLint configured
* Clean and readable code
* Descriptive variable and component names

---

## 📝 Important Notes for Learners

⚠️ **Do NOT just copy and paste code**

To get the most out of this project:

* Read each file carefully
* Type the code yourself
* Break things intentionally and fix them
* Experiment with styles, layout, and logic

👉 **Hands-on practice builds real understanding**

---

## 🧪 Data Source

This project uses **JSONPlaceholder**, a free fake API for testing:

* Posts: `/posts`
* Users: `/users`

⚠️ Data added via modals is **client-side only** and will not persist on refresh.

---

## 📄 Assessment & Submission

### Project Evaluation

* Manual code review (primary)
* Auto-check for required files

### To Receive Full Credit:

* ✅ Complete all features
* 📄 Submit all required files
* 🔗 Generate your review link
* 👥 Participate in peer reviews

⏰ **Deadline Reminder**

If the deadline passes, you **cannot generate a review link**, so submit on time.

---

## ✨ Final Words

This project is designed to prepare you for **real-world frontend development** using Next.js. Take your time, understand each part, and enjoy the process.

Happy coding 🚀
