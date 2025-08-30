# Project Overview

## Overview

This is a full-stack web application built with React, Express, and PostgreSQL, featuring a modern gaming-focused frontend with RTP (Return to Player) transparency features. The application appears to be a gaming platform called "Talos168" that provides comprehensive gaming guides and transparent RTP information for Indonesian players.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 18** with TypeScript for the client-side application
- **Vite** as the build tool and development server with hot module replacement
- **TailwindCSS** for styling with a dark theme design system
- **Shadcn/ui** component library for consistent UI components using Radix UI primitives
- **React Router (Wouter)** for client-side routing
- **TanStack Query** for server state management and API interactions
- **React Hook Form** with Zod validation for form handling

### Backend Architecture
- **Express.js** server with TypeScript
- **RESTful API** design with `/api` prefix for all endpoints
- **In-memory storage** implementation with interfaces for future database integration
- **Session-based architecture** prepared for user authentication
- **Middleware-based request/response logging** for API monitoring

### UI/UX Design System
- **Dark theme** with cyan accent colors
- **3D visual effects** with mouse-interactive light beam animations
- **Responsive design** with mobile-first approach
- **Component-driven architecture** using Radix UI primitives
- **Accessibility-focused** design with proper ARIA labels and semantic HTML

### Database Schema
- **PostgreSQL** database with Drizzle ORM for type-safe database operations
- **User management** schema with username/password authentication
- **UUID-based** primary keys for all entities
- **Migration system** using Drizzle Kit for schema evolution

### Development Tools
- **TypeScript** for type safety across the entire stack
- **ESBuild** for production server bundling
- **Path aliases** for clean import statements (@/, @shared/, @assets/)
- **Hot reload** development environment with error overlays

### External Service Integrations
- **Neon Database** as the PostgreSQL hosting solution
- **Firebase Storage** for asset management (images, media files)
- **Replit hosting** environment with development tooling integration

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react** - Vite React plugin for JSX transformation and fast refresh
- **express** - Web application framework for the backend server
- **drizzle-orm** - Type-safe ORM for PostgreSQL database operations
- **@neondatabase/serverless** - Serverless PostgreSQL client for Neon database

### UI Component Libraries
- **@radix-ui/react-*** - Complete suite of accessible, unstyled UI primitives
- **@tanstack/react-query** - Powerful data synchronization for React applications
- **tailwindcss** - Utility-first CSS framework for styling
- **class-variance-authority** - Library for creating variant-based component APIs
- **lucide-react** - Beautiful and consistent icon library

### Form and Validation
- **react-hook-form** - Performant forms library with minimal re-renders
- **@hookform/resolvers** - Validation resolvers for React Hook Form
- **zod** - TypeScript-first schema validation library
- **drizzle-zod** - Zod schema generation from Drizzle table definitions

### Development and Build Tools
- **typescript** - Static type checking for JavaScript
- **vite** - Next generation frontend build tool
- **esbuild** - Fast JavaScript bundler for production builds
- **drizzle-kit** - CLI tool for database migrations and introspection
- **tsx** - TypeScript execution environment for Node.js

### Utility Libraries
- **date-fns** - Modern JavaScript date utility library
- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Utility to merge Tailwind CSS classes efficiently
- **wouter** - Minimalist routing library for React applications