import type { FC, ReactElement } from "react";
import InformationSegment from "./InformationSegment";
import ProjectList from "./ProjectList";

const HomePage: FC = (): ReactElement | null => {
  return (
    <main>
      <InformationSegment />
      <ProjectList />
    </main>
  );
};

export default HomePage;
