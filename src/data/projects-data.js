import cover_gamesnake from '../assets/img/projects/cover_game-snake.jpg';
import cover_audioplayer from '../assets/img/projects/cover_audio-player.jpg';
import cover_portfolio from '../assets/img/projects/cover_portfolio-site.jpg';
import cover_plants from '../assets/img/projects/cover_plants.jpg';
import cover_icollect from '../assets/img/projects/cover_icollect.jpg';

const projectsData = [
  {
    id: "1",
    title: "Snake Game",
    description: "Classic snake game with dynamic difficulty, game counter and memorization of results with the selection of the best",
    note: "Task from stage 0 of The Rolling Scopes School",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_gamesnake,
    git: "https://github.com/elsuppo/JSFEPRESCHOOL2022Q1/tree/game-snake",
    deploy: "https://elsuppo.github.io/JSFEPRESCHOOL2022Q1/game-snake"
  },
  {
    id: "2",
    title: "Audio player",
    description: "Music player that allows you to play music tracks in turn or flip through them. Each music track has a specific cover",
    note: "Task from stage 0 of The Rolling Scopes School",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_audioplayer,
    git: "https://github.com/elsuppo/JSFEPRESCHOOL2022Q1/tree/audio-player",
    deploy: "https://elsuppo.github.io/JSFEPRESCHOOL2022Q1/audio-player"
  },
  {
    id: "3",
    title: "Photographer portfolio website",
    description: "The photographer's portfolio landing page made adaptive and interactive",
    note: "Task from stage 0 of The Rolling Scopes School",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_portfolio,
    git: "https://github.com/elsuppo/JSFEPRESCHOOL2022Q1/tree/portfolio",
    deploy: "https://elsuppo.github.io/JSFEPRESCHOOL2022Q1/portfolio"
  },
  {
    id: "4",
    title: "Plants",
    description: "Landing page for a landscaping company",
    note: "Task from stage 0 of The Rolling Scopes School",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_plants,
    git: "https://github.com/elsuppo/JSFEPRESCHOOL2022Q4/tree/main/plants",
    deploy: "https://elsuppo.github.io/JSFEPRESCHOOL2022Q4/plants/dist/"
  },
  {
    id: "5",
    title: "iCollect",
    description: "Wep Application for managing personal collections",
    note: "The coursework as part of the internship",
    skills: ["Node.js", "Express.js", "Mongo DB", "React", "Redux", "Material UI"],
    cover: cover_icollect,
    git: "https://github.com/elsuppo/iCollect",
    deploy: "https://icollect.onrender.com"
  },
];

export default projectsData;