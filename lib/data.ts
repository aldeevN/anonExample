import hiraganaImg from "@/public/hiragana.png";
import rockpaperscissorsImg from "@/public/rockpaperscissors.png";

export const links = [
  {
    name: "Главная",
    hash: "#home",
  },
  {
    name: "Обо мне",
    hash: "#about",
  },
  {
    name: "Скиллы",
    hash: "#skills",
  },
  {
    name: "Контакты",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Hiragan-quiz",
    description:
      "The user is presented with a randomly generated hiragana character, and must write it with english letter.",
    tags: ["React", "Tailwind", "Vite"],
    imageUrl: hiraganaImg,
  }, {
    title: "RockPaperScissorsGame",
    description:
      "RockPaperScissorsGame is a fun and engaging JavaScript project that allows users to play the classic hand game against the computer.",
    tags: ["JS", "CSS", "HTML"],
    imageUrl: rockpaperscissorsImg,
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "ES6+",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Redux",
  "Git",
  "Gitlab",
  "Docker",
  "Jira",
  "Figma",
  "npm",
  "API",
] as const;
