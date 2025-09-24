# Bookstore (React + Redux + Vite)

An interactive bookstore where users can browse, search, filter, view details, add to cart, and place orders.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Tech
- React (Vite), React Router v6, Redux Toolkit, CSS

## Getting Started
```bash
npm install
npm run dev
Scripts
dev: start Vite dev server
build: production build
preview: preview production build
test: unit tests (Vitest)
Features
Pages: Home, Books, Book Details, Cart, Checkout, Success
Search, filter, sort
Add/remove cart, quantity controls, localStorage persistence
Order placement (mock), success screen
Error boundary and async error handling
Structure
src/app, src/features, src/pages, src/components
Deployment
Deployed on Vercel (static, no backend)
