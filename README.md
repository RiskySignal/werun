# WeRun Time
> 2018/01/18 正式将工程名字改为WeRun Time,用作**哈尔滨工业大学（威海）WeRun俱乐部**的实验室打卡系统</br>
> 加油吧！Werun 2018！

**在Werun创建的模板工程，希望能给将来的前端学弟和github的前端初学者有些许帮助**

**如果大牛看了我这个比较简陋的工程，莫名想笑的话，还请给出指点，我正为实验室前端发展而抓耳挠少，我想能从更多的人学到更多前端的东西**

## Install
**1. 使用&nbsp;&nbsp;&nbsp;`git clone`&nbsp;&nbsp;&nbsp;到本地**</br>
**2. 执行&nbsp;&nbsp;&nbsp;`npm i`**</br>
**3. `npm run dev` - 开发环境**</br>
   **&nbsp;&nbsp;&nbsp;&nbsp;`npm run build` - 生产环境**

## Dependencies
**1. react**</br>
**2. redux**</br>
**3. router**</br>
**4. bootstrap**</br>

## Notes
### Bootstrap配合react+Wepack的使用
**1. 最初，我在项目中配置的是 react + Webpack**</br>
**2. 接着，我打算用一下bootstrap，便引入了react-bootstrap**</br>
**3. 根据react-bootstrap官方文档所言**</br>
> **Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included css. However, some stylesheet is required to use these components. How and which bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN.**

**&nbsp;&nbsp;&nbsp;&nbsp;我应在项目中为这些组件引入默认的css，看到CDN资源，我想尝试着能不能通过webpack来引入bootstrap的css等资源，即bootstrap-loader+bootstrap的姿势**</br>
**4. 在这里我采用的bootstrap@v4.0-beta.3版本（如果使用3.x.x版本的话是bootstrap-loader+bootstrap-sass,3版本比较好配置），在这个版本下，bootstrap完全重写了全部的模块，并且值得注意的是部分组件发生的更改（例如panel组件更名为card），这也就导致了我一开始以为我的配置失败了，后来才发现这个问题，因此，最后我还是在template.html中暂时引用了cdn的资源，我相信react-bootstrap应该马上会有新的版本将其迭代掉**</br>
**总结一下：可以看到在配置bootstrap的时候并不容易，也花了我一天的时间在这个上面兜圈子**</br>
**你现在可以根据我的配置做你需要的修改，我想暂时应该没有太大的问题**

### Webpackd的配置问题
**Webpack的配置上面各种“奇妙”的解决方法都有，上次简书上还有人直接喷webpack的文档写的不好，确实webpack的官方文档的配置可能有跑不动的时候，而且你如果跑bootStrap-loader的官方demo的话，它好像也跑不起来，让人怀疑人生，有问题给我留言吧，我不一定能帮你解决，但是可能能给你点帮助**