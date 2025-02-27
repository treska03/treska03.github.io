import Project, { ProjectProps } from "./project";

type ProjectListProps = {
  projects: ProjectProps[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Projects I&aphos;m Most Proud Of
      </h2>
      <ul className="space-y-6">
        {projects.map((project, idx) => {
          return (
            <li
              key={idx}
              className="p-4 border rounded-lg border-gray-200 dark:border-gray-700"
            >
              <Project
                name={project.name}
                description={project.description}
                link={project.link}
                techStackIcons={project.techStackIcons}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
