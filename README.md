<div align="center">

# StoreFlow POS Fullstack

<p>Modern Fullstack Point of Sale (POS) & Retail Management System</p>

![Status](https://img.shields.io/badge/Status-Active-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![NestJS](https://img.shields.io/badge/NestJS-blue?style=flat-square) ![Next.js](https://img.shields.io/badge/Next.js-blue?style=flat-square) ![Prisma ORM](https://img.shields.io/badge/Prisma%20ORM-blue?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-blue?style=flat-square) ![MySQL](https://img.shields.io/badge/MySQL-blue?style=flat-square)

</div>

---

## 📌 Overview
A complete, production-grade Point of Sale (POS) and inventory management system designed for retail stores, minimarkets, and cafes. Built with a robust NestJS backend API and a high-performance Next.js frontend.

---

## ✨ Key Features
- ⚡ **Real-time point of sale transactions and barcode scanner support**: Real-time point of sale transactions and barcode scanner support
- ⚡ **Comprehensive inventory tracking, stock adjustments, and supplier management**: Comprehensive inventory tracking, stock adjustments, and supplier management
- ⚡ **Cashier shift management, daily closing, and payment reconciliation**: Cashier shift management, daily closing, and payment reconciliation
- ⚡ **Multi-store / multi-outlet support with granular role-based access control (RBAC)**: Multi-store / multi-outlet support with granular role-based access control (RBAC)
- ⚡ **Interactive analytics dashboard with revenue charts and sales reporting (PDF/Excel)**: Interactive analytics dashboard with revenue charts and sales reporting (PDF/Excel)

---

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, React, Tailwind CSS, Lucide Icons, React Hook Form
- **Backend**: NestJS, TypeScript, Prisma ORM, JWT Authentication, Passport.js
- **Database**: MySQL / PostgreSQL
- **Tools**: Docker, ESLint, Prettier

---

## 📁 Project Structure
```text
kasir-pos-fullstack/
├── kasir-app/          # Backend API (NestJS, Prisma ORM)
│   ├── src/
│   │   ├── auth/       # Authentication & authorization modules
│   │   ├── products/   # Product & inventory management
│   │   ├── orders/     # POS sales & transaction processing
│   │   └── reports/    # Analytics & reporting service
│   └── prisma/         # Prisma schema and migrations
└── kasir-web/          # Frontend Web App (Next.js, Tailwind CSS)
    ├── app/            # App Router pages and layouts
    ├── components/     # Reusable UI components
    └── lib/            # API clients and utilities
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the required runtimes and tools installed on your machine:
- Node.js (v18+ recommended) / Appropriate runtime
- Git

### Installation & Local Setup
```bash
git clone https://github.com/MohammadKevin/kasir-pos-fullstack.git
cd kasir-pos-fullstack
# 1. Setup Backend
cd kasir-app
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev
# 2. Setup Frontend (in a new terminal)
cd ../kasir-web
npm install
npm run dev
```

---

## 👤 Author
**Mohammad Kevin Arif Rudianto**
- **GitHub:** [@MohammadKevin](https://github.com/MohammadKevin)
- **Portfolio:** [portfolio-mohammadkevin.vercel.app](https://portfolio-mohammadkevin.vercel.app)
- **LinkedIn:** [Mohammad Kevin](https://www.linkedin.com/in/mohammad-kevin-arif-rudianto-945733347)
- **Email:** [kvn4.200581@gmail.com](mailto:kvn4.200581@gmail.com)

---

## 📄 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

<div align="center">
⭐️ If you found this repository useful, please consider giving it a star!
</div>
