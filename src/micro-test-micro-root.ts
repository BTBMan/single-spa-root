import { registerApplication, start } from 'single-spa';
import { constructApplications, constructRoutes, constructLayoutEngine } from 'single-spa-layout';
import microfrontendLayout from './microfrontend-layout.html';

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    // console.log(System);

    // console.log();

    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

// console.log(applications);

applications.forEach(registerApplication);
layoutEngine.activate();

// registerApplication({
//   name: '@micro-test/micro-sub-vite2-vue3',
//   app: () =>
//     import(
//       /* webpackIgnore: true */
//       // @ts-ignore
//       'http://localhost:3000/src/main.js'
//     ),
//   activeWhen: ['/'],
// });

start({
  urlRerouteOnly: true,
});
