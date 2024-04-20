export interface ProjectInfo {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: Technologies;
  readonly githubUrl: string | null;
  readonly url: string | null;
  readonly demoUrl: string | null;
  readonly collaborators: string[] | null;
  readonly client: Client;
  readonly type: ProjectType;
  readonly context: ProjectContext;
}

interface Technologies {
  readonly frontend: string[] | null;
  readonly backend: string[] | null;
  readonly database: string[] | null;
  readonly languages: string[];
}

interface Client {
  readonly name: string | null;
  readonly contact: string | null;
}

export enum ProjectType {
  Web = "web",
}

export enum ProjectContext {
  Uni = "uni",
  Private = "private",
}
