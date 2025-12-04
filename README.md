# JJ Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Showcases projects, skills, and experience in web development.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive across all device sizes
- **Dark Mode Support**: Automatic dark mode support using system preferences
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **Interactive Elements**: Hover effects, animated progress bars, and interactive components
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Custom SVG icons

## 📁 Project Structure

```
app-portfolio/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Navigation bar with smooth scrolling
│   │   ├── HeroSection.tsx     # Hero section with introduction
│   │   ├── AboutSection.tsx    # About section with personal info
│   │   ├── ProjectsSection.tsx # Projects showcase
│   │   ├── SkillsSection.tsx   # Skills and technologies
│   │   └── ContactSection.tsx  # Contact form and social links
│   ├── globals.css             # Global styles and Tailwind imports
│   ├── layout.tsx              # Root layout with metadata
│   └── page.tsx                # Main page component
├── public/                     # Static assets
└── package.json                # Dependencies and scripts
```

## 🏃 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Personal Information
Update the following files to customize with your information:

- `app/layout.tsx`: Update metadata, title, and description
- `app/components/HeroSection.tsx`: Change name, title, and description
- `app/components/AboutSection.tsx`: Update personal information and stats
- `app/components/ContactSection.tsx`: Update contact information and social links

### Projects
Edit `app/components/ProjectsSection.tsx` to showcase your actual projects:
- Update project titles, descriptions, and technologies
- Replace placeholder images with actual project screenshots
- Update GitHub and live demo links

### Skills
Modify `app/components/SkillsSection.tsx` to reflect your skill levels:
- Update skill names and proficiency levels
- Add or remove technologies from the tech stack
- Customize the skill categories

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information, experience stats, and key strengths
3. **Projects**: Showcase of featured projects with links to code and demos
4. **Skills**: Technical skills with progress bars and technology tags
5. **Contact**: Contact form and social media links

## 🚀 Deployment

### Vercel (Recommended)
The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
This app can also be deployed to:
- Netlify
- GitHub Pages
- AWS Amplify
- Any platform supporting Next.js

## 📝 Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 🎯 Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Static generation for fast loading
- Responsive images and lazy loading

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio. If you have suggestions or improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
