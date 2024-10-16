# Frontend Hire

Frontend Hire is an open-source platform dedicated to frontend development resources, including courses, questions, and system design materials.

## Project Structure

```
FRONTEND-HIRE
├── public
├── src
│   ├── components
│   ├── constants
│   ├── content
│   │   ├── authors
│   │   ├── courses
│   │   ├── questions
│   │   └── system-design
│   ├── layouts
│   ├── pages
│   │   ├── authors
│   │   ├── courses
│   │   ├── questions
│   │   └── system-design
│   ├── schema
│   ├── scripts
│   ├── styles
│   ├── types
│   └── utils
├── config.ts
└── env.d.ts
```

### Key Directories and Files

- `public/`: Static assets that are served directly.
- `src/`: Source code of the application.
  - `components/`: Reusable UI components.
  - `constants/`: Constant values used throughout the application.
  - `content/`: Structured content for the platform.
    - `authors/`: Information about content creators and contributors.
    - `courses/`: Course materials and structures.
    - `questions/`: Coding questions and challenges.
    - `system-design/`: System design material.
  - `layouts/`: Page layout components.
  - `pages/`: Main page components, mirroring the content structure.
  - `schema/`: Data schemas for content validation.
  - `scripts/`: Utility scripts for development or build processes.
  - `styles/`: Global styles and CSS modules.
  - `types/`: TypeScript type definitions.
  - `utils/`: Utility functions used across the application.

## Technology Stack

- [Astro](https://astro.build/)
- [TypeScript](https://docs.astro.build/en/guides/typescript/)
- [ShadCN](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Netlify](https://www.netlify.com/)
- [Prettier](https://prettier.io/)
- [pnpm](https://pnpm.io/)
- [ESLint](https://eslint.org/)

## Getting Started

1. Fork the repo.
2. Clone the repo.
3. Run `pnpm install` to install dependencies.
4. Run `pnpm run dev` to start the development server.

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to submit content, report issues, or propose new features.

## Contact

We are best reached via [our Discord server](https://discord.gg/DWAVqksVtx).
