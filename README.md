# Hariri Wear - MERN Stack E-commerce

Hariri Wear is a modern e-commerce platform for fashion enthusiasts, built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides a seamless shopping experience with a stylish UI and robust backend.

### Features
- User Authentication (Register, Login, JWT-based authentication)
- Product Management (CRUD operations for products)
- Shopping Cart (Add, remove, and update items in cart)
- Checkout & Payment (Integrated payment gateway)
- Order Management (Track orders & manage shipping)
- Admin Dashboard (Manage products, users, and orders)

### Tech Stack
- Frontend: React.js, Redux, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT (JSON Web Token)
- Payment Gateway: Stripe or PayPal
- Deployment: Vercel (Frontend), Render/Heroku (Backend)

### Installation
#### 1. Clone the repository
```bash
git clone https://github.com/yourusername/hariri-wear.git
cd hariri-wear
```

#### 2. Install dependencies
##### Backend
```bash
cd backend
npm install
```
##### Frontend
```bash
cd ../frontend
npm install
```

#### 3. Configure Environment Variables
Create a `.env` file in the **backend** directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
FRONTEND_URL=http://localhost:3000
```

#### 4. Run the application
##### Backend
```bash
cd backend
npm run dev
```
##### Frontend
```bash
cd frontend
npm start
```

### API Endpoints
- User Routes: `/api/users`
- Product Routes: `/api/products`
- Order Routes: `/api/orders`
- Auth Routes: `/api/auth`

### Deployment
1. Deploy backend on Render/Heroku
2. Deploy frontend on Vercel/Netlify

### Contributing
Pull requests are welcome! Feel free to open an issue if you find bugs or need improvements.

### License
MIT License

---
Made with ❤️ for African fashion - Hariri Wear


