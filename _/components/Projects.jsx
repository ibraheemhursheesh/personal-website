// sdfs
// sdf
// sfds
// sdfs
// sdfs
/* eslint-disable */

import SectionLanding from "./SectionLanding";

const projects = [
  {
    projectImage: "my-portfolio.png",
    projectImageAlt: "an image of my own portoflio project",
    projectName: "Developer Portfolio",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas exercitationem dolorem impedit distinctio in quidem numquam illo sint? Accusamus iure sit totam qui.",
    projectGithubRepoLink: "",
    projectLiveDemoLink: "",
  },
  {
    projectImage: "english-course-landing-page.png",
    projectImageAlt: "image of an english course landing page project",
    projectName: "English Course Landing Page",
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas exercitationem dolorem impedit distinctio in quidem numquam illo sint? Accusamus iure sit totam qui.",
    projectGithubRepoLink: "",
    projectLiveDemoLink: "",
  },
  {
    projectImage: "fast-react-pizza.png",
    projectImageAlt: "",
    projectName: "Fast React Pizza Co.",
    projectDescription:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque voluptas exercitationem dolorem impedit distinctio in quidem numquam illo sint? Accusamus iure sit totam qui quasi reiciendis error  dolorum modi repellendus.",
    projectGithubRepoLink: "",
    projectLiveDemoLink: "",
  },
];

export default function Projects() {
  return (
    <div className="projects-section">
      <SectionLanding />
      <div className="introduction">
        <h1>Projects</h1>

        <p>
          a collection of polish projects that I handcrafted throughout my web
          development learning journey..
        </p>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={project.projectName} />
        ))}
      </div>

      {/* <div className="comment">
        <div className="break"></div>
        <div className="landing" style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              width: "15px",
              height: "15px",
              backgroundColor: "rebeccapurple",
              borderRadius: "15px",
              left: "5px",
              top: "150px",
            }}
          ></span>
        </div>
      </div> */}
    </div>
  );
}

function Project({ project }) {
  const {
    projectImage,
    projectImageAlt,
    projectName,
    projectDescription,
    projectGithubRepoLink,
    projectLiveDemoLink,
  } = project;
  return (
    <div className="project">
      <img
        src={`./images/projects-images/${projectImage}`}
        alt={projectImageAlt}
      />
      <div className="project-info">
        <h2>{projectName}</h2>
        <p>{projectDescription}</p>{" "}
        {/* <div className="project-links">
          <div className="github-repo-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>Github repo</span>
          </div>
          <div className="live-demo-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
              <path d="m21 3-9 9" />
              <path d="M15 3h6v6" />
            </svg>
            <span>Live demo</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}
