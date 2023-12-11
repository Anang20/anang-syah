import { Menus, Projects } from "@/lib/types";
import { SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

export const menuItem: Menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Projects",
    href: "/",
  },
  {
    title: "Skills",
    href: "/",
  },
  {
    title: "Qualification",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

const iconSize = 'h-6 w-6'

export const ProjectItems: Projects = [
  {
    title: "NFT Marketplace",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cupiditate eligendi, nulla illo inventore repellat eos quae! Alias, est ex placeat aliquid pariatur velit dignissimos quaerat similique, numquam soluta sapiente!",
    image: "/images/project1.png",
    techStack: [
      {
        name: 'Next JS',
        icon: <SiNextdotjs className={`${iconSize}`} />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className={`${iconSize}`}/>
      }
    ],
    url: "https://nft-marketplace-anang20.vercel.app/",
    repoUrl: "https://github.com/Anang20/nft-marketplace",
    showRepo: true,
  },
  {
    title: "Hansrizi",
    description: "Hansrizi is my freelance project, which is a website designed to market the commodities owned by my client.",
    image: "/images/project2fulll.png",
    techStack: [
      {
        name: 'HTML',
        icon: <SiHtml5 className={`${iconSize}`} />,
      },
      {
        name: 'CSS',
        icon: <SiCss3 className={`${iconSize}`} />,
      },
      {
        name: 'Javascript',
        icon: <SiJavascript className={`${iconSize}`} />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className={`${iconSize}`}/>
      }
    ],
    url: "https://hansrizi.netlify.app/",
    repoUrl: null,
    showRepo: false,
  },
  {
    title: "Monggo Mangan",
    description: "Monggo Mangan is a website designed to display menus along with prices available at restaurants and provide restaurant information.",
    image: "/images/monggo-mangan.png",
    techStack: [
      {
        name: 'HTML',
        icon: <SiHtml5 className={`${iconSize}`} />,
      },
      {
        name: 'CSS',
        icon: <SiCss3 className={`${iconSize}`} />,
      },
      {
        name: 'Javascript',
        icon: <SiJavascript className={`${iconSize}`} />,
      },
    ],
    url: "https://anang20.github.io/MonggoMangan_restaurant/",
    repoUrl: "https://github.com/Anang20/MonggoMangan_restaurant",
    showRepo: true,
  },
  {
    title: "Project 1",
    description: "testtttt kuyyy",
    image: "/images/nft-marketplace.png",
    techStack: [
      {
        name: 'Next JS',
        icon: <SiNextdotjs className={`${iconSize}`} />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className={`${iconSize}`}/>
      }
    ],
    url: "https://nft-marketplace-anang20.vercel.app/",
    repoUrl: null,
    showRepo: false,
  },
  {
    title: "Project 1",
    description: "testtttt kuyyy",
    image: "/images/nft-marketplace.png",
    techStack: [
      {
        name: 'Next JS',
        icon: <SiNextdotjs className={`${iconSize}`} />,
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className={`${iconSize}`}/>
      }
    ],
    url: "https://nft-marketplace-anang20.vercel.app/",
    repoUrl: null,
    showRepo: false,
  },
];
