export abstract class EnvironmentItemsPathConfig {

  readonly all: string;
  readonly byId: string;

}

export abstract class EnvironmentItemsConfig {

  readonly host: string;
  readonly path: EnvironmentItemsPathConfig;

}

export abstract class Environment {

  readonly production: boolean;
  readonly items: EnvironmentItemsConfig;

}
