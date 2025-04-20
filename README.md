#  The Digital Diner

A full-stack mini restaurant ordering system for a small restaurant. Users can browse the menu, add items to their cart, and place pickup orders — all online.

>  Live App Link: [https://resonant-llama-ab3a73.netlify.app]

>  Admin login Id: {
                  "phone": "9876543210",
                  "password": "securepassword"
                  }

  (for adding and removing menu item feature)
---

##  Tech Stack

- Frontend: React (Vite) + Zustand + Axios + Tailwind CSS
- Backend: Node.js + Express
- Databases:
  - MongoDB: For menu items (flexible structure)
  - PostgreSQL: For users and orders (relational data)
- Deploymentp:
  - Frontend: Netlify
  - Backend: [Insert backend hosting link here if deployed]

---

##  Features

-  Home page 
-  View categorized menu items
-  view item image and detais page
-  Add to cart
-  view cart summary on checkout page
-  Place orders 
-  View order confirmation 
-  order history
-  login, signup, logout with name and phone number
-  admin auth 
-  add menu item for admin
-  remove menu item for admin

---

##  MongoDB vs PostgreSQL Justification

| Data Type      | DB Used     | Reason |
|----------------|-------------|--------|
| Menu Items     | MongoDB     | Flexible schema for items with optional fields. Easy to scale and change. |
| Orders/Users   | PostgreSQL  | Structured, relational data — perfect for storing user info, order details, and querying history. |

---

##  Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/RikGorai/TheDigitalDiner.git
cd TheDigitalDiner
```

### 2. Backend Setup

```bash
cd backend
npm install
```

####  Set up `.env`:

Create a `.env` file based on `.env.example`:

```env
JWT_SECRET=
PG_DB=
PG_USER=
PG_PASSWORD=
PG_HOST=
PG_PORT=
MONGO_URI=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
ADMIN_PHONE=
```

Then run:

```bash
npm run dev
```

Backend runs on `http://localhost:PORT`

---

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Update `axios.js` or API config to match your backend URL:

```js
const API = axios.create({
  baseURL: "http://localhost:5000/api" || VITE_BACKEND_API
});
```

Then start the frontend:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`

---

##  API Endpoints

### Auth Routes(PostgreSQL)
- `POST /api/auth/signup` - signup user
- `POST /api/auth/login` - login user

### Menu Routes (MongoDB)
- `GET /api/menu` – Fetch all menu items
- `GET /api/menu/:id` – Get a specific menu item
- `POST /api/menu` – add menu item
- `DELETE /api/menu/:id` – delete a specific menu item


### Order Routes (PostgreSQL)
- `POST /api/orders` – Place a new order
- `GET /api/orders/:phone` – Get all orders by phone number



---

##  Improvements
-  Filter menu by category
-  Order confirmation message
-  View order history by phone number
-  Authentication & Admin dashboard
-  Add and remove menu items
-  Responsive mobile UI

---

##  Deployment

-  **Frontend on Netlify**: [https://resonant-llama-ab3a73.netlify.app]  - Deployed on Netlify

-  **Backend**: [https://hedigitaldinerbackend-production.up.railway.app] - Deployed on Railway

>  CORS is enabled to allow Netlify frontend to access backend.

---

##  Testing

- Tested with Postman and browser.
- Clear error messages and validations in place.
- Cart and form data are managed via Zustand for reactivity and simplicity.

---

##  Folder Structure

```
TheDigitalDiner/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── menuController.js
│   │   └── orderController.js
│   ├── models/
│   │   ├── menuModel.js         # Mongoose (MongoDB)
│   │   └── orderModel.js        # Sequelize (PostgreSQL)
│   ├── routes/
│   │   ├── menuRoutes.js
│   │   └── orderRoutes.js
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── api/
│       │   └── axios.js
│       ├── components/
│       │   └── Nav.jsx
│       ├── pages/
│       │   ├── AddMenuItem.jsx
│       │   ├── CartPage.jsx
│       │   ├── ItemDetail.jsx
│       │   ├── Login.jsx
│       │   ├── OrderConfirmation.jsx
│       │   └── Orders.jsx
│       ├── store/
│       │   └── cartStore.js      # Zustand store
│       ├── App.jsx
│       └── main.jsx
├── .gitignore
└── README.md

```

---

##  Assumptions & Challenges

### Assumptions:
- Orders are tied to phone numbers .
- Only one restaurant is supported.

### Challenges:
- Integrating two databases (MongoDB + PostgreSQL) in the same backend.
- Syncing frontend deployment with backend API routes.

---

##  License

This project is part of an internship assessment task and is for demonstration purposes.

---

##  Credits

Made with ❤️ by [Rik Gorai](https://github.com/RikGorai) as part of the Eatoes internship assignment.
