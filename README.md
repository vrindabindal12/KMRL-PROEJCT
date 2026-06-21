# KMRL Intelligent Document Delivery & AI RAG Platform

An enterprise-grade document intelligence and context-aware Retrieval-Augmented Generation (RAG) assistant designed for Kochi Water Metro Limited (KMRL). Built using Next.js 15 (App Router), TypeScript, MongoDB Atlas, Prisma ORM, and Google Gemini AI.

This application solves the challenge of organizing, searching, translating, and querying vast amounts of internal documents, safety procedures, and policy handbooks with high security and speed.

---

## System Architecture

The platform uses a robust 5-Layer Pipeline to process files from raw formats into secure, interactive knowledge graphs:

```
┌────────────────────────────────────────────────────────┐
│             Layer 1: Multi-Format Ingestion            │
│  (PDF Page Extraction / HTML Parser / Text Cleansing)  │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│            Layer 2: AI Semantic Analysis Engine        │
│    (Gemini 2.5 Flash / JSON Schema Validation / OOCR)  │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│           Layer 3: Semantic Chunking & Storage         │
│   (Linked Node Graphs / MongoDB Atlas / Indexing)     │
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│          Layer 4: Access Control & Permissions         │
│ (Granular Permission Matrices / Role-Based Redirection)│
└───────────────────────────┬────────────────────────────┘
                            ▼
┌────────────────────────────────────────────────────────┐
│            Layer 5: Multi-Turn RAG Chat System         │
│  (Context Retrieval / Source Referencing / Translation) │
└────────────────────────────────────────────────────────┘
```

### 1. Ingestion & Dynamic Parsing Layer
* Parses raw text, HTML content, and complex PDFs.
* Utilizes `pdfjs-dist` to parse page-by-page. Implements a lazy-loading worker model and a dynamic fallback to Cloudinary-based PDF extraction when native canvas modules are restricted.

### 2. AI Semantic Analysis Layer
* Processes text and page images through Google Gemini 2.5 Flash.
* Extracts structured JSON metadata including: Page Ranges, Summaries, Key Points, Actionable Items (with assignees, deadlines, and impacts), Critical Flags, and cross-department interests.

### 3. Data Persistence & Indexing Layer
* Maps parsed documents into a relational linked list structure (`prevNodeId` / `nextNodeId`).
* Persists data in MongoDB Atlas via Prisma ORM with optimized text and compound indexes for high-speed keyword and category search.

### 4. Access Control & Security Layer
* Enforces role-based access (ADMIN vs MANAGER).
* Features a granular matrix permission system where managers are restricted to specific departments (e.g., Safety, Operations) or document types (e.g., Policies, Logs).
* Features an Audit Log system to log all user creation and configuration events.

### 5. Interactive RAG Chat Layer
* Provides a multi-turn chat experience allowing users to query document contents.
* Integrates AI-Powered Real-Time Translation (supporting local languages) dynamically translating UI strings and policy contents.

---

## System Workflow

The end-to-end operation of the platform is governed by the following workflow:

1. **User Authentication & Session Handshake**:
   Users authenticate through the secure login portal. The server validates credentials against MongoDB, signs a secure JWT, and stores it in an HTTP-only cookie. The session encapsulates the user's role (ADMIN/MANAGER) and their granular department permission grants.

2. **Document Upload & Pre-processing**:
   Administrators upload policy handbooks, schedules, or technical guidelines. The ingestion pipeline dynamically selects the appropriate parser based on the MIME type (PDF, HTML, TXT), extracting raw text along with page boundary markers.

3. **Multi-Modal AI Analysis**:
   The extracted text and page graphics are routed to the Gemini AI API. The engine runs semantic analysis against strict JSON schemas to identify key action items, assignees, deadlines, safety risks, and cross-department tags.

4. **Graph-Based Persistence**:
   The document is divided into sequential semantic nodes. These nodes are structured into a linked graph (using `prevNodeId` and `nextNodeId`) and written to the database along with automatically computed keyword search indexes.

5. **Permission Gated Discovery**:
   When a user accesses the dashboard, the system reads their permission matrix and queries MongoDB to retrieve only the documents and departments they are explicitly authorized to view.

6. **Contextual Retrieval & RAG Chat**:
   When querying a document, the system retrieves relevant semantic nodes from the database, feeds them as grounding context to the Gemini LLM alongside the user's query history, and streams back a response complete with inline page-level citations.

---

## Key Features

* **Secure Authentication**: JWT-based session management, cookies, and route redirection using Next.js Middleware.
* **AI-Driven Summarization**: Automated, structured summaries, key takeaways, and action items extracted from long documents.
* **Context-Aware RAG Chat**: Chat with documents to get immediate answers, complete with references back to exact pages.
* **Multilingual UI**: On-the-fly translations of both static interface elements and database contents.
* **Audit Logs & User Management**: Admins can monitor system actions, create new users, and configure granular document permission matrices.
* **Responsive Enterprise UI**: Fluid layouts built with Tailwind CSS, dynamic transitions using Framer Motion, and visual indicators via Lucide.

---

## Tech Stack

* **Frontend Framework**: Next.js 15.5 (App Router, Server Actions)
* **Language**: TypeScript (Type-Safe APIs & Components)
* **Database & ORM**: MongoDB Atlas & Prisma
* **Styling & UI**: Tailwind CSS, Framer Motion, Lucide React
* **AI Models**: Gemini 2.5 (via `@google/generative-ai` & `@google/genai`)
* **File Upload & Processing**: Cloudinary, PDF.js

---

## Installation & Local Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/vrindabindal12/KMRL-PROEJCT.git
cd kmrl-frontend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory:
```env
MONGO_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net/kmrl?retryWrites=true&w=majority"
JWT_SECRET="your_jwt_secret_key"
GEMINI_API_KEY="your_google_gemini_api_key"
LECTO_AI_API_KEY="your_translation_api_key"
```

### 3. Initialize the Database
Generate the Prisma Client and push your schemas to your MongoDB instance:
```bash
# Push schemas and build indexes
npm run db:push
```

### 4. Create an Admin User
Seed an admin account to log into the dashboard:
```bash
npm run seed:admin -- --name "Admin User" --email admin@example.com --password secret123
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) and sign in using:
* **Email:** `admin@example.com`
* **Password:** `secret123`

---

## Development Scripts

* `npm run dev` - Starts the development server using Webpack.
* `npm run build` - Compiles the application for production.
* `npm run lint` - Code linting and style validation.
* `npx prisma studio` - Graphical database viewer to inspect database collections.
