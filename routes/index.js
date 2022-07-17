const express = require("express");
const fs = require("fs");
const { builtinModules } = require("module");
const router = express.Router();

const PATH_ROUTES = __dirname;
const removeExtension = (file_name) => {
    return file_name.split('.').shift();
}

const a = fs.readdirSync(PATH_ROUTES).filter( (file) => {
    const name = removeExtension(file);
    if (name !== "index") {
        console.log("Estoy usando esta ruta:", name);
        router.use(`/${name}`,require(`./${file}`));

    }
})

module.exports = router;

