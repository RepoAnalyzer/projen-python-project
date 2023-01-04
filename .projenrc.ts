import { cdk, javascript } from "projen";

const project = new cdk.JsiiProject({
  author: "DeadlySquad13",
  authorAddress: "46250621+DeadlySquad13@users.noreply.github.com",
  name: "projen-python-project",
  packageName: "projen-python-project" /* The "name" in package.json. */,
  repositoryUrl: "https://github.com/RepoAnalyzer/projen-python-project.git",
  description:
    "Projen project type for Repo Analyzer python projects" /* The description is just a string that helps people understand the purpose of the package. */,
  keywords: [
    // Directly related.
    "python",
    "projen",
    "project",
    "template",
    // Child of.
    "repo analyzer",
    "sdk",
    "constructs",
  ],

  defaultReleaseBranch: "main",
  projenrcTs: true,
  gitpod: true,
  devContainer: true,
  codeCov: true,
  prettier: true,
  releaseFailureIssue: true,
  // autoApproveUpgrades: true,
  // autoApproveOptions: {
  //     allowedUsernames: ["DeadlySquad13-automation"],
  // },

  deps: ["projen@0.65.13"],
  peerDeps: ["projen@0.65.13"],
  devDeps: ["@typescript-eslint/parser"],

  docgenFilePath: "docs/api/API.md",
});

const eslint = javascript.Eslint.of(project);

if (eslint) {
  // Had lint errors (couldn't find root as far as I remember).
  eslint.addExtends("eslint:recommended");
}

project.synth();
