
# 🌍 Tour Website

A modern and dynamic **Tour Management System** designed to simplify travel planning and enhance user experiences. Built with **Angular**, **Prisma**, and **MongoDB Atlas**, this project delivers robust functionality with an aesthetic user interface.

---

## 🎯 Key Features

- **Browse & Explore Tours**: Discover diverse travel destinations tailored to your preferences.
- **User-Friendly Interface**: Seamlessly designed UI powered by Angular for an optimal user experience.
- **Database Integration**: Reliable data storage and management using MongoDB Atlas.
- **Real-Time Updates**: Leverage Prisma ORM for dynamic and efficient data handling.
- **Responsive Design**: Fully optimized for desktop and mobile devices.

---

## 🛠️ Tech Stack

### Frontend:
- **Angular**
- **HTML5 / CSS3**
- **TypeScript**

### Backend:
- **Node.js**
- **Prisma ORM**
- **MongoDB Atlas**

### Tools & Platforms:
- **Visual Studio Code**
- **MongoDB Atlas Cloud**
- **Postman** for API testing

---

## 📂 Project Structure

```plaintext
TourWebsite-main/
├── Backend/
│   ├── prisma/
│   ├── src/
│   ├── .env               # Database connection string
│   └── package.json       # Backend dependencies
├── Frontend/
│   ├── src/
│   ├── angular.json       # Angular project configuration
│   └── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites:
- **Node.js** (>=16.x)
- **Angular CLI** (>=14.x)
- **MongoDB Atlas Account**

---

### Backend Setup

1. **Navigate to the Backend folder**:
   ```bash
   cd TourWebsite-main/Backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure MongoDB Connection**:
   - Create a cluster in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
   - Update the `.env` file with your MongoDB connection string:
     ```env
     DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
     ```

4. **Generate Prisma Client**:
   ```bash
   npx prisma generate
   ```

5. **Migrate Database Schema**:
   ```bash
   npx prisma migrate dev --name init
   ```

6. **Run the Backend Server**:
   ```bash
   npm start
   ```

---

### Frontend Setup

1. **Navigate to the Frontend folder**:
   ```bash
   cd TourWebsite-main/Frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   ng serve
   ```

4. **Open the application in your browser**:
   ```
   http://localhost:4200
   ```

---

## 📸 Screenshots

> Add relevant screenshots of your application here (e.g., Homepage, Tour Details, API responses).

---

## 🧩 API Endpoints

### Tours API:
- **`GET /tours`**: Fetch all available tours.
- **`POST /tours`**: Create a new tour.
- **`GET /tours/:id`**: Fetch details of a specific tour.
- **`PUT /tours/:id`**: Update a tour's information.
- **`DELETE /tours/:id`**: Delete a tour.

---

## 🤝 Contributors

| Name       | GitHub Profile                          |
|------------|-----------------------------------------|
| **Sachin** | [github.com/sachin02-hub](https://github.com/sachin02-hub) |
| **Shradha**| [github.com/ShradhaShaji](https://github.com/ShradhaShaji) |
| **Sarang** | [https://github.com/sarangs1621](https://github.com/sarangs1621) |

---

## 🤝 Contributing

1. **Fork** the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add feature-name'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a **Pull Request**.

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute this project.

---

## 📬 Contact

For inquiries, please contact:

- **Email**: [sarangnsair1621@gmail.com](mailto:sarangsnair1621@gmail.com)
- **GitHub**: [Your GitHub Profile](https://github.com/sarangs1621)

---
