import comp from "D:/github/InSUEP/docs/.vuepress/.temp/pages/.html.vue"
const data = JSON.parse("{\"path\":\"/.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":\".md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
