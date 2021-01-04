import rockets from './rockets-service';

const services = Object.freeze({
  rockets,
});

export const ServiceFactory = Object.freeze({
  get: (name: string) => services[name],
});
