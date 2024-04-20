import type { FC, ReactElement } from "react";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import type { IconButtonProps } from "@mui/material/IconButton";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { ProjectInfo } from "@/library/project-info";
import { logoAndPopover } from "@/library/logo-alias";
import MouseOverPopover from "@/components/MouseOverPopover";

interface ExpandMoreProps extends IconButtonProps {
  readonly expand: boolean;
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const ProjectCard: FC<{ project: ProjectInfo }> = ({
  project,
}): ReactElement | null => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (): void => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardHeader title={project.title} subheader={project.description} />
      <CardContent>
        <Stack>
          <Box>
            <Typography variant="h6">Languages:</Typography>
            <Grid container>
              {project.technologies.languages.map((tech: string, index) => {
                if (!(tech in logoAndPopover)) {
                  return null;
                }
                return (
                  <Grid key={index}>
                    <MouseOverPopover pngPath={logoAndPopover[tech].logo}>
                      {logoAndPopover[tech].popover}
                    </MouseOverPopover>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          {!!project.technologies.frontend && (
            <Box>
              <Typography variant="h6">Frontend:</Typography>
              <Grid container>
                {project.technologies.frontend.map((tech: string, index) => {
                  if (!(tech in logoAndPopover)) {
                    return null;
                  }
                  return (
                    <Grid key={index}>
                      <MouseOverPopover pngPath={logoAndPopover[tech].logo}>
                        {logoAndPopover[tech].popover}
                      </MouseOverPopover>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
          {!!project.technologies.backend && (
            <Box>
              <Typography variant="h6">Backend:</Typography>
              <Grid container>
                {project.technologies.backend.map((tech: string, index) => {
                  if (!(tech in logoAndPopover)) {
                    return null;
                  }
                  return (
                    <Grid key={index}>
                      <MouseOverPopover pngPath={logoAndPopover[tech].logo}>
                        {logoAndPopover[tech].popover}
                      </MouseOverPopover>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
          {!!project.technologies.database && (
            <Box>
              <Typography variant="h6">Database:</Typography>
              <Grid container>
                {project.technologies.database.map((tech: string, index) => {
                  if (!(tech in logoAndPopover)) {
                    return null;
                  }
                  return (
                    <Grid key={index}>
                      <MouseOverPopover pngPath={logoAndPopover[tech].logo}>
                        {logoAndPopover[tech].popover}
                      </MouseOverPopover>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          )}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ProjectCard;
