# Kasir POS - Fullstack Modern Point of Sale System

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)

A comprehensive, enterprise-grade Point of Sale (POS) and retail management fullstack application built with **NestJS**, **Next.js**, and **Prisma ORM**. Designed for retail stores, minimarkets, and F&B businesses/cafes.

---

## 🌟 Key Features

### 🛒 Point of Sale & Cashier
- Fast checkout workflow with real-time total, tax, and discount calculation.
- Barcode scanning support (`react-barcode`).
- Cashier shift management (Opening cash, closing cash, shift handovers).
- Flexible payment methods (Cash, QRIS/E-Wallet, Transfer).
- Automated receipt & invoice generation (PDF format via PDFKit).

### 📦 Inventory & Stock Management
- Real-time product inventory tracking and low-stock alerts.
- Stock movement logs (In, Out, Adjustments).
- Ingredient / Recipe tracking for F&B businesses.
- Supplier and Purchase Order (PO) management.

### 🏢 Store & Operational Management
- Multi-store / outlet support.
- Table management for restaurants and cafes.
- Employee attendance tracking and shift scheduling.
- Real-time internal notifications and communication.
- Comprehensive audit logs for tracking sensitive activities.

### 📊 Analytics & Reporting
- Visual sales dashboard with revenue, profit, and top-selling product metrics.
- Expense tracking and financial health overview.
- Data export to Excel (`exceljs`/`xlsx`) and PDF formats.

---

## 🏗️ Architecture & Tech Stack

```text
kasir/
├── kasir-app/   # Backend API (NestJS + Prisma ORM)
├── kasir-web/   # Frontend Web App (Next.js + Tailwind CSS)
└── README.md
```

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | Next.js, React, Tailwind CSS, Lucide Icons, React Hook Form, Zod, Axios, Sonner |
| **Backend** | NestJS, TypeScript, Passport.js (JWT), Class Validator, Swagger (OpenAPI) |
| **Database & ORM** | MySQL / PostgreSQL with Prisma ORM |
| **Utilities** | PDFKit (PDF Generation), ExcelJS / XLSX (Spreadsheet Export), Cloudinary / Multer (Media Upload) |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MySQL](https://www.mysql.com/) or PostgreSQL
- npm / yarn / pnpm

---

### 1. Backend Setup (`kasir-app`)

```bash
cd kasir-app

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Run database migration & seeding
npx prisma migrate dev
npm run prisma:seed

# Start the development server
npm run start:dev
```
Backend API will run at `http://localhost:5000` (or configured port).  
Swagger API Docs available at `http://localhost:5000/api/docs`.

---

### 2. Frontend Setup (`kasir-web`)

```bash
cd kasir-web

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local

# Start the development server
npm run dev
```
Frontend will be accessible at `http://localhost:3000`.

---

## 📄 API Documentation
The backend provides interactive OpenAPI (Swagger) documentation. Once the backend server is running, visit `/api/docs` to test endpoints for authentication, transactions, products, reports, and more.

---

## 👤 Author
**Mohammad Kevin Arif Rudianto**
- GitHub: [@MohammadKevin](https://github.com/MohammadKevin)
- LinkedIn: [Mohammad Kevin](https://www.linkedin.com/in/mohammad-kevin-arif-rudianto-945733347/)

---

## 📝 License
This project is licensed under the [MIT License](LICENSE).
