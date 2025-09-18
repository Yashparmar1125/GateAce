# GateAce: AI-Powered GATE Preparation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Google Genkit](https://img.shields.io/badge/Google_Genkit-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://genkit.dev/)

## Project Overview 🚀

GateAce is an advanced, AI-powered platform designed to help students ace the GATE (Graduate Aptitude Test in Engineering) exam. It offers personalized study plans, smart practice tests, and detailed performance analytics, all wrapped in a modern and intuitive user interface.

### Key Features: ✨
- **AI-Powered Study Plans**: Generate personalized study roadmaps tailored to individual schedules, target GATE years, and learning paces using Google Genkit and Gemini 2.5 Flash.
- **Curated Resource Library**: Access thousands of Previous Year Questions (PYQs), video lectures, PDFs, and study materials compiled by GATE experts.
- **Smart Test Engine**: Practice with an adaptive test engine that adapts to your performance, providing detailed analytics and topic-wise insights.
- **Advanced Analytics**: Track progress with in-depth insights into topic accuracy, overall performance, and personalized recommendations for improvement.
- **Modern UI/UX**: A beautifully designed, responsive interface with gradient effects, animations, hover states, loading skeletons, and full dark mode support.
- **MongoDB Backend**: Robust and scalable backend API for managing users, study plans, resources, tests, and results.

## Tech Stack 🛠️

-   **Frontend**:
    -   Next.js 15.3.3 (App Router)
    -   React 18.3.1
    -   TypeScript
    -   Tailwind CSS
    -   shadcn/ui (Radix UI)
    -   `next-themes` for theme management (Dark Mode)
    -   `react-hook-form` + `zod` for form handling and validation
    -   `recharts` for data visualization
    -   `lucide-react` for icons
    -   `date-fns` for date manipulation
-   **Backend**:
    -   Next.js API Routes
    -   MongoDB Atlas (Cloud-hosted NoSQL Database)
    -   Mongoose (ODM for MongoDB)
-   **AI Integration**:
    -   Google Genkit
    -   Google Gemini 2.5 Flash

## Setup Guide ⚙️

Follow these steps to get your GateAce development environment up and running.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd GateAce
```

### 2. Install Dependencies

Install both frontend and backend dependencies.

```bash
npm install
```

### 3. Environment Variables Setup

Create a `.env.local` file in the root of your project and add the following environment variables:

```
MONGODB_URI="your_mongodb_connection_string"
GOOGLE_GENKIT_API_KEY="your_genkit_api_key"
```

-   **`MONGODB_URI`**:
    -   Obtain this from your MongoDB Atlas dashboard. Ensure your IP address is whitelisted for access.
    -   Example: `mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/gateace?retryWrites=true&w=majority`
-   **`GOOGLE_GENKIT_API_KEY`**:
    -   This is required for the AI-powered features using Google Genkit and Gemini. Refer to the Google Genkit documentation for how to obtain this key.

### 4. Run the Development Server

To start the Next.js development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### 5. Backend API Endpoints (MongoDB) 🔗

The following API endpoints are available for managing data:

-   **Users**:
    -   `GET /api/users`: Get all users
    -   `POST /api/users`: Create a new user
    -   `GET /api/users/[id]`: Get user by ID
    -   `PUT /api/users/[id]`: Update user by ID
    -   `DELETE /api/users/[id]`: Delete user by ID
-   **Study Plans**:
    -   `GET /api/study-plans`: Get all study plans
    -   `POST /api/study-plans`: Create a new study plan
    -   `GET /api/study-plans/[id]`: Get study plan by ID
    -   `PUT /api/study-plans/[id]`: Update study plan by ID
    -   `DELETE /api/study-plans/[id]`: Delete study plan by ID
-   **Resources**:
    -   `GET /api/resources`: Get all resources
    -   `POST /api/resources`: Create a new resource
    -   `GET /api/resources/[id]`: Get resource by ID
    -   `PUT /api/resources/[id]`: Update resource by ID
    -   `DELETE /api/resources/[id]`: Delete resource by ID
-   **Tests**:
    -   `GET /api/tests`: Get all tests
    -   `POST /api/tests`: Create a new test
    -   `GET /api/tests/[id]`: Get test by ID
    -   `PUT /api/tests/[id]`: Update test by ID
    -   `DELETE /api/tests/[id]`: Delete test by ID
-   **Test Results**:
    -   `GET /api/test-results`: Get all test results
    -   `POST /api/test-results`: Create a new test result
    -   `GET /api/test-results/[id]`: Get test result by ID
    -   `PUT /api/test-results/[id]`: Update test result by ID
    -   `DELETE /api/test-results/[id]`: Delete test result by ID

You can test these endpoints using tools like Postman, Insomnia, or `curl`.

## UI/UX Enhancements ✨

The application features a modern and polished UI/UX with:
-   **Responsive Design**: Optimized for various screen sizes.
-   **Animations**: Subtle fade-in, slide-up, bounce-in, float, glow, wiggle, shimmer, and parallax effects for a dynamic experience.
-   **Hover Effects**: Engaging interactive elements on cards, buttons, and links.
-   **Loading States**: Skeleton loaders for a smoother user experience during data fetching.
-   **Dark Mode**: Full support for light and dark themes with a toggle available on all pages.
-   **Consistent Color Palette**: A well-defined color system ensuring visual harmony and accessibility.

## Contribution 🤝

Feel free to fork the repository and contribute to the project. Please ensure your contributions adhere to the existing code style and conventions.

## License 📄

This project is licensed under the MIT License.