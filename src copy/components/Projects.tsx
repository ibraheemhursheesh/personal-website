import SectionLanding from './SectionLanding'

interface ProjectData {
  projectImage: string
  projectImageAlt: string
  projectName: string
  projectDescription: string
  projectGithubRepoLink: string
  projectLiveDemoLink: string
}

const projects: ProjectData[] = [
  {
    projectImage: 'my-portfolio.png',
    projectImageAlt: 'an image of my own portfolio project',
    projectName: 'Developer Portfolio',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas exercitationem dolorem impedit distinctio in quidem numquam illo sint? Accusamus iure sit totam qui.',
    projectGithubRepoLink: '',
    projectLiveDemoLink: '',
  },
  {
    projectImage: 'english-course-landing-page.png',
    projectImageAlt: 'image of an english course landing page project',
    projectName: 'English Course Landing Page',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas exercitationem dolorem impedit distinctio in quidem numquam illo sint? Accusamus iure sit totam qui.',
    projectGithubRepoLink: '',
    projectLiveDemoLink: '',
  },
  {
    projectImage: 'fast-react-pizza.png',
    projectImageAlt: 'Fast React Pizza project image',
    projectName: 'Fast React Pizza Co.',
    projectDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas exercitationem dolorem impedit distinctio in quidem numquam illo sint? Accusamus iure sit totam qui quasi reiciendis error dolorum modi repellendus.',
    projectGithubRepoLink: '',
    projectLiveDemoLink: '',
  },
]

interface ProjectProps {
  project: ProjectData
}

function Project({ project }: ProjectProps) {
  const {
    projectImage,
    projectImageAlt,
    projectName,
    projectDescription,
  } = project

  return (
    <div className="project">
      <img
        src={`/images/projects-images/${projectImage}`}
        alt={projectImageAlt}
      />
      <div className="project-info">
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="projects-section">
      <SectionLanding />
      <div className="introduction">
        <h1>Projects</h1>
        <p>
          A collection of polished projects that I handcrafted throughout my web
          development learning journey..
        </p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.projectName} />
        ))}
      </div>
    </div>
  )
}
