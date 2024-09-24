# React Hono Starter

## 👋 Getting Started

This starter exists to provide a quick way to get started with a fresh and modern react project. It tries to utilize the latest and greatest tools and libraries to make your development experience as smooth as possible, while still being lightweight, easy to understand and production-ready for even larger projects.

It includes a few things to help you get started:

- React Frontend configured with Bun, Vite, TypeScript, TailwindCSS, Internationalization, Effective Data Fetching, User Tracking and much more while following a scalable folder structure
- Deno Backend powered by Hono and MongoDB as main database
- Strong Linting and Formatting Rules with the latest ESLint and Prettier configurations for both frontend and backend
- Pre-configured VSCode settings for a smooth development experience
- GitHub Actions for Continuous Integration and Continuous Deployment
- Terraform configuration for easy deployment to Azure and MongoDB

To get started simply clone this repository and follow the instructions below.

## 🚀 Quick Start

The templates uses the following services, which you either need to have signed up for or need to remove from the project. All of them have really generous free tiers, so you should be able to use them for free for most small to medium scale projects:

Infrastructure:

- [Azure](https://portal.azure.com) for cloud infrastructure like file storage, email sending, static hosting and more.
- [MongoDB](https://cloud.mongodb.com) for the main database.
- [Deno Deploy](https://deno.com/deploy) to deploy the backend.
- [Infiscial](https://infisical.com/) for managing the secrets and environment variables.

  Frontend:

- [Crowdin](https://crowdin.com/) for handling the translation files for internationalization inside the project.
- [Sentry](https://sentry.io/welcome/) for error monitoring.
- [PostHog](https://posthog.com/) for user tracking, web analytics and user feedback.

Backend:

- [BetterStack](https://betterstack.com/) for collecting the backend logs.
- API Keys for all OAuth providers you want to use.

### General Setup

Both the frontend and the backend have their own setup instructions. However they share some common setup steps. To get started you first need to initialize your Infiscial secrets and environment variables. You can read more about how to install there cli [here](https://infisical.com/docs/cli/overview). If you have installed the CLI, created the Project you need to create the environment variables for the projects. You can find the expected values in form as zod schema in the `config.ts[x]` files in the relevant directory. After this, adjust the `.infiscial.json` file in the root directory to your needs. The configured scripts take care of the rest, but make sure to name your environment slugs `dev` and `prod` for the scripts to work or adjust them accordingly.

### Frontend

The frontend is configured via bun workspaces. To get started, install all the dependencies with `bun install` from the root directory. Running `bun dev` will start the development server, which you can then visit at `http://localhost:5173`. Make sure the backend is running for the frontend to work accordingly.

### Backend

The backend is using deno under the hood, so it takes care of its dependencies by its own. Keep in mind, that the backend still has a package.json which is used to configure the custom linting rules. It should work out of the box if you installed the dependencies from the root folder. You may have to Reload VSCode for once after installing. To start the dev server, simply run `deno task dev`. The backend will be available at `http://localhost:8000`.

## 📝 Why React over Next.js for this template

## 📚 Folder Structure

### Frontend

### Backend
