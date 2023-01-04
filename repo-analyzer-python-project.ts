import { cdk, SampleFile } from "projen";

/**
 * Configurable knobs for Awesome Lists
 */
export interface AwesomeListProjectOptions extends cdk.JsiiProjectOptions {
    /**
     * What e-mail address to list for the Code of Conduct Point of Contact
     *
     * @default - `project.authorAddress`
     */
    readonly contactEmail?: string;
}

/**
 * Awesome List project
 *
 * @pjid awesome-list
 */
export class AwesomeList extends cdk.JsiiProject {
    constructor(options: AwesomeListProjectOptions) {
        super({
            ...options,
            readme: {
                filename: "readme.md",
                contents: "Test readme",
            },
            defaultReleaseBranch: "main",
            gitpod: true,
            releaseToNpm: false,
        });

        new SampleFile(this, "code-of-conduct.md", {
            contents: /* this.codeOfConduct() */'Test CONTACTEMAIL'.replace(
                "CONTACTEMAIL",
                options.contactEmail ?? "noreply@example.com"
            ),
        });

        new SampleFile(this, "contributing.md", {
            contents: 'Contribute pls'/* this.contributing() */
        })
    }
}
