export interface ShardConfig {
  name: string;
  version: string;
  authors?: string[];
  crystal?: string;
  dependencies?: Record<string, ShardDependency>;
  development_dependencies?: Record<string, ShardDependency>;
  description?: string;
  documentation?: string;
  executables?: string[];
  homepage?: string;
  libraries?: Record<string, string>;
  repository?: string;
  scripts?: ShardScripts;
  targets?: Record<string, ShardTarget>;
}

export interface ShardScripts {
  postinstall?: string;
}

export interface ShardTarget {
  main: string;
}

export interface ShardDependency {
  path?: string;
  git?: string;
  github?: string;
  gitlab?: string;
  bitbucket?: string;
  version?: string;
  branch?: string;
  commit?: string;
  tag?: string;
}
