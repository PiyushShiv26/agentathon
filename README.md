# Agentathon - MCP + Agentic AI Hackathon

![Agentathon Banner](https://img.shields.io/badge/Agentathon-2025-orange?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

The official landing page for **Agentathon**, a 30-hour hackathon focused on building cutting-edge AI solutions using **Model Context Protocol (MCP)** and **Agentic AI**.

## Event Details

- **Date:** November 8-9, 2025
- **Duration:** 30 Hours of Non-Stop Hacking
- **Location:** 13th Floor Library, PES University
- **Prize Pool:** ₹50,000
- **Teams:** 40 teams, 4 members each
- **Focus:** MCP Integration, AI Agents, Multi-Service Orchestrators

## Features

This website showcases:

### Visual Effects
- **Custom Cursor Animation** - Orange glowing cursor with particle trails
- **Glassmorphism Navbar** - Enhanced glass effect with shimmer animations
- **Scroll-Triggered Animations** - Fade-in effects for all sections
- **Text Reveal Animation** - Word-by-word reveal effects
- **Hexagonal Pattern Background** - Dynamic hex patterns
- **Orange Glow Effects** - Signature orange theme throughout

### Sections
- **Hero Section** - Eye-catching introduction with event details
- **About Agentathon** - Theme, focus, domains, and team structure
- **Key Features** - Mentorship and scoring criteria
- **Timeline** - Complete 30-hour event schedule
- **Prizes** - ₹50,000 prize pool breakdown + certifications
- **Registration** - Direct link to Google Forms registration
- **Contact** - Get in touch form and contact details
- **Footer** - Social links and organization info

## Tech Stack

- **Framework:** [Next.js 16.0](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** 
  - Tailwind CSS
  - Custom CSS animations
  - Glassmorphism effects
- **UI Components:** 
  - Radix UI primitives
  - Custom shadcn/ui components
- **Fonts:** Geist & Geist Mono from Google Fonts
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Package Manager:** pnpm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (or npm/yarn)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Seaweed-Boi/Agentathon.git
   cd Agentathon
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build Commands

```bash
# Development
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Project Structure

```
Agentathon/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles & animations
├── components/                   # React components
│   ├── cursor-glow.tsx          # Custom cursor effect
│   ├── dynamic-island-header.tsx # Glassmorphism navbar
│   ├── fade-in-section.tsx      # Scroll animation wrapper
│   ├── text-reveal.tsx          # Text reveal animation
│   ├── hero-section.tsx         # Hero/landing section
│   ├── info-section.tsx         # About section
│   ├── features-section.tsx     # Features & scoring
│   ├── timeline-section.tsx     # Event schedule
│   ├── prizes-section.tsx       # Prizes & certifications
│   ├── registration-section.tsx # Registration CTA
│   ├── contact-section.tsx      # Contact form
│   ├── footer.tsx               # Footer with socials
│   └── ui/                      # shadcn/ui components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
└── package.json                 # Dependencies & scripts
```

## Key Components

### Custom Cursor (`cursor-glow.tsx`)
- Multi-layered orange glow effect
- Smooth particle trail animation
- 60fps performance using requestAnimationFrame
- High z-index for visibility over all elements

### Glassmorphism Navbar (`dynamic-island-header.tsx`)
- Enhanced backdrop blur effect
- Gradient backgrounds with orange accents
- Scroll-triggered shadow enhancement
- Shimmer animation on hover
- Smooth navigation links

### Animation System
- **FadeInSection:** Scroll-triggered fade-in with Intersection Observer
- **TextReveal:** Word-by-word reveal with staggered delays
- Configurable delays and directions
- Re-triggers on scroll up/down

## Customization

### Colors
The primary color scheme uses orange (`#FF6600`). To change:
- Update CSS variables in `app/globals.css`
- Modify Tailwind theme in `tailwind.config.ts`

### Animations
Adjust animation timings in:
- `components/fade-in-section.tsx` - Fade duration
- `components/text-reveal.tsx` - Reveal timing
- `app/globals.css` - CSS keyframe animations

### Content
Update event details in respective component files:
- `components/hero-section.tsx` - Main event info
- `components/timeline-section.tsx` - Event schedule
- `components/prizes-section.tsx` - Prize amounts

## Registration

Registration Form: [https://forms.gle/gYVheLogyZCHaQhG7](https://forms.gle/gYVheLogyZCHaQhG7)

## Organized By

**Encode AI**  
Student Club dedicated to AI, Agents, and Model Context Protocol  
PES University

## Contact

- Email: [encodeai@pes.edu](mailto:encodeai@pes.edu)
- Registration Deadline: November 7, 2025

## License

This project is part of the Agentathon 2025 event.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Designed for the Agentathon hackathon event

---

**Ready to build the future of AI?** [Register Now](https://forms.gle/gYVheLogyZCHaQhG7) 