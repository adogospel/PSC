import { Navigate, createBrowserRouter } from "react-router";

import PublicLayout from "@/components/layout/PublicLayout";
import AuthLayout from "@/components/layout/AuthLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";

import HomePage from "@/pages/HomePage";
import PrayerWallPage from "@/pages/PrayerWallPage";
import PrayerDetailPage from "@/pages/PrayerDetailPage";
import PublishPrayerPage from "@/pages/PublishPrayerPage";
import IntercessorsPage from "@/pages/IntercessorsPage";
import EbooksPage from "@/pages/EbooksPage";
import SermonsPage from "@/pages/SermonsPage";
import TestimoniesPage from "@/pages/TestimoniesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import CharterPage from "@/pages/CharterPage";
import StatusPage from "@/pages/StatusPage";
import NotFoundPage from "@/pages/NotFoundPage";

import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";

import UserDashboardPage from "@/pages/dashboard/UserDashboardPage";
import IntercessionDashboardPage from "@/pages/dashboard/IntercessionDashboardPage";
import AdminDashboardPage from "@/pages/dashboard/AdminDashboardPage";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,

    children: [
      {
        path: "/",

        element: <HomePage />,
      },

      {
        path: "/prieres",

        element: <PrayerWallPage />,
      },

      {
        path: "/prieres/:slug",

        element: <PrayerDetailPage />,
      },

      {
        path: "/publier",

        element: <PublishPrayerPage />,
      },

      {
        path: "/intercesseurs",

        element: <IntercessorsPage />,
      },

      {
        path: "/ebooks",

        element: <EbooksPage />,
      },

      {
        path: "/predications",

        element: <SermonsPage />,
      },

      {
        path: "/temoignages",

        element: <TestimoniesPage />,
      },

      {
        path: "/a-propos",

        element: <AboutPage />,
      },

      {
        path: "/contact",

        element: <ContactPage />,
      },

      {
        path: "/charte",

        element: <CharterPage />,
      },

      {
        path: "/status",

        element: <StatusPage />,
      },
    ],
  },

  {
    element: <AuthLayout />,

    children: [
      {
        path: "/connexion",

        element: <LoginPage />,
      },

      {
        path: "/inscription",

        element: <RegisterPage />,
      },
    ],
  },

  {
    path: "/espace",

    element: <DashboardLayout kind="user" />,

    children: [
      {
        index: true,

        element: <Navigate to="tableau-de-bord" replace />,
      },

      {
        path: "tableau-de-bord",

        element: <UserDashboardPage />,
      },
    ],
  },

  {
    path: "/intercession",

    element: <DashboardLayout kind="intercession" />,

    children: [
      {
        index: true,

        element: <Navigate to="dashboard" replace />,
      },

      {
        path: "dashboard",

        element: <IntercessionDashboardPage />,
      },
    ],
  },

  {
    path: "/admin",

    element: <DashboardLayout kind="admin" />,

    children: [
      {
        index: true,

        element: <Navigate to="dashboard" replace />,
      },

      {
        path: "dashboard",

        element: <AdminDashboardPage />,
      },
    ],
  },

  {
    path: "*",

    element: <NotFoundPage />,
  },
]);
