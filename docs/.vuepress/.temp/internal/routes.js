export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/new_md.html", { loader: () => import(/* webpackChunkName: "new_md.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/new_md.html.js"), meta: {"title":"我的新页面"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"首页"} }],
  ["/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/test.html.js"), meta: {"title":"这不是一个首页"} }],
  ["/components/Test.html", { loader: () => import(/* webpackChunkName: "components_Test.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/Test.html.js"), meta: {"title":"MyButton 组件"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
