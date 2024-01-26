const t=JSON.parse('{"key":"v-9ff4249e","path":"/family/HomeAutomation.html","title":"智能家居","lang":"zh-CN","frontmatter":{"article":false,"title":"智能家居","icon":"home","order":3.1,"description":"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。 Home Assistant Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。 Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。 下载 hacs，将其解压到 Home Assistant 配置的 config\\\\custom_components\\\\hacs 文件夹下。 重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。 选择「HACS」&gt;「集成」&gt;「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。[1]","head":[["meta",{"property":"og:url","content":"https://newzone.top/family/HomeAutomation.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"智能家居"}],["meta",{"property":"og:description","content":"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。 Home Assistant Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。 Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。 下载 hacs，将其解压到 Home Assistant 配置的 config\\\\custom_components\\\\hacs 文件夹下。 重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。 选择「HACS」&gt;「集成」&gt;「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。[1]"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-26T14:18:01.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-01-26T14:18:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"智能家居\\",\\"description\\":\\"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。 Home Assistant Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。 Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。 下载 hacs，将其解压到 Home Assistant 配置的 config\\\\\\\\custom_components\\\\\\\\hacs 文件夹下。 重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。 选择「HACS」&gt;「集成」&gt;「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。[1]\\"}"]]},"headers":[{"level":2,"title":"Home Assistant","slug":"home-assistant","link":"#home-assistant","children":[]},{"level":2,"title":"Node-RED","slug":"node-red","link":"#node-red","children":[{"level":3,"title":"常用节点","slug":"常用节点","link":"#常用节点","children":[]}]},{"level":2,"title":"自动化场景","slug":"自动化场景","link":"#自动化场景","children":[]},{"level":2,"title":"智能硬件","slug":"智能硬件","link":"#智能硬件","children":[{"level":3,"title":"Zigbee2MQTT","slug":"zigbee2mqtt","link":"#zigbee2mqtt","children":[]},{"level":3,"title":"智趣盒子","slug":"智趣盒子","link":"#智趣盒子","children":[]},{"level":3,"title":"其他硬件","slug":"其他硬件","link":"#其他硬件","children":[]}]}],"git":{"createdTime":1706278681000,"updatedTime":1706278681000,"contributors":[{"name":"SuperRandy","email":"157815473+SuperRandy@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.18,"words":1255},"filePathRelative":"family/HomeAutomation.md","localizedDate":"2024年1月26日","excerpt":"<p>智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。</p>\\n<h2> Home Assistant</h2>\\n<p>Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。</p>\\n<p>Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。</p>\\n<ol>\\n<li>下载 <a href=\\"https://github.com/hacs/integration/releases/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">hacs</a>，将其解压到 Home Assistant 配置的 config\\\\custom_components\\\\hacs 文件夹下。</li>\\n<li>重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。</li>\\n<li>选择「HACS」&gt;「集成」&gt;「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></li><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n</a></ol>","autoDesc":true}');export{t as data};
