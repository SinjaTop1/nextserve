# NextServe Landing Page

A modern, conversion-optimized landing page for NextServe - Vienna's veterinary growth solutions provider.

## Features

- **Alex Hormozi-style copywriting** with direct, benefit-focused messaging
- **Modern, sleek design** with veterinary-themed visuals and professional layout
- **Mobile-first responsive design** optimized for all devices
- **Conversion-focused** with clear CTAs and strategic placement
- **Fast loading** with Next.js 14 and optimized assets
- **SEO optimized** for veterinary marketing in Vienna

## Design Elements

- **Colors**: Teal/green for trust and growth, warm orange for energy and action
- **Typography**: Inter font family for modern, clean readability
- **Layout**: Minimal, professional with strategic white space
- **Animations**: Subtle fade-in and slide-up effects for engagement

## Sections

1. **Hero Section** - Powerful headline with KPI dashboard mockup
2. **Problem Section** - Identifies common veterinary clinic struggles
3. **Pricing Packages** - Three tiers (Starter, Growth, Premium)
4. **Free Gifts** - Value-added tools and templates
5. **Social Proof** - Trust-building section with testimonial placeholder
6. **How It Works** - Simple 3-step process
7. **Referral Program** - Incentive banner
8. **Footer/Contact** - Complete contact information and CTAs

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Content Updates
- Edit content directly in `app/page.tsx`
- Update contact information in the footer section
- Add testimonials to the social proof section when available

### Styling
- Colors are defined in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### CTA Buttons
All "Book Free Call" buttons scroll to the contact section. To integrate with a booking system:
1. Replace `scrollToContact()` calls with your booking URL
2. Update button href attributes as needed

## SEO Optimization

The page is optimized for:
- "veterinary marketing Vienna"
- "vet clinic growth"
- "veterinary membership systems"
- "pet clinic marketing Vienna"

Meta tags are configured in `app/layout.tsx`.

## Performance

- Uses Next.js 14 for optimal performance
- Tailwind CSS for minimal bundle size
- Optimized images and fonts
- Minimal JavaScript for fast loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Private project for NextServe.
# NextServe Academy Live
