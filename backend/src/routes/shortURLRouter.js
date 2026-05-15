import { Router } from "express";
import createShortURL, {redirect} from "../controllers/shortUrlController.js";
import { protect } from "../middlewares/authMiddleware.js";

const shortURLRouter = Router();

shortURLRouter.post("/", protect, createShortURL);
shortURLRouter.get("/:shortId", redirect);
// shortURLRouter.get(":shortCode", );

export default shortURLRouter;
