# EzzMed Insight Health

A modern healthcare technology company website showcasing AI-driven healthcare management solutions for hospitals. EzzMed empowers healthcare facilities with intelligent, secure, and efficient hospital management systems.

## 🎯 About

EzzMed is a healthcare technology platform that democratizes access to cutting-edge healthcare technology, making advanced hospital management systems accessible to healthcare facilities of all sizes across India.

**Mission**: To democratize access to cutting-edge healthcare technology, making advanced hospital management systems accessible to healthcare facilities of all sizes across India.

**Vision**: To become India's leading healthcare technology platform, connecting every hospital, clinic, and patient through intelligent, secure, and efficient systems.

## ✨ Features

- **Modern Landing Page** with comprehensive sections:
  - Hero section with contact form
  - Why EzzMed
  - About Us
  - Solutions showcase
  - Technology overview
  - Impact metrics
  - Team profiles
  - Investors section
  - Contact form
  
- **Contact Form Integration** with Supabase backend
- **WhatsApp Integration** for direct communication
- **Responsive Design** optimized for all devices
- **Modern UI Components** built with shadcn/ui
- **Fast Performance** with Vite build tool

## 🚀 Tech Stack

- **Framework**: React 18.3
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **Backend**: Supabase
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** or **yarn** or **bun** package manager
- **Git**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd ezzmed-insight-health-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

   The application will be available at `http://localhost:8080`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
ezzmed-insight-health-main/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and other assets
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Impact.tsx
│   │   ├── Investors.tsx
│   │   ├── Navigation.tsx
│   │   ├── Solutions.tsx
│   │   ├── Team.tsx
│   │   ├── Technology.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── WhyEzzMed.tsx
│   ├── hooks/            # Custom React hooks
│   ├── integrations/     # Third-party integrations
│   │   └── supabase/     # Supabase client setup
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── supabase/            # Supabase configuration
│   └── functions/       # Edge functions
├── package.json
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🌐 Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add your environment variables
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add your environment variables
6. Deploy!

## 🔒 Environment Variables

Make sure to set up the following environment variables:

- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary.

## 👥 Founders

- **Aman Raj**
- **Shwetaang Shekhar**
- **Om Purushottam**

## 📞 Contact

For inquiries, please use the contact form on the website or reach out via WhatsApp.

---

Built with ❤️ by the EzzMed team
