module.exports = (mongoose) => {
    // const path = require("path");
    const router = require("express").Router();
    const apiRoutes = require("./api")(mongoose);
    const htmlRoutes = require("./html");

    // API Routes
    router.use("/api", apiRoutes);

    // HTML Routes
    router.use("/", htmlRoutes);

    return router;
}