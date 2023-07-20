export default defineNuxtPlugin( ( nuxtApp ) => {
  nuxtApp.hook('i18n:beforeLocaleSwitch', ({ initialSetup }) => {
    if (initialSetup ) {
      return 'nl-nl';
    }
  })
});
