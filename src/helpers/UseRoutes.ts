import { Router, Express } from "express";

export default class UseRoutes {
  constructor(private _app: Express) {}

  use(routes: Router[]): void {
    if (routes.length < 1) {
      throw Error("Array de rotas não pode estar vazio");
    }

    for (const route of routes) {
      this._app.use(route);
    }
  }
}
