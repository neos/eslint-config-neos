const isPlainObj = require("is-plain-obj");
const eslint = require("eslint");
const tempWrite = require("temp-write");
const conf = require("./index.js");

const fixture = `'use strict';\nconst x = true;\n\nif (x) {\n    console.log();\n}\n`;

function runEslint(str, conf) {
    const linter = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(conf)),
    });

    return linter.executeOnText(str).results[0].messages;
}

describe("eslint config", () => {
    it("is a valid eslint config object", () => {
        expect(isPlainObj(conf)).toBe(true);
        expect(isPlainObj(conf.rules)).toBe(true);
        expect(runEslint(fixture, conf).length).toBe(0);
    });
});
