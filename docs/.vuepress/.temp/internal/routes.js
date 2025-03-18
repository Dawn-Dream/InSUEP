export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"功能项目主页","icon":"home"} }],
  ["/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/test.html.js"), meta: {"date":1742306701000,"excerpt":"\n<p>这不是首页。</p>\n<p>这是一个链接： <a href=\"https://vuepress.vuejs.org/\" target=\"_blank\" rel=\"noopener noreferrer\">VuePress</a></p>","readingTime":{"minutes":0.09,"words":26},"title":"这不是一个首页","type":"article"} }],
  ["/components/Test.html", { loader: () => import(/* webpackChunkName: "components_Test.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/Test.html.js"), meta: {"date":1742275575000,"excerpt":"\n<p>这是一个示例按钮组件的文档。</p>\n<h2>示例用法</h2>\n<div class=\"language-vue line-numbers-mode\" data-highlighter=\"shiki\" data-ext=\"vue\" style=\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\"><pre class=\"shiki shiki-themes one-light one-dark-pro vp-code\"><code><span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&lt;</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">template</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">  &lt;</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">MyButton</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\"> @</span><span style=\"--shiki-light:#986801;--shiki-dark:#D19A66\">click</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">=</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">\"</span><span style=\"--shiki-light:#383A42;--shiki-dark:#E06C75\">handleClick</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">\"</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;点击我&lt;/</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">MyButton</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&lt;/</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">template</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&lt;</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">script</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#A626A4;--shiki-dark:#C678DD\">export</span><span style=\"--shiki-light:#E45649;--shiki-dark:#C678DD\"> default</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">  methods</span><span style=\"--shiki-light:#0184BC;--shiki-dark:#ABB2BF\">:</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\"> {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\">    handleClick</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">() {</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\">      alert</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">(</span><span style=\"--shiki-light:#50A14F;--shiki-dark:#98C379\">'按钮被点击了！'</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">);</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">    },</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">  },</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">};</span></span>\n<span class=\"line\"><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&lt;/</span><span style=\"--shiki-light:#E45649;--shiki-dark:#E06C75\">script</span><span style=\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\">&gt;</span></span></code></pre>\n<div class=\"line-numbers\" aria-hidden=\"true\" style=\"counter-reset:line-number 0\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","readingTime":{"minutes":0.14,"words":43},"title":"MyButton 组件","type":"article"} }],
  ["/guide/new_md.html", { loader: () => import(/* webpackChunkName: "guide_new_md.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/guide/new_md.html.js"), meta: {"excerpt":"\n<p>这是我的新页面的内容。</p>\n<p>这是一个链接： <a href=\"https://vuepress.vuejs.org/\" target=\"_blank\" rel=\"noopener noreferrer\">VuePress</a></p>","readingTime":{"minutes":0.21,"words":64},"title":"我的新页面","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/components/", { loader: () => import(/* webpackChunkName: "components_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/components/index.html.js"), meta: {"title":"Components"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Category","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tag","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"Star","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/github/InSUEP/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline","index":false} }],
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
