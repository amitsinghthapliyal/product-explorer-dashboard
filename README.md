# Product Explorer Dashboard

A production-style frontend application built with **Next.js (App
Router)**, **TypeScript**, and **Tailwind CSS**.\
The app demonstrates clean architecture, typed API integration and a responsive, user-friendly UI.

---

## Live Demo

---

## Objective

The goal of this project is to showcase how a modern frontend
application should be structured and built using **Next.js App Router**,
with a focus on:

- Scalable component architecture\
- Server-first data fetching\
- Clean state management\
- Production-grade UX patterns\
- Maintainable and readable TypeScript code

---

## Features

### Product Listing

- Fetches products from **Fake Store API**
- Responsive grid layout
- Server-side data fetching using App Router
- Skeleton loaders for better UX

### Search & Filtering

- Client-side search by product title
- Filter by category
- Sort by price (Low → High, High → Low)

### Product Details Page

- Dynamic routing: `/products/[id]`
- Server Component with data fetching
- SEO-friendly metadata
- Loading skeleton, error boundary, and not-found handling

### Favorites

- Mark / unmark products as favorites
- Favorites persisted in `localStorage`
- Global favorites state shared across pages
- Filter products by favorites
- Favorites count shown in header

### Responsive Design

- Mobile-first layout
- Optimized for mobile, tablet, and desktop

---

## Tech Stack

- **Next.js** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Fake Store API**

---

## Project Structure

    app/
    components/
    hooks/
    lib/
    types/

---

## Setup Instructions

```bash
git clone <url>
cd product-explorer-dashboard
npm install
npm run dev
```

---

## Author

**Amit**\
Frontend Developer (Next.js, React, TypeScript)
+919634830671

---
