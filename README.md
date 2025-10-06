# template-reactnode

A modern full-stack template combining React (Vite) frontend with Node.js (Express) backend, designed for distributed deployment architectures.

## 🚀 Features

- **React + Vite** - Lightning-fast development with Hot Module Replacement
- **Express Backend** - Scalable Node.js API server
- **Concurrent Development** - Run both services with a single command
- **Distributed Ready** - Deploy frontend and backend independently
- **Modern Styling** - Themed for sentry.new with responsive design

## 📦 Project Structure

```
template-reactnode/
├── client/          # React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node.js backend (Express)
│   ├── index.js
│   └── package.json
└── package.json     # Root package with dev scripts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/codyde/template-reactnode.git
cd template-reactnode
```

2. Install all dependencies:
```bash
npm run install:all
```

### Development

Run both frontend and backend concurrently:
```bash
npm run dev
```

This will start:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`

### Individual Services

Run services separately:

```bash
# Frontend only
npm run dev:client

# Backend only
npm run dev:server
```

## 📝 Environment Variables

### Server

Create a `.env` file in the `server/` directory:

```env
PORT=3001
```

See `server/.env.example` for reference.

## 🏗️ Building for Production

Build the frontend:
```bash
npm run build
```

The built files will be in `client/dist/`.

## 🚢 Deployment

This template is designed for distributed deployment where frontend and backend are deployed separately.

### Frontend Deployment

The React app can be deployed to:
- Vercel
- Netlify
- Cloudflare Pages
- Any static hosting service

Build the frontend and deploy the `client/dist` folder.

**Important**: Update the API URLs in `client/src/App.jsx` to point to your deployed backend:

```javascript
fetch('https://your-api-domain.com/api/health')
```

### Backend Deployment

The Express server can be deployed to:
- Railway
- Render
- Heroku
- AWS/GCP/Azure
- Any Node.js hosting service

Deploy the `server/` directory with:
```bash
npm start
```

### Environment Variables for Production

Set these in your deployment platform:
- `PORT` - Server port (usually provided by platform)
- `NODE_ENV=production`

Don't forget to configure CORS in `server/index.js` to allow your frontend domain.

## 🔧 API Endpoints

### Health Check
```
GET /api/health
```
Returns server status.

### Sample Data
```
GET /api/data
```
Returns sample message with timestamp.

## 🎨 Customization

### Frontend
- Update branding in `client/src/App.jsx`
- Modify styles in `client/src/App.css`
- Change global styles in `client/src/index.css`

### Backend
- Add routes in `server/index.js`
- Configure middleware as needed
- Update CORS settings for production

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built for [sentry.new](https://sentry.new) - Modern application templates for distributed architectures.
