import { Router } from "express";
import { getDashboarMetrics } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboarMetrics);

export default router;
