import razorPay from "../assets/project1.png";
import eComm from "../assets/e-commerce.png";
import dentist from "../assets/dentist.png";
import myBooks from "../assets/my-books.png";
import fitClub from "../assets/project6.png";
import studyNotion from "../assets/project4.png";

export const projectData = [
  {
    id: 1,
    title: "StudyNotion",
    image: studyNotion,
    description:
      "🎓 Student Learning Platform — A modern EdTech web application built with Vite, React.js, and Tailwind CSS, designed to offer students a seamless and engaging online learning experience. It features secure user authentication, personalized dashboards, and course management for browsing, enrolling, and accessing interactive lessons. The platform integrates Razorpay payments for smooth and secure premium course enrollment, maintains a detailed purchase history, and includes a contact support system for user feedback via email. With a fully responsive design, it ensures an optimized experience across all devices.",
    tech: "MERN and Tailwind Css",
    href1: `https://studynotion21.netlify.app/`,
    href2: `https://github.com/MukeshKumarCoder/StudyNotion_Full-Stack-App`,
  },
  {
    id: 2,
    title: "My Books",
    image: myBooks,
    description:
      "A MERN stack web application that allows users to register, log in, and manage their personal library. Users can browse books, mark their reading status (Want to Read, Reading, Read), and view their saved books. Features include JWT-based authentication with HTTP-only cookies, protected routes, and responsive UI. Deployed using Render (backend) and (frontend).",
    tech: "MERN and Tailwind Css",
    href1: `https://book-library-management-front-end.onrender.com`,
    href2: `https://github.com/MukeshKumarCoder/Book_Library_Management_App`,
  },
  {
    id: 3,
    title: "E-commerce",
    image: eComm,
    description:
      "Built a full-featured e-commerce web application using the MERN stack. The frontend consumes external product APIs and allows users to browse products, manage a cart using Redux, and perform dummy payments. Included user authentication to restrict payment access, with cart and user state persisted using localStorage. and responsive UI. Deployed using Render (backend) and (frontend).",
    tech: "MERN and Tailwind Css",
    href1: `https://my-e-commerce-frontend.onrender.com`,
    href2: `https://github.com/MukeshKumarCoder/My_E-commerce/tree/main`,
  },
  {
    id: 4,
    title: "Dentist App",
    image: dentist,
    description:
      "Developed a fully responsive dental clinic website with modern UI using React.js and CSS3. The project includes all core pages—Home, About, Dentist, Blog, and Contact Us—as showcased in the navigation bar. Designed with a focus on accessibility and user experience, the layout adapts seamlessly across devices. Deployed using Netlify.",
    tech: "React.js and CSS",
    href1: `https://dontodentistapp.netlify.app/`,
    href2: `https://github.com/MukeshKumarCoder/donto_dentist_app`,
  },
  {
    id: 5,
    title: "RazorPay Clone",
    image: razorPay,
    description:
      "Designed and implemented a feature-rich landing page for a Razorpay clone using HTML and Tailwind CSS. This online payment app emphasizes a seamless user experience and responsiveness",
    tech: "HTML Tailwind css",
    href1: `https://razorpay-clone-tailwind1.netlify.app/`,
    href2: `https://github.com/magupta1/RazorpayClone-with-Tailwind`,
  },
  {
    id: 6,
    title: "FitClub App",
    image: fitClub,
    description:
      "Crafted a sleek landing page for Fit Club using React.js and CSS3. Emphasized clean design, responsiveness, and subtle animations/images. Showcases a blend of technical proficiency and creative design.",
    tech: "React.js, css and animation",
    href1: `https://fit-club-react-project.netlify.app/`,
    href2: `https://github.com/magupta1/FitClub`,
  },
];
