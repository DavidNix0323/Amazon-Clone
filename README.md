# 🛒 Amazon Clone – Fullstack E-Commerce Experience

A modular, recruiter-grade Amazon clone built with Next.js 14, Tailwind CSS, Clerk Auth, Firebase backend, and Stripe checkout. Designed for dramatic UI, bulletproof mobile/desktop layout, and strategic component reuse.

## 🚀 Live Demo
[View on Vercel] https://amazon-clone-eight-smoky.vercel.app/


---

## 🧱 Tech Stack

| Frontend        | Backend & Auth     | Payments       | Styling & UX     |
|----------------|--------------------|----------------|------------------|
| Next.js 14 App Router | Firebase Firestore | Stripe Checkout | Tailwind CSS     |
| React Server Components | Stripe Webhooks | Responsive Layout |
| Zustand State Management | NextAuth | Modular Cart Logic | Animation Polish |

---

## 📦 Features

- 🛍️ **Product Pages** – Dynamic routing with image preview and price formatting
- 🛒 **Cart System** – Add/remove items, billing summary, and Stripe checkout
- ❤️ **Favorites** – Save products with local state and user sync
- 📦 **Order Success Page** – Confirmation logic with Firebase write
- 📱 **Mobile-First Layout** – Validated across devices with no layout traps
- ⚡ **Instant Feedback** – Loading states, skeletons, and animation polish

---

## 🧠 Architecture Highlights

- 🔁 **Modular Components** – Reusable UI blocks for cards, buttons, and modals
- 📸 **Cross-Platform Image Preview** – Base64 fallback and Clerk avatar sync
- 🧩 **Scoped State Logic** – Zustand-powered cart and favorite management
- 🔍 **Search Input** – Debounced search with echo logic
- 🧪 **Hardware Validated** – Benchmarked for animation and multitasking stress

---

## 🛠️ Setup Instructions

```bash
# Clone the repo
git clone https://github.com/DavidNix0323/Amazon-Clone.git
cd amazon_clone

# Install dependencies
npm install

# Add your environment variables
touch .env.local
# Include NEXTAUTH_URL, FIREBASE config, STRIPE keys, CLERK keys

# Run locally
npm run dev

