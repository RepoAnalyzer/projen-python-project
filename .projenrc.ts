import { cdk } from 'projen';
const project = new cdk.JsiiProject({
  author: 'DeadlySquad13',
  authorAddress: '46250621+DeadlySquad13@users.noreply.github.com',
  defaultReleaseBranch: 'main',
  name: 'projen-init-test',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/46250621+DeadlySquad13/projen-init-test.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();