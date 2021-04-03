import { Router, Request, Response, NextFunction } from "express";

export class HeroRouter {
  router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  private getAll(req: Request, res: Response, next: NextFunction) {
    res.send("STRIng");
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get("/", this.getAll);
  }
}

// Create the HeroRouter, and export its configured Express.Router
const heroRoutes: HeroRouter = new HeroRouter();

export default heroRoutes.router;
