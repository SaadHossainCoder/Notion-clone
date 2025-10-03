This is a real-time, collaborative note-taking application inspired by Notion, built with the latest web technologies.

## ✨ Features

- **Real-time Database**: Powered by Convex for seamless, real-time data synchronization.
- **Authentication**: Secure user sign-up and login.
- **Note Management**: Create, read, update, and delete documents.
- **Responsive Design**: A fluid and intuitive interface that works on all devices.
- **Light & Dark Mode**: Switch between light and dark themes for your comfort.
- **Resizable Sidebar**: A collapsible and resizable navigation panel for a customizable workspace.

## 🚀 Tech Stack

- **Framework**: Next.js
- **Database & Backend**: Convex
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Font**: Geist

## Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Set up your Convex backend:**
    - Go to Convex and create a new project.
    - Copy the `CONVEX_DEPLOYMENT` environment variable from your project settings.
    - Create a `.env.local` file in the root of your project and add the variable:
      ```
      NEXT_PUBLIC_CONVEX_URL="<your-convex-deployment-url>"
      ```

2.  **Install dependencies and run the development server:**
    ```bash
    npm install
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
