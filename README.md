# Akoba 3D Studio Web App

This repository contains a **very basic proof-of-concept** for the Akoba 3D studio website described in the project brief. It is split into two sub‑projects:

- **`frontend/`**: a Next.js application (with the App Router) that implements the public marketing pages of the site. Pages include a hero section, services overview, process description, about page, contact form and basic legal pages. The style uses warm earth tones inspired by Baoulé patterns.
- **`backend/`**: a minimal NestJS REST API that provides placeholder endpoints for managing users and projects. It stores data in memory and does not include authentication, file uploads or chat functionality. Those features would need to be implemented in a real application.

## Usage

### Running the frontend

```
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:3000`. Navigate through the pages via the navigation bar.

### Running the backend

```
cd backend
npm install
npm run start:dev
```

The backend will start on `http://localhost:3001`. It exposes basic REST endpoints under `/users` and `/projects`. Use a tool like Postman to test them.

### Deploying to Vercel

The repository is structured as a monorepo where the Next.js app lives in `frontend/`. The included `vercel.json` configures Vercel to install, build and run from that directory and rewrites all routes to the frontend app. If you import this repo into Vercel, no extra project settings are needed—just deploy and Vercel will execute the commands defined in `vercel.json`.

## Limitations

This code is a starting point and **does not** implement many of the advanced features described in the brief, such as:

- Authenticated client and staff portals.
- File uploads, storage and downloads.
- Real‑time chat (WebSockets/SSE or third‑party integration).
- 3D model viewer integration (glTF/Three.js/Babylon.js).
- Persistent database (e.g. PostgreSQL/Supabase).

Implementing these features would require significantly more time and consideration. However, this skeleton lays the groundwork in a modular way, so you can add new modules and components as needed.