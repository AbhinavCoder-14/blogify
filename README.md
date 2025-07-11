
# 📝 Blogify

A modern full-stack blogging platform with **user authentication**, **role-based access**, **admin controls**, **image uploads**, and a beautiful UI. Blogify is built using **Node.js**, **Express**, **MongoDB**, and **EJS**, following an MVC architecture.

---

## 🚀 Key Features

### 🔐 Authentication & Authorization
- Secure **user signup/login/logout**
- Passwords hashed using `bcryptjs`
- **Session-based authentication**
- **Role-based access**: Admin & Normal User

### 🧑‍💻 User Dashboard
- Create, edit, delete your blog posts
- View your post history and comment threads
- Manage your profile

### 🧑‍💼 Admin Dashboard
- View all users and blog posts
- Delete or manage any user's post
- Moderate inappropriate content
- Admin-only routes protected by middleware

### ✍️ Blog System
- Full **CRUD** for blog posts
- Rich-text editor or markdown support (if applicable)
- **Cover image upload** using `multer`
- Auto timestamps for posts

### 💬 Commenting System
- Users can comment on blog posts
- Each comment shows the author's username
- Comment moderation features (for admins)

### 🔍 Blog Search & Filter
- Search blogs by title or content
- Filter by newest, oldest, or popular

### 🎨 Responsive UI
- Fully mobile-responsive design
- Server-side rendered templates via **EJS**
- Styled with **Tailwind CSS** or custom CSS

---

## 🗂️ Project Structure

```
blogify/
├── db/                 # Database connection
├── middlewares/        # Auth & role-based guards
├── models/             # Mongoose schemas (User, Post, Comment)
├── public/             # CSS, JS, images
├── routes/             # Auth, post, dashboard, comment routes
├── services/           # Business logic (controllers)
├── uploads/            # Uploaded images
├── views/              # EJS templates
├── .env                # Environment config
├── index.js            # App entry point
└── package.json        # NPM scripts & dependencies
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AbhinavCoder-14/blogify.git
cd blogify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

```env
MONGO_URI=mongodb://localhost:27017/blogify
SESSION_SECRET=yourSecretHere
PORT=3000
```

### 4. Run the Server

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **EJS** (for server-side templating)
- **Tailwind CSS** / Custom CSS
- **Multer** (for image uploads)
- **Express-session** + **Connect-mongo**
- **bcryptjs**, **dotenv**, **method-override**

---

## 🔐 Roles & Access

| Feature               | User ✅ | Admin ✅ |
|----------------------|--------|----------|
| View Blogs           | ✅     | ✅       |
| Create/Edit Posts    | ✅     | ✅       |
| Delete Own Posts     | ✅     | ✅       |
| Delete Any Post      | ❌     | ✅       |
| Manage Users         | ❌     | ✅       |
| Access Admin Panel   | ❌     | ✅       |

---

## 📌 Roadmap / Future Ideas (optional)
- Rich-text blog editor (Markdown/WYSIWYG)
- Like/Dislike system
- Pagination
- Email verification or reset password
- Tag system for blogs

---

## 🤝 Contributing

Pull requests are welcome!

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Open a Pull Request

---

## 👨‍💻 Author

Made with ❤️ by [Abhinav Yadav](https://github.com/AbhinavCoder-14)

---

## 📄 License

This project is licensed under the **MIT License**.
