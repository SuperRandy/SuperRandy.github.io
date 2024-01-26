import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as o,a,b as n,d as e,e as c}from"./app-o4WN8hHk.js";const u={},i={href:"https://github.com/hslr-s/sun-panel",target:"_blank",rel:"noopener noreferrer"},r={href:"https://hslr-s.github.io/sun-panel-tool-page/#/",target:"_blank",rel:"noopener noreferrer"},d=c(`<h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码" aria-hidden="true">#</a> 部署代码</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.2&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">sun-panel</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;hslr/sun-panel:latest&quot;</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> sun<span class="token punctuation">-</span>panel
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/sun<span class="token punctuation">-</span>panel/conf<span class="token punctuation">:</span>/app/conf
      <span class="token punctuation">-</span> /volume1/docker/sun<span class="token punctuation">-</span>panel/uploads<span class="token punctuation">:</span>/app/uploads
      <span class="token punctuation">-</span> /volume1/docker/sun<span class="token punctuation">-</span>panel/database<span class="token punctuation">:</span>/app/database
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 7580<span class="token punctuation">:</span><span class="token number">3002</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(v,m){const s=l("ExternalLinkIcon");return p(),o("div",null,[a("p",null,[a("a",i,[n("Sun-Panel"),e(s)]),n(" 与 Homarr 相比，样式与功能都要简单许多。")]),a("p",null,[n("不过 Sun-Panel 有 "),a("a",r,[n("浏览器书签转换工具"),e(s)]),n("，可以将书签批量导入 Sun Panel。")]),d])}const h=t(u,[["render",k],["__file","sun-panel.html.vue"]]);export{h as default};
