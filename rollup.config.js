"use strict";

module.exports = {
    entry: "src/main.js",
    plugins: [
        require("modular-css-rollup")()
    ],
    output: {
        file: "dist/app-bundle.js",
        format: "iife"
    }
};
