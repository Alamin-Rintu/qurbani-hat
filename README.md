# 🐄 QurbaniHat 

### 🚀 A Modern Full-Stack Inspired Next.js Application for Qurbani Animal Booking

---

## ✨ Project Overview

**QurbaniHat ** is a beautifully crafted, responsive web application where users can explore, view, and book Qurbani animals with a seamless user experience.

> Designed with modern UI/UX principles, authentication flow, and interactive animations to simulate a real-world marketplace.

---

## 🌐 Live Demo

🔗 **Live Site:** *https://qurbani-hat-xi.vercel.app/*
📂 **Client Repo:** *https://github.com/Alamin-Rintu/qurbani-hat*

---

## 🎯 Key Highlights

* ⚡ Lightning-fast performance with **Next.js App Router**
* 🎨 Clean & modern UI with **HeroUI + Tailwind CSS**
* 🔐 Secure authentication with **Better Auth**
* 🎬 Smooth animations using **Lottie React**
* 📱 Fully responsive across all devices

---

## 🧩 Core Features

### 🏠 Home Experience

* Eye-catching Hero Section with CTA
* Featured Animals showcase
* Informative sections:

  * Qurbani Tips
  * Top Breeds

---

### 🐐 Animal Marketplace

* Browse all animals
* Sort by price 💰
* Card-based UI for better UX
* Quick navigation to details

---

### 🔍 Detailed Animal View

* Complete animal information
* Booking system with:

  * Name, Email, Phone, Address
* 🔒 Protected route (Login required)
* ✅ Success toast feedback
* 🔄 Auto form reset (No DB storage)

---

### 🔐 Authentication System

#### Login

* Email & Password authentication
* Google Social Login 🌐
* Error handling with toast
* Auto redirect after login

#### Registration

* Name, Email, Photo URL, Password
* Google Sign-In
* Redirect to login after success

---

## 👤 User Dashboard

### 🧑 My Profile

* Displays:

  * User Name
  * Email
  * Profile Image

---

### ✏️ Update Profile

* Update:

  * Name
  * Profile Image
* Integrated with Better Auth update system

---

## 🎬 Animation & UX Enhancements

* Integrated **Lottie React** animations for:

  * Loading states
  * Empty states
* Smooth transitions and interactive feel

---

## ⚙️ Additional Functionalities

* 🔔 Toast Notifications (Success & Error)
* ⏳ Loading Spinner (React Spinners)
* 🚫 Custom 404 Not Found Page
* 🧱 Component-based architecture

---

## 📊 Data Structure

Static JSON-based dataset with rich animal details:

```json
{
  "id": 1,
  "name": "Deshi Shahi Cow",
  "type": "Cow",
  "breed": "Local Deshi",
  "price": 120000,
  "weight": 280,
  "age": 3,
  "location": "Bogura",
  "description": "Healthy deshi cow suitable for Qurbani.",
  "image": "https://i.postimg.cc/example-cow1.jpg",
  "category": "Large Animal"
}
```

---

## 🛠️ Tech Stack

| Category       | Technology           |
| -------------- | -------------------- |
| Framework      | Next.js (App Router) |
| Styling        | Tailwind CSS         |
| UI Components  | HeroUI               |
| Authentication | Better Auth          |
| Animation      | Lottie React         |
| Icons          | React Icons          |
| Loader         | React Spinners       |

---

## 📁 Folder Structure

```
app/
 ├── page.jsx                # Home Page
 ├── animals/
 │    ├── page.jsx          # All Animals
 │    ├── [id]/page.jsx     # Dynamic Details Page
 ├── login/
 ├── register/
 ├── my-profile/
 ├── update-profile/
 ├── not-found.jsx

components/
data/
 ├── animals.json
```

---

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/Alamin-Rintu/qurbani-hat
cd your-repo-name
npm install
npm run dev
```

---

## 🌟 Future Improvements

* 🗄️ Database integration (MongoDB)

---

## 🙋‍♂️ About Me

**Al-amin Rintu**
💻 Frontend Developer | Next.js Enthusiast

---

## ⭐ Show Your Support

If you like this project:

* ⭐ Star the repository
* 🍴 Fork it
* 🧠 Give feedback

---

## 📜 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ using Next.js & Modern Web Technologies
</p>
