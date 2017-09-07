import { Aurelia } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export class App {
	router: Router;

	configureRouter(config: RouterConfiguration, router: Router) {
		config.title = "Aurelia";
		config.map([
			{ route: ["", "welcome"], name: "welcome", moduleId: PLATFORM.moduleName("./welcome"), nav: true, title: "Welcome" },
			{ route: "users", name: "users", moduleId: PLATFORM.moduleName("./users"), nav: true, title: "Github Users" },
			{ route: "child-router", name: "child-router", moduleId: PLATFORM.moduleName("./child-router"), nav: true, title: "Child Router" },
			{ route: "react-example", name: "react-example", moduleId: PLATFORM.moduleName("./react-example"), nav: true, title: "REACT!" }
		]);

		this.router = router;
	}
}
