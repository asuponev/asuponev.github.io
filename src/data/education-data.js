import cert_university from '../assets/img/certificates/university.jpg'
import cert_python from '../assets/img/certificates/stepik_python.jpg';
import cert_html from '../assets/img/certificates/stepik_html-css.jpg';
import cert_js from '../assets/img/certificates/stepik_js.jpg';
import cert_rss0 from '../assets/img/certificates/rss_stage_0.jpg';

const educationData = [
  {
    id: "1",
    date: "09/2012 – 06/2017",
    company: "University",
    position: "Transport construction engineer",
    description: "Higher education at St. Petersburg State Transport University (cum laude)",
    certificate: cert_university
  },
  {
    id: "2",
    date: "04/2021 – 06/2021",
    company: "Stepik.org",
    position: "Junior Python Developer",
    description: "Course «Programming on Python»",
    certificate: cert_python
  },
  {
    id: "3",
    date: "12/2021 – 02/2022",
    company: "Stepik.org",
    position: "Junior Front-End Developer",
    description: "Course «Web dev for beginner: HTML & CSS»",
    certificate: cert_html
  },
  {
    id: "4",
    date: "12/2021 – 02/2022",
    company: "Stepik.org",
    position: "Junior Front-End Developer",
    description: "Course «JavaScript for beginner»",
    certificate: cert_js
  },
  {
    id: "5",
    date: "12/2021 – 03/2022",
    company: "RS School",
    position: "Junior Software Engineer",
    description: "Stage 0 of the course «JavaScript/Front-end»",
    certificate: cert_rss0
  },
  {
    id: "6",
    date: "10/2022 – current",
    company: "Udemy",
    position: "Front-End Developer",
    description: "Full course on JavaScript + React (by Ivan Petrichenko)",
    certificate: "none"
  },
  {
    id: "7",
    date: "03/2023 – current",
    company: "RS School",
    position: "Junior Software Engineer",
    description: "Stage 1 of the course «JavaScript/Front-end»",
    certificate: "none"
  },
];

export default educationData;