STUDIO — Fullstack PDF Tools (FastAPI backend + Next.js frontend)
==================================================================

What you have here
- backend/ : FastAPI app with Dockerfile and requirements.txt (Render-ready)
- frontend/: Next.js frontend (uses your uploaded design when available)
- README describes how to deploy backend on Render and frontend on Vercel

Quick local run (backend):
- cd backend
- python3 -m venv .venv && source .venv/bin/activate
- pip install -r requirements.txt
- uvicorn main:app --reload --host 0.0.0.0 --port 8000
Note: many endpoints call system binaries (libreoffice, ghostscript, pdftoppm, img2pdf, qpdf).
Install them on your machine for full functionality (Dockerfile installs most of them).

Deploy backend to Render (recommended):
1. Create a new Web Service on Render (Docker). Connect your repo or upload this folder.
2. Render will build the Dockerfile and install system packages (LibreOffice, Ghostscript, Tesseract, Poppler).
3. Set health check to /health and enable persistent disk if needed for large files.

Deploy frontend to Vercel:
1. Create new Vercel project and point to the frontend folder in this repo (or push to separate repo).
2. Set NEXT_PUBLIC_API_URL to your backend URL from Render in Vercel Environment Variables.
3. Deploy — Vercel will host the static Next.js frontend.

Notes about avoiding cold start:
- Render's managed web services with Docker keep instances warm. Use the Standard plan with at least 1 instance to avoid cold starts.
- Alternatively, add a lightweight uptime ping to keep the service active (Render supports steady instances).

Important:
- Camelot and tabula may require additional native libraries not included in the slim image; if camelot install fails, install python3-tk and opencv via apt.
- For very large files, prefer self-hosted servers or use Redis queues + background workers for long jobs (we can add this next).
