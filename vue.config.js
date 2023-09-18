export default defineConfig({
    base: '/WeatherVue/',
    plugins: [
      vue()
    ]
})

module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'WeatherVue',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
   }
}