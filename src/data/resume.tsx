import { Icons } from "@/components/icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Yadunandana",
  initials: "D Kulkarni",
  url: "https://github.com/ydkulks",
  location: "Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/bangalore",
  description:
    "Full-stack developer with a Master's degree in computer science. Dedicated to ongoing professional growth and staying at the forefront of industry developments.",
  summary:
    "I pursued a [double degree in computer science](/#education), during which I got my [first job](/#work). By having proficiency in technologies like React.js, Spring Boot, Go and more; I build modern and scalable [web applications](/#projects). I thrive on the challenge of turning creative ideas into reality, blending functionality with aesthetics.",
  avatarUrl: "/me.jpeg",
  // avatarUrl: "https://avatar.iran.liara.run/public/49",
  resume: "/YDKulkarni.pdf",
  skills: [
    "React.js",
    "Next.js",
    "TailwindCSS",
    "Typescript",
    "Node.js",
    "Go",
    "Spring Boot",
    "Java",
    "Python",
    "Postgres",
    "Docker",
    "AWS S3",
    "PHP",
    "Figma",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ydkulks2@example.com",
    tel: "+916360876383",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ydkulks",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yd-kulkarni",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ydkulks2@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Vion Consulting Pvt. Ltd.",
      href: "https://vion-consulting.com",
      badges: [],
      location: "Remote",
      title: "Implementation Engineer",
      logoUrl: "/vion_logo.png",
      start: "Nov 2022",
      end: "Nov 2024",
      description:
        "Built a demo website featuring a chat function integrated with a Ollama LLM and CNN model for brain tumor medical image classification. This project showcased advanced medical image analysis and involved skills in TensorFlow and Machine Learning (CNN).\n\n Developed custom reports and resolved data discrepancies using Jaspersoft, sharpening your data analytics abilities.\n\n Designed an IVR system on the Bright Pattern platform to reset Okta passwords, leveraging skills in Postman and IVR systems.",
    },
  ],
  education: [
    {
      school: "Jain University",
      href: "https://www.jainuniversity.ac.in",
      degree: "Masters's Degree of Computer Application (MCA) - Fullstack Development",
      logoUrl: "/jain-logo.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "The National College, Jayanagar",
      href: "https://ncjayanagar.com",
      degree: "Bachelor's Degree of Computer Application (BCA)",
      logoUrl: "/ncj-logo.jpg",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "TheDrip.",
      href: "https://the-drip.vercel.app",
      dates: "January 2025 - May 2025",
      active: true,
      description:
        "Developed a novel e-commerce platform that focus on subtle, 'low-key' anime-inspired street-wear that aims to bridge the gap between mainstream fashion and niche anime merchandise",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Framer Motion",
        "Spring Boot",
        "JWT",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://the-drip.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ydkulks/TheDrip",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ydkulks/TheDrip-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/CustomerFlow.mp4",
    },
    {
      title: "Fair Share",
      href: "https://fair-share-iota.vercel.app/",
      dates: "May 2025 - Present",
      active: true,
      description:
        "An app to fairly share the fair among the group that you hung-out with",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Framer Motion",
        "Clerk",
      ],
      links: [
        {
          type: "Website",
          href: "https://fair-share-iota.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ydkulks/FairShare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FairShare.png",
      video:
        "",
    },
    {
      title: "PantryPal",
      href: "https://magicui.design",
      dates: "March 2023 - July 2023",
      active: true,
      description:
        "Developed this Pantry Pal web app that allows users to browse recipes, view cooking instructions, and generate shopping lists based on selected recipes.",
      technologies: [
        "React.js",
        "NEDB",
        "JWT",
        "Leaflet.js",
        "Spoonacular",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://pantry-pal-seven.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ydkulks/PantryPal",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/PantryPal.png",
      video: "",
    },
    {
      title: "InfiniteHorizons",
      href: "https://infinitehorizons.vercel.app/",
      dates: "September 2024 - November 2024",
      active: true,
      description:
        "Developed a website for the company InfiniteHorizons, which is a travel booking company",
      technologies: [
        "HTML",
        "TailwindCSS",
        "Javascript",
        "DeSandro Masonry",
      ],
      links: [
        {
          type: "Website",
          href: "https://infinitehorizons.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ydkulks/infinitehorizons",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/InfiniteHorizons.mp4",
    },
  ],
  testimonial: [
    {
      author: "Punya Shree",
      authorUrl: "https://github.com/ydkulks",
      authorImg: "https://avatar.iran.liara.run/public/73",
      position: "Team Lead | Vion Consulting Pvt. Ltd.",
      socialUrl: "https://www.linkedin.com/in/punyashree-s-9a3690169",
      socialIcon: LinkedInLogoIcon,
      date: "Nov 2024",
      content: "I want to commend *Yadu* for his outstanding contributions and unwavering dedication to our team. \n\n Their experties in **PHP**, **Javascript**, **reporting tools** and **proactive problem-solving mindset** have consistently delivered exceptional results. \n\n Yadu's **commitment** and **positive attitude** make him an invaluable part of our success, and I look forward to seeing their continued growth and achievements.",
      isVerified: true,
    },
  ],
} as const;
