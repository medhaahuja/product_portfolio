# replit.md

## Overview

This is a modern React portfolio website for Medha Ahuja, an AI-focused Product Manager. The application is built using a full-stack architecture with React frontend, Express.js backend, and is configured for deployment on Replit. The project showcases a professional portfolio with multiple sections including hero, about, projects, experience, a single LinkedIn highlights section, and contact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Database**: Drizzle ORM configured for PostgreSQL (currently using in-memory storage)
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom configuration for development and production
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: shadcn/ui component library providing accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query for server state, React hooks for local state

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for development server with hot reloading
- **Production Build**: esbuild for server bundling

### Design System
- **Color Scheme**: Dark theme with purple/pink gradient accents
- **Typography**: Inter font family
- **Components**: Comprehensive UI component library with variants
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Data Flow

### Current Implementation
- **Storage**: In-memory storage implementation with user management interface
- **API**: RESTful endpoints prefixed with `/api`
- **Client Communication**: Fetch-based API client with error handling
- **Query Management**: TanStack Query for caching and synchronization

### Database Schema
The application includes a Drizzle schema for users with PostgreSQL configuration:
- Users table with id, username, and password fields
- UUID primary keys with automatic generation
- Zod validation schemas for type safety

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives with shadcn/ui wrapper components
- **Database**: Drizzle ORM with PostgreSQL dialect, Neon Database serverless driver
- **Validation**: Zod for schema validation
- **Utility Libraries**: clsx, tailwind-merge, date-fns
- **Icons**: Lucide React icons
- **Query Management**: TanStack Query

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **CSS Processing**: Tailwind CSS, PostCSS, Autoprefixer
- **Development**: tsx for TypeScript execution
- **Replit Integration**: Vite plugins for Replit development environment

## Deployment Strategy

### Development Environment
- **Server**: Development server using tsx with hot reloading
- **Client**: Vite development server with HMR
- **Database**: In-memory storage for development, configured for PostgreSQL production

### Production Build
- **Client Build**: Vite builds React application to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist/index.js`
- **Static Serving**: Express serves built client files in production
- **Database**: Configured for PostgreSQL with Drizzle migrations

### Environment Configuration
- **Database URL**: Environment variable for PostgreSQL connection
- **Replit Integration**: Special handling for Replit development environment
- **Build Scripts**: Separate development and production configurations

### Key Features
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Performance**: Optimized images, lazy loading, and efficient bundling
- **SEO**: Meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Modern UI**: Gradient animations, smooth scrolling, and interactive elements