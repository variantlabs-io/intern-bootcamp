"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
const getRoutes = () => {
    router.get("/login", (req, res) => {
        return res.send("<h1> Hello </h1>");
    });
    return router;
};
exports.getRoutes = getRoutes;
