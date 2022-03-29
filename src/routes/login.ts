import { Router } from "express";

const router = Router();

export const getLoginRoutes = (): Router => {
    router.get("/login", (req, res) => {
        // console.log("Woring");
        res.redirect("./views/index.html")
        // res.send("Hello Wo1rld");
    });

    router.post("/login", (req, res) => {
        // console.log("working");
        const userName: string = "admin";
        const passwordTemp: string = "admin";

        const { username, password } = req.body;

        if (username === userName && password === passwordTemp) {
            return res.status(200).json({
                success: true,
                message: "Login success",
            });
        }
        return res.status(404).json({
            success: false,
            message: "Login Failed",
        });
    });
    return router;
};
