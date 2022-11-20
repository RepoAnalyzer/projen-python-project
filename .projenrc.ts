import { cdk, javascript } from 'projen';

const project = new cdk.JsiiProject({
    author: 'DeadlySquad13',
    authorAddress: '46250621+DeadlySquad13@users.noreply.github.com',
    name: 'projen-init-test',
    repositoryUrl: 'https://github.com/46250621+DeadlySquad13/projen-init-test.git',

    defaultReleaseBranch: 'main',
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
    // deps: [],                /* Runtime dependencies of this module. */
    // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
    // devDeps: [],             /* Build dependencies for this module. */
    // packageName: undefined,  /* The "name" in package.json. */
});

const eslint = javascript.Eslint.of(project)

if (eslint) {
    eslint.addExtends('@typescript-eslint/parser');
    // eslint.config.parserOptions = {
    //     tsconfigRootDir: __dirname,
    // }
};

project.synth();
