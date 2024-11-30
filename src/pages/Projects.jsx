import { Link } from 'react-router-dom';

import CTA from '../components/CTA';
import { projects } from '../constants';
import { arrow } from '../assets/icons';

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>
      <div className="mt-5 flex flex-col">
        <h4 className="text-2xl font-poppins font-semibold">
          {project.name}
        </h4>
        <p className="mt-2 text-slate-500">{project.description}</p>
        <div className="mt-5 flex items-center gap-2 font-poppins">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600"
          >
            Live Link
          </Link>
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>


      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
