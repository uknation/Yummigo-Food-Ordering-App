# Yummigo: A Food Delivery App

**Yummigo** is a modern, full-featured food delivery application built using the MERN stack (MongoDB, Express, React, Node.js) with integrated Stripe payment support. It delivers a seamless experience for customers, admins, and delivery personnel through a responsive frontend, robust backend, and intuitive admin panel.

---

## Features

### Customer Interface (Frontend)

* **Responsive Design**: Built with React, Yummigo ensures a fully responsive layout that adapts across desktops, tablets, and mobile devices.
* **User Authentication**: Secure login and signup using JWT (JSON Web Tokens) to protect user sessions and data.
* **Browse & Search**: Explore restaurants, view dynamic menus, and search food by category, popularity, or dietary needs.
* **Order Management**: Place and track orders in real-time with support for multiple delivery addresses.
* **Secure Payments**: Stripe integration allows users to make hassle-free, secure payments.

### Admin Panel

* **User Management**: Admins can manage user accounts, including customers and delivery staff.
* **Restaurant & Menu Management**: Add, edit, or remove food items, categories, and restaurant profiles.
* **Order Tracking**: View real-time order updates and modify order statuses (e.g., received, cooking, dispatched, delivered).
* **Analytics Dashboard**: View metrics like best-selling items, order volume, and user engagement.

### Backend (Server)

* **RESTful APIs**: Express.js powers a clean and scalable API to support all frontend and admin functionalities.
* **Database**: MongoDB stores user data, restaurant info, orders, and more in an efficient and scalable way.
* **Real-Time Functionality**: Using WebSockets to push real-time order updates to users.
* **Security**: Encrypted data transfer, protected routes, and secure Stripe-based transactions.

---

## Technology Stack

* **Frontend**: React, CSS3, Bootstrap/Material UI, Stripe.js
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Payment Gateway**: Stripe

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
```

### 2. Install Dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the `server/` folder with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 4. Run the Application

```bash
# From root folder
cd server
npm start

cd ../client
npm start
```

---

## Project Structure

```
Yummigo/
├── frontend/                  # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── utils/
│
├── backend/                  # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── middleware/
│
├── admin/                   # Admin panel (React)
│   ├── components/
│   └── pages/
│
├── .env                     # Environment variables
├── README.md
└── package.json
```

---

## Future Enhancements

* **Push Notifications**: Real-time alerts for order updates and offers.
* **Advanced Analytics**: In-depth reports for admins and restaurant owners.
* **Multi-language Support**: Localized experience for broader audience reach.

---

## Contribution Guidelines

We welcome contributions! To contribute:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes and push: `git push origin feature-name`
4. Submit a pull request.

Please follow clean code practices and comment your logic where necessary.

---

Enjoy building with **Yummigo** and feel free to open issues or reach out for suggestions and collaboration!
