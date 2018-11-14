"use strict";

module.exports = {
    entry: "src/app/main.js",
    plugins: [
        require("modular-css-rollup")()
    ],
    output: {
        file: "dist/app-bundle.js",
        format: "iife"
    }
};
