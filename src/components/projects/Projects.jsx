import LinkButton from '../ui/linkButton/LinkButton';
import { ExternalLink, Github } from '../Icons';
import { projectsList } from './projects';
import style from './projects.module.css';
import ProjectImage from './ProjectImage';

function Projects() {
  return (
    <section id="projects" className={style.projects}>
      <h2>Projects</h2>

      <div className={style.container}>
        {projectsList.map(({ img, title, stacks, description, links }) => {
          return (
            <div key={title} className={style.card}>
              {/* image  */}
              <div className={style.image}>{img ? <img src={img} alt="" /> : <ProjectImage />}</div>

              <div className={style.content}>
                <h3>{title}</h3>

                {/* stacks used */}
                <div className={style.stacksContainer}>
                  {stacks.map((stack) => (
                    <div key={stack} className={style.stack}>
                      {stack}
                    </div>
                  ))}
                </div>
                <p className={style.description}>{description}</p>
                {/* links */}
                <div className={style.links}>
                  <LinkButton href={links.source} variant="secondary">
                    <Github />
                    Source
                  </LinkButton>
                  <LinkButton href={links.webUrl} variant="secondary">
                    <ExternalLink />
                    Website
                  </LinkButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
