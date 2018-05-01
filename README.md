# WeRun Template Project

> **💡 Note:**<br />
  &emsp;我们的前端模板工程应该有：**插件**、**组件**、**应用** 和 **环境及编辑器等配置**<br />
> **🔋 Done:**<br />
  &emsp;**1.** &nbsp;&nbsp;**插件** 及 **编辑器** 的配置<br />
  &emsp;**2.** &nbsp;&nbsp;完成了部分 **插件** 的功能，并且对插件增加了 **测试** 模块<br />
  &emsp;**3.** &nbsp;&nbsp;**组件** 和 **应用** 的配置<br />
  &emsp;**4.** &nbsp;&nbsp;开始 **应用** 的开发<br />
> **⌛ Todo:**<br />
  &emsp;**1.** &nbsp;&nbsp;接下来继续写一部分我们常用的 **插件**，然后进行 **组件** 配置<br />
  &emsp;**2.** &nbsp;&nbsp;开始我们的实验室主页应用<br />

<br />
<br />

<br />


---
## Install

**1. Clone a copy**

```bash
git clone https://github.com/hellochicken/werun.git
```

**2. Install Nodejs Modules**

```bash
npm i
```

**3. Run**

```
npm run scripts
```

> **💡 Note:**<br />&emsp;可以在 `package.json`中找到相应的 **npm命令**

<br />
<br />

<br />


---

## Troubles with Webpack

> **💡 Note:**<br />&emsp;配置 webpack 是一件 **极其头疼** 的事情，要耐下心来不断调试  
> **👍Thanks:**<br />&emsp;感谢 **webpack** 及**webpack 中文社区**，现在的 webpack 文档更加明了了  

* **AMD `Define` Function**
  - **问题**： 搭建这个项目的 **plugin** 模块时，我参考了 **[jQuery](https://github.com/jquery/jquery.git)** 的源码，发现 **[jQuery](https://github.com/jquery/jquery.git)** 在源码中使用了 AMD 标准的 define 语法，但是打包以后却不存在`define`关键字，同样也不存在任何对 requirejs 的引入，**匪夷所思**
  - **相关查找**：[jQuery 自实现的 Grunt 插件](https://segmentfault.com/q/1010000002711107/a-1020000002711140)
  - **解决方法**：从上面问答可以看到，原来并不是我的操作有什么问题，**[jQuery](https://github.com/jquery/jquery.git)** 自己制作了一个 Grunt 插件去除了相应的`define`。我在 webpack 中用`babel-loader`对`define`进行转译，生成的文件中是 webpack 自定义的`__webpack_require__`方法，同样能在浏览器中实现
  - **相应猜测**：可以看到，**[jQuery](https://github.com/jquery/jquery.git)** 使用的方式是去除`define`，将插件各个模块的作用域提升到同级，这样可能带来的问题便是**命名域的冲突**。但对比 webpack 这种打包结果，**[jQuery](https://github.com/jquery/jquery.git)** 可能想做的是提高它在浏览器中的运行效率，因为这样做可以减少大量的闭包

* **ESLINT**
  - **问题**：在 webpack 中加入 eslint 时，发现第一次设置好用，但是后面无论如何修改 `.eslintrc.js` 和 `.eslintignore` 文件中的配置，再次编译都没有任何变化
  - **相关链接**：[Cache doesn't bust when .eslintrc changes](https://github.com/webpack-contrib/eslint-loader/issues/214)
  - **解决方法**：经过两天的调试，发现时`eslint-loader`中设置了`cache: true`导致它自动缓存了配置的相关信息，所以无论你怎么修改配置，它都没有任何变化！所以，在配置的时候，朋友，记得设置`cache: false`！（ps：我们调试了半天，发现这个问题，想去提个issure，发现19天前有人提了，还能说什么呢，查资料需仔细啊！）

* **Karma with Jasmine**
  - **问题**：使用 Karma、Jasmine 作为我们的整一个测试框架，可以看到 Jasmine 的默认单元测试样例中有一个`helper`，但是我们起初简单配置完后，运行测试报错：`helper`中方法不存在
  - **相关链接**：[Jasmine Spec Helpers not loaded](https://stackoverflow.com/questions/46245288/jasmine-spec-helpers-not-loaded)
  - **解决方法**：从上文中可以看到，原因在于`helper`不在编译目录中，导致的出错。所以我们在`karma.config.js`文件中应该这样设置

```javascript
{
  // ...more
  "files": ["spec/**/*[sS]pec.js", "spec/helpers/**/*[hH]elper.js"],
  "preprocessors": {
            "spec/helpers/**/*[hH]elper.js": ["webpack"],
            "spec/**/*[sS]pec.js": ["webpack"]
        },
  // ...more
}
```

* **Use BootStrap with Webpack & React**
  - **问题**：一开始配置react-bootstrap的时候，我总是好高骛远，先要用看起来很炫酷的方式去配置，但总是出现这样那样的问题
  - **相关链接**： [直接导入 **bootstrap** 的方式](getbootstrap.com/docs/4.0/getting-started/webpack/)<br />
  - **相关链接**： [直接使用 **react-bootstrap** 的方式](https://react-bootstrap.github.io/getting-started/introduction/)<br />
  - **相关链接**： [使用 **react-bootstrap** 配置 **bootstrap-loader** 的方式](https://www.npmjs.com/package/bootstrap-loader)<br />
  - **相关链接**： [使用 **bootstrap-webpack** 的方式](https://www.npmjs.com/package/bootstrap-webpack)<br />
  - **解决方法**： 方案1是果断放弃的，因为已经用了react，如果不用react-bootstrap的话，未必太低效率了一点；方案4我没有试过；方案3是我一开始尝试的，尝试了很久，才做到大致能够使用，但是还有这样那样的问题，而且如果我用react的话，我觉得再加载jquery这个库的做法不是很合理，并且会导致网页开始必须要加载特别多的库，网页的首次加载时间也会特别长；最后我采用了方案2，很简洁明了，直接加载，可以自己配置bootstrap的样式，也可以使用CDN的方式引入，而且完全不需要依赖jquery,tether那些库（这些库本身是用来支持bootstrap.js的），在webpack中的配置如下：
```javascript
  {
    entry: {
      // ...
      bootstrap_bundle: ["react-bootstrap", resolvePath("../../src/external-source/css/bootstrap.css")]
    },
    plugins: [
      // ...
      new webpack.optimize.CommonsChunkPlugin({
          name: [
              // 这里可能会出现一点问题，如果你关注webpack的打包明细的话，你会发现，如果将这两个bundle的顺序进行更换，就会导致所有的js内容都被打包进了bootstrap_bundle
              "bootstrap_bundle",
              "react_bundle",
          ],
          filename: "js/[name].js",
          minChunks: Infinity
      }),
      new webpack.ProvidePlugin({
          React: "react",
          ReactDOM: "react-dom",
          PropTypes: "prop-types",
          Bootstrap: "react-bootstrap"
      })
    ]
  }
```

> **💪 Suggesion:** <br />
  &emsp;配置 webpack 的时候你应该一步一步地进行配置，不能上来便想要配置全部的插件。例如，配置 Karma+Jasmine 时，你不应该同时配置这两个选项，即使时网上查找到相应的教程，你也很难一步到位<br />
> **🔨 More:**<br />
  &emsp;遇到的问题，也许我能帮到你。<br />
  

<h6 style="text-align:center;color:#333;background-color:#eee">COME ON</h6>
