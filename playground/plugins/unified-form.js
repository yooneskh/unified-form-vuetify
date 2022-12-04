import '../../mod';


export default defineNuxtPlugin(app => {

  app.vueApp.component(
    'u-form',
    defineAsyncComponent(() => import('unified-form'))
  );

});
