import { IniFile, TomlFile } from "projen";
import { PythonProject, PythonProjectOptions } from "projen/lib/python";

// const MODULE_NAME = "projen_template"

// Folders holding all our modules with code.
// const ROOT_MODULE_DIR = "src"
// const ROOT_TEST_DIR = "tests"

/**
 * Configurable knobs for Repo Analyzer Python Project.
 */
export type RepoAnalyzerPythonProjectOptions = PythonProjectOptions

export const DEFAULT_OPTIONS: Partial<RepoAnalyzerPythonProjectOptions> = {
    readme: {
        filename: "README.md",
        contents: "Test readme",
    },
    gitpod: true,
};

/**
 * Repo Analyzer Python Project.
 *
 */
export class RepoAnalyzerPython extends PythonProject {
    public readonly black;
    public readonly flake8: TomlFile;
    public readonly isort: IniFile;

    // public readonly preCommit: boolean;
    // public readonly commitizen: boolean;

    // public readonly pytestConfig: boolean;

    constructor(options: RepoAnalyzerPythonProjectOptions) {
        super({
            ...DEFAULT_OPTIONS,
            ...options,
        });

        this.gitignore.exclude(".venv_win");

        this.black = this.addBlack();
        this.flake8 = this.addFlake8();
        this.isort = this.addIsort();
        // this.addPreCommit()
        // this.addCommitizen()
        // this.addPytest()
    }

    /**
     * Add black to the project as a dev dependency.
     */
    private addBlack() {
        this.addDevDependency("black@^22");

        return true;
    }

    /**
     *   Add flake8 to the project as a dev dependency.
     * Create a simple configuration file to prevent conflicts with black.
     */
    addFlake8() {
        const flake8 = new TomlFile(this, ".flake8", {
            obj: {
                flake8: {
                    "max-line-length": 88,
                    "extend-ignore": "E203",
                },
            },
        });

        this.addDevDependency("flake8@^5");

        return flake8;
    }

    /**
     *   Add isort to the project as a dev dependenncy.
     * Create a simple configuration file to prevent conflicts with black.
     */
    addIsort() {
        const isort = new IniFile(this, ".isort.cfg", {
            obj: {
                settings: {
                    profile: "black",
                },
            },
        });

        this.addDevDependency("isort@^5");

        return isort;
    }
}
