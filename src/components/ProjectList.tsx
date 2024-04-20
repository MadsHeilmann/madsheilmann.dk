import type { FC, ReactElement } from "react";
import projects from "@/library/projects";
import ProjectCard from "@/components/Project";
import Grid from "@mui/material/Unstable_Grid2";
import type { ProjectInfo } from "@/library/project-info";

const ProjectList: FC = (): ReactElement | null => {
  return (
    <Grid container spacing={2}>
      {/* eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types */}
      {projects.map((project: ProjectInfo) => (
        <Grid key={project.id} xs={12} sm={6} md={4} lg={3}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
