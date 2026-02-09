# Asim Portfolio (Next.js)

This repository now runs as a **Next.js portfolio website** with one-page sections:

- Hero
- About
- Experience
- Projects
- Skills
- Education
- Contact

## Tech Stack

- Next.js (App Router)
- React
- Bootstrap + Bootstrap Icons
- Custom CSS animations (scroll reveal, progress bar, counters)
- API Route for contact form submission

## Project Structure

- `app/layout.js` - global layout and metadata
- `app/page.js` - homepage entry
- `app/globals.css` - global styling/theme
- `components/PortfolioPage.jsx` - full one-page portfolio UI
- `data/portfolio.js` - all portfolio content data
- `app/api/contact/route.js` - contact form API endpoint
- `data/contact-submissions.json` - saved form submissions (local)
- `public/images/profile-image.jpg` - profile image

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

`http://localhost:3000`

## Contact Form Data

Submitted contact form entries are saved to:

- `data/contact-submissions.json`

## Production Build

```bash
npm run build
npm run start
```

## Notes

- Existing Django files are still present as legacy source, but the active website is now the Next.js app.
- If you want, I can remove the old Django codebase in a follow-up cleanup step.
