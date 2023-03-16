import cover_gamesnake from '../assets/img/projects/cover_game-snake.jpg';
import cover_audioplayer from '../assets/img/projects/cover_audio-player.jpg';
import cover_portfolio from '../assets/img/projects/cover_portfolio-site.jpg';
import cover_icollect from '../assets/img/projects/cover_icollect.jpg';

const projectsData = [
  {
    id: "1",
    title: "Snake Game",
    description: "Classic snake game with dynamic difficulty, game counter and memorization of results with the selection of the best",
    note: "Task from stage 0 of The Rolling Scopes School (2022)",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_gamesnake,
    link: "https://github.com/elsuppo/game-snake"
  },
  {
    id: "2",
    title: "Audio player",
    description: "Music player that allows you to play music tracks in turn or flip through them. Each music track has a specific background image",
    note: "Task from stage 0 of The Rolling Scopes School (2022)",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_audioplayer,
    link: "https://github.com/elsuppo/audio-player"
  },
  {
    id: "3",
    title: "Photographer portfolio website",
    description: "The photographer's portfolio landing page made adaptive and interactive",
    note: "Task from stage 0 of The Rolling Scopes School (2022)",
    skills: ["HTML", "CSS", "JavaScript"],
    cover: cover_portfolio,
    link: "https://github.com/elsuppo/photographer-portfolio-website"
  },
  {
    id: "4",
    title: "iCollect",
    description: "Wep Application for managing personal collections",
    note: "The term project as part of the internship",
    skills: ["Node.js", "Express.js", "Mongo DB", "React", "Redux", "Material UI"],
    cover: cover_icollect,
    link: "https://github.com/elsuppo/iCollect"
  },
];

export default projectsData;