### css 
* 1
```text
CSS属性是否区分大小写
```
* 2
```text
css伪元素和伪类的区别
```
* 3
```text
inline-block和block的区别，ie中如何实现inline-block的效果
```
* 4
```text
如果需要手动写动画，你认为最小时间间隔是多久，为什么
```
* 5
```text
position: absolute,relative,fixed的区别
```
* 6
```text
对内联元素设置padding是否会增加它的高度或者宽度
```
* 7
```text
伪类选择器:checked将作用与input类型为radio或者checkbox, 不会作用于option
```
* 8
```text
overfloa:hidden 是否形成新的块级格式化上下文
```
* 9
```text
 如何居中div？如何居中一个浮动元素？
```
* 9
```text
块级元素margin-left：50%是什么的的50%
```
* 10
```text
内联元素可以实现浮动吗
```
* 11
```text
简要描述CSS中content属性的作用
```
* 12
```text
过渡(transition)与动画(animation)的区别是什么
```
* 13
```text
如何清除浮动元素所带来的影响
```
* 14 
```text
超链接访问过后hover样式就不出现的问题是什么？如何解决？
```
* 15
```text
rgba()和opacity的透明效果有什么不同
```
* 16
```text
什么是外边距合并
```
* 17
```text
元素竖向的百分比设定是相对于容器的高度吗？
```
* 18
```text
display:inline-block 什么时候会显示间隙
```
* 19
```text
overflow: scroll时不能平滑滚动的问题怎么处理
```
* 20
```text
实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
```
* 21
```text
title与h1的区别、b与strong的区别、i与em的区别
```
* 22
```text
absolute的containing block(容器块)计算方式跟正常流有什么不同
```
* 23
```text
zoom:1的清楚浮动原理?
```
* 24
```text
在网页中的应该使用奇数还是偶数的字体？为什么呢？
```
* 25
```text
你对line-height是如何理解的？
```
* 26
```text
让页面里的字体变清晰，变细用CSS怎么做？
```
* 27
```text
如何去掉超链接的虚线框？
```
* 28
```text
如何容器透明，内容不透明？
```
* 29
````text
如何做1像素细边框的table？
````
* 30
```text
为什么2个相邻div的margin只有1个生效？
```






### 原生js
* 1
```text
javascript 有哪些数据类型
  基础类型：字符串，数字，布尔，数组，对象，null , undefined
```
* 2 
```text
什么是Cookie 隔离
```
* 3
```text
请描述一下 cookies，sessionStorage 和 localStorage 的区别
  cookies 服务器存储，有安全性问题，会导致黑客抓包，有大小限制，会自动将数据发送到服务器上，使用cookie隔离可避免这个问题
  sessionStorage 浏览器存储，浏览器关闭之后就没有，不会将数据发送到服务器端
  localStorage  本地存储，在本地存储，浏览器关闭之后还有，
```
* 4
```text
iframe有那些缺点
  双滚动条
  浏览器的后退按钮消失
  过多会增加服务器的hTTP 请求
  小型的移动设备无法完全显示框架
  产生多个页面，不易管理
  不容易打印
  代码复杂，无法被一些搜索引擎解读
```
* 5
```text
Label的作用是什么？是怎么用的？
  label 定义表单之前的控件，当用户，选择label这个控件的时候，会自动将焦点转换到input上面

```
* 6
```text
如何实现浏览器内多个标签页之间的通信?
  使用sessionStorage 或者 localStorage 进行存值取值
```
* 7
```text
JavaScript原型，原型链 ? 有什么特点？
  每个对象都会在内部初始化一个prototype原型，
  原型链：因为每个对象和原型都有原型，对象的原型指向原型对象，
而父的原型又指向父的父，这种原型层层连接起来的就构成了原型链。
  特点：Javascript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本，当我们修改原型时，与之
  相关的对象也会继承这一改变
```
* 8 
```text
Javascript如何实现继承？
  原型链继承
    核心： 将父类的实例作为子类的原型
    使用 prototype 继续父元素的实例
      function aa( name,age ) {
        this.name = name;
        this.age = age;
      }
      aa.prototype.sex = function( sex ) {
          console.log( sex );
      }
      function bb(){
      }
      bb.prototype = new aa();
      console.log( bb.prototype );
      特点：
        非常纯粹的继承关系，实例是子类的实例，也是父类的实例
        父类新增原型方法/原型属性，子类都能访问到
        简单，易于实现
        缺点：

        要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中
        无法实现多继承
        来自原型对象的引用属性是所有实例共享的（详细请看附录代码： 示例1）
        创建子类实例时，无法向父类构造函数传参
  构造继承
    核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
      function aa( name,age ) {
        this.name = name;
        this.age = age;
      }
      aa.prototype.sex = function( sex ) {
          console.log( sex );
      }
      function bb(){
          aa.call( this );
      }
      var cat = new bb();
      console.log( cat );
      特点：
        解决了1中，子类实例共享父类引用属性的问题
        创建子类实例时，可以向父类传递参数
        可以实现多继承（call多个父类对象）
      缺点：
        实例并不是父类的实例，只是子类的实例
        只能继承父类的实例属性和方法，不能继承原型属性/方法
        无法实现函数复用，每个子类都有父类实例函数的副本，影响性能
  实例继承
    核心：为父类实例添加新特性，作为子类实例返回  
      function aa( name,age ) {
            this.name = name;
            this.age = age;
      }
      aa.prototype.sex = function( sex ) {
          console.log( sex );
      }
      function bb(){
          var cat = new aa();
          return cat;
      }
      var cat = new bb();
      console.log( cat );
    特点：

    不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果
    缺点：

    实例是父类的实例，不是子类的实例
    不支持多继承
  拷贝继承
  寄生组合继承
      function aa( name,age ) {
        this.name = name;
        this.age = age;
      }
      aa.prototype.sex = function( sex ) {
          console.log( sex );
      }
      function bb(){
          aa.call( this );
      }
      (function(){
          function supers(){};
          supers.prototype = aa.prototype;
          bb.prototype.constructor = supers.prototype.constructor; 
          bb.prototype = new supers();
          
      })();
      var cat = new bb();
      console.log( cat );


```
* 9
```text
javascript创建对象的几种方式？
  let obj = {}
  构造函数创造
  let obj = new Object();
  Object.create({})
  class 对象
```
* 10
```text
怎么创建一个没有原型的对象
  object.create(null)
```
* 11
```text
谈谈This对象的理解
  es5 this 指向window，只有在构造函数时指向自己，或者在某个调用的时候指向自己
  es6 this 指向当前这个类
```
* 12
```text
什么是window对象? 什么是document对象?
  window对象 代表浏览器中一个打开的窗口
  document对象 代表整个html文档，可用来访问页面中的所有元素
```
* 13
```text
new操作符具体干了什么呢?
  首先 新建了一个对象， 
    var obj = new Object()
  设置原型链
  将构造函数的this指向当前new的这个实例，
  判断 构造函数的返回值类型， 如果是值类型，返回obj， 如果是引用类型，就返回这个引用类型的对象
```
* 14 
```text
同步和异步的区别
  同步： 一个函数执行完，才能执行下一个函数
  异步： 同时执行两个不想干的函数
```
* 15
```text
怎么实现异步转同步

```
* 16
```text
documen.write和 innerHTML的区别
  document.write 将body清空，直接将文字直接写进body里面，
  innerHTML 是指当前元素的带节点的内容，改变当前元素的内容，不请空body
  textContent 是指当前元素不带节点的内容
```
* 17
```text
如何判断当前脚本运行在浏览器还是node环境中？
  通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中
```
* 18
```text
解释JavaScript中的作用域与变量声明提升？ // 回家看
  es5 中是没有块级作用域，只能使用闭包达到块级作用域的作用，只有函数作用域，会将变量提到最顶端，
  es6 中有函数块级作用域，用let声明
```
* 19
```text
把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？
  html标签只包含head 和body两个标签，解析时，所有标签都会解析进这两个标签里边。body之前的任何位置都会解析进head里边，之后的都会解析进body里边。 
```
* 20
```text
我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？冒泡原理是什么？

```
* 21
```text
Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？
  object.is和原来的 全等差不多，
  区别在于
    +0 === -0 //true
    Object.is(+0,-0) // false
    NaN === NaN // false
    Object.is(NaN,NaN) // true
```
* 22
```text
列举IE与其他浏览器不一样的特性？
  1.触发事件的元素被认为是目标target，而在ie中，目标包含在event对象的srcElement属性
  2.获取字符代码，如果按键代表一个字符（shift,ctrl,alt除外），ie的keyCode 会返回字符代码，DOM中按键的代码和字符是分离的
    要获取字符代码，需要使用charCode 属性
  3.阻止某个事件的默认行为，ie中阻止某个事件的默认行为，必须将returnValue属性设置为false, Mozilla中，需要调用     preventDefault 方法
  4. 停止事件冒泡，IE中阻止事件进一步冒泡，需要设置 cancelBubble 为 true，Mozzilla 中，需要调用 stopPropagation()；

```
* 22
```text
WEB应用从服务器主动推送Data到客户端有那些方式 ？ http 原理
  javascript数据推送
  HTTP Streaming，通过iframe和<script>标签完成数据的传输；
  comment：基于基于HTTP长链接的服务器推送技术、
  基于WebSocket的推送方案
  SSE( Server-Send Event ):服务器推送数据新方式
```
* 23
```text
http状态码有那些？分别代表是什么意思？
  100 继续，一般在发送post请求时，已发送了http header之后服务器将返回此信息，表示确认，之后发送具体参数信息
  200 ok  成功，正常返回信息
  201 created 请求成功并且服务器创建了新的资源
  202 Accepted 服务器已接受请求，但尚未处理
  301 Moved Permanently 请求的网页已永久移动到新的位置
  302 Found 临时性重定向
  303 See Other 临时性重定向，且总是使用 GET请求新的URI
  304 Not Modified 自从上次请求后，请求的网页未修改过
  400 Bad Request 服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求
  401 Unauthorized 请求未授权
  403 Forbidden 禁止访问
  404 Not Found 找不到如何与 URL 相匹配的资源
  500 Internal Server Error 最常见的服务器端错误
  503 Service Unavailable 服务器端暂时无法处理请求（ 可能是过载或维护 ）
  完整版 
    1**(信息类)：表示接收到请求并且继续处理
      100——客户必须继续发出请求
      101——客户要求服务器根据请求转换HTTP协议版本

    2**(响应成功)：表示动作被成功接收、理解和接受
      200——表明该请求被成功地完成，所请求的资源发送回客户端
      201——提示知道新文件的URL
      202——接受和处理、但处理未完成
      203——返回信息不确定或不完整
      204——请求收到，但返回信息为空
      205——服务器完成了请求，用户代理必须复位当前已经浏览过的文件
      206——服务器已经完成了部分用户的GET请求

    3**(重定向类)：为了完成指定的动作，必须接受进一步处理
      300——请求的资源可在多处得到
      301——本网页被永久性转移到另一个URL
      302——请求的网页被转移到一个新的地址，但客户访问仍继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request。
      303——建议客户访问其他URL或访问方式
      304——自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用
      305——请求的资源必须从服务器指定的地址得到
      306——前一版本HTTP中使用的代码，现行版本中不再使用
      307——申明请求的资源临时性删除

    4**(客户端错误类)：请求包含错误语法或不能正确执行
      400——客户端请求有语法错误，不能被服务器所理解
      401——请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
    　　 HTTP 401.1 - 未授权：登录失败
      　　HTTP 401.2 - 未授权：服务器配置问题导致登录失败
      　　HTTP 401.3 - ACL 禁止访问资源
      　　HTTP 401.4 - 未授权：授权被筛选器拒绝
      HTTP 401.5 - 未授权：ISAPI 或 CGI 授权失败
      402——保留有效ChargeTo头响应
      403——禁止访问，服务器收到请求，但是拒绝提供服务
          HTTP 403.1 禁止访问：禁止可执行访问
      　　HTTP 403.2 - 禁止访问：禁止读访问
      　　HTTP 403.3 - 禁止访问：禁止写访问
      　　HTTP 403.4 - 禁止访问：要求 SSL
      　　HTTP 403.5 - 禁止访问：要求 SSL 128
      　　HTTP 403.6 - 禁止访问：IP 地址被拒绝
      　　HTTP 403.7 - 禁止访问：要求客户证书
      　　HTTP 403.8 - 禁止访问：禁止站点访问
      　　HTTP 403.9 - 禁止访问：连接的用户过多
      　　HTTP 403.10 - 禁止访问：配置无效
      　　HTTP 403.11 - 禁止访问：密码更改
      　　HTTP 403.12 - 禁止访问：映射器拒绝访问
      　　HTTP 403.13 - 禁止访问：客户证书已被吊销 
              HTTP 403.14 - 禁止访问：服务器被配置为不列出此目录内容
      　     　HTTP 403.15 - 禁止访问：客户访问许可过多
      　       HTTP 403.16 - 禁止访问：客户证书不可信或者无效
              HTTP 403.17 - 禁止访问：客户证书已经到期或者尚未生效

      404——一个404错误表明可连接服务器，但服务器无法取得所请求的网页，请求资源不存在。eg：输入了错误的URL
      405——用户在Request-Line字段定义的方法不允许
      406——根据用户发送的Accept拖，请求资源不可访问
      407——类似401，用户必须首先在代理服务器上得到授权
      408——客户端没有在用户指定的饿时间内完成请求
      409——对当前资源状态，请求不能完成
      410——服务器上不再有此资源且无进一步的参考地址
      411——服务器拒绝用户定义的Content-Length属性请求
      412——一个或多个请求头字段在当前请求中错误
      413——请求的资源大于服务器允许的大小
      414——请求的资源URL长于服务器允许的长度
      415——请求资源不支持请求项目格式
      416——请求中包含Range请求头字段，在当前请求资源范围内没有range指示值，请求也不包含If-Range请求头字段
      417——服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求长。

    5**(服务端错误类)：服务器不能正确执行一个正确的请求
      HTTP 500 - 服务器遇到错误，无法完成请求【服务器产生内部错误】
      　　HTTP 500.100 - 内部服务器错误 - ASP 错误
      　　HTTP 500-11 服务器关闭
      　　HTTP 500-12 应用程序重新启动
      　　HTTP 500-13 - 服务器太忙
      　　HTTP 500-14 - 应用程序无效
      　　HTTP 500-15 - 不允许请求 global.asa
      　　Error 501 - 未实现   【服务器不支持请求的函数】
    HTTP 502 - 网关错误【服务器暂时不可用，有时是为了防止发生系统过载】
    HTTP 503：由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常
  　　      504——关口过载，服务器使用另一个关口或服务来响应用户，等待时间设定值较长
  　　      505——服务器不支持或拒绝支请求头中指定的HTTP版本
```
* 24
```text
一个页面从输入 URL 到页面加载显示完成，这个过程中都发生了什么？（流程说的越详细越好）
  1.输入地址
  2.浏览器查找域名的 IP 地址
  3.这一步包括 DNS 具体的查找过程，包括：浏览器缓存->系统缓存->路由器缓存...
  4.浏览器向 web 服务器发送一个 HTTP 请求
  5.服务器的永久重定向响应（从 http://example.com 到 http://www.example.com）
  6.浏览器跟踪重定向地址
  7.服务器处理请求
  8.服务器返回一个 HTTP 响应
  9.浏览器显示 HTML
  10.浏览器发送请求获取嵌入在 HTML 中的资源（如图片、音频、视频、CSS、JS等等）
  11.浏览器发送异步请求
```
* 25
```text
判断数据类型有哪些方法，各有什么优缺点?
  typeOf , 无法判断  arrary, null,
  Object.prototype.toString.call , 都可以判断
  instance，无法识别 undefined 和null
```
* 26
```text
 什么是构造函数？与普通函数有什么区别?
  1. 定义方式不同，
  2. this指向不同
    构造函数的this 指向本身
    普通函数的this 指向window
  3. 调用方式不同
    构造函数必须使用一个实例方式调用 new的方式调用
    普通函数可直接调用

```
* 27
```text
window.onload ==? DOMContentLoaded ?
  DOMContentLoaded事件要在window.onload之前执行，当Dom树构建完成的时候会执行DOMContentLoaded事件，而window.onload
  是在页面加载完成的时候吗，才执行。
```
* 28
```text
JavaScript提供了哪几种“异步模式”？
  1. 使用回调函数执行， 容易陷入回调地域
  2. 使用promise , es5中的promise不好维护，es6中的promise采用链式调用比较好维护
  3. 使用genterator, 基于promise 的异步，使用yeild 进行定义，next调用，是一个实例，无需new.
     缺点，多个异步函数执行时需要自己写一个执行器来执行，
  4. 使用 async ,是es7 的语法糖， 基于promise的执行，内置执行器，返回一个promise对象
```
* 29
```text
怎么实现深拷贝和浅拷贝
  浅拷贝：仅仅复制对象的引用,而不是对象本身，引用对象与原对象互相牵制，
    实现方式
      1. let a = {a:1 } ; b = a;
      2. 使用for 循环
      3. 使用object.assign(),不可枚举的对象属性无法拷贝
  深拷贝：复制对象所引用的全部对象，引用对象与原对象无关联，
    实现方式
      JSON.paese： 缺点： 会抛弃对象的constructor,在深拷贝之后都会变成Object，
      递归拷贝：缺点：容易死循环，量大不适用
      Object.create(), 缺点 会将原对象的属性 添加到当前属性的原型上面
```
* 30
```text
使用 typeof bar === "object" 来确定 bar 是否是对象的潜在陷阱是什么？如何避免这个陷阱？
  如果bar 是null，在js中的null 也为对象，
  使用Object.prototype.toString().call来判断
```
* 31
```text
NaN 是什么？它的类型是什么？你如何可靠地测试一个值是否等于 NaN ？
不是一个数字，Number, ES5中可以用 !=  NaN来判断是否为一个数字
使用Object.is 来判断
```
* 32
```text
call , apply , bind的区别
call 和 apply 都是属于借，传参不同，apply必须是一个数组，call以，的方式传参
bind 是绑定


```
* 33
```text
ajax的原理是什么？
  ajax是google提出的，用于服务器与web端进行数据通信。它的核心是xmlHTTPRequest 。使用xmlHTTPRequest对象来向服务器发异步请求从服务器获得数据，然后用JavaScript来操作DOM而更新页面。
  onreadystatechange 每次状态改变所触发事件的事件处理程序
  responseText 从服务器进程返回数据的字符串形式
  responseXML 从服务器进程返回的DOM兼容的文档数据对象
  status 从服务器返回的数字代码，比如 常见的404（未找到）和200 （已就绪）
  status Text 伴随状态码的字符串信息
  readyState 对象状态值
    0（未初始化）对象已建立，但是尚未初始化（尚未调用open方法）
    1（初始化）对象已建立，尚未调用send方法
    2（发送数据）send方法已调用，但是当前的状态及http头未知
    3 (数据传送中) 已接受部分数据，因为响应及http头不全，这时通过 responseBody 和 responseText 获取部分数据会出现错误
    4 (完成) 数据接受完毕，此时可以通过responseXml 和 responseText 获取完整的回应数据
    但是，由于浏览器直接存在差异，所以创建一个XMLHttpRequest 有兼容性
      非 ie 
        xmlHTTP = new XmlHttpRequest()
      ie 
         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    function Ustbwuyi() {

      var data = document.getElementById("username").value;
      CreateXmlHttp();
      if (!xmlhttp) {
          alert("创建xmlhttp对象异常！");
          return false;
      }

      xmlhttp.open("POST", url, false);

      xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4) {
              document.getElementById("user1").innerHTML = "数据正在加载...";
              if (xmlhttp.status == 200) {
                  document.write(xmlhttp.responseText);
              }
          }
      }
      xmlhttp.send();
    }

```



### jquery

* 1
```text
  jquery 有哪几种选择器
    id 选择器，class选择器，元素选择器，伪类选择器，
```
* 2
```text
jquery怎么实现申报被和浅拷贝
  使用 $.extend
  使用方式： $.extend( [deep ], target, object1 [, objectN ] )；
    deep 
    类型: Boolean 
    如果是true，合并成为递归（又叫做深拷贝）。
    target 
    类型: Object 
    对象扩展。这将接收新的属性。
    object1 
    类型: Object 
    一个对象，它包含额外的属性合并到第一个参数。
    objectN 
    类型: Object 
    包含额外的属性合并到第一个参数。
  例子：
    浅拷贝
      var obj1 = {name:xx,age:18,sex:man};
      var obj2 = {name:cc,age:18};
      $.extend(obj1,obj2);
      obj1----->{name:cc,age:18} //被obj2覆盖
    深拷贝
      var obj1 = {name:xx,age:18,sex:man};
      var obj2 = {name:cc,age:18};
      $.extend(true,obj1,obj2);
      obj1----->{name:cc,age:18，sex:man}
```
* 3
```text
jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？
```
* 4
```text
jquery中如何将数组转化为json字符串，然后再转化回来？
```
* 5
```text
jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？
```
* 6
```text
jquery.extend 与 jquery.fn.extend的区别？
```
* 7
```text
Jq绑定事件的几种方式,各有什么优缺点
```
* 8
```text
$.map和$.each有什么区别
```
* 9
```text
jsonp原理？ 缺点?
```
* 10
```text
如何确保ajax或连接不走缓存路径
```
* 11
```text
jquery的hover ，mouseover有啥区别
```
* 12
```text
jquery的延迟对象有什么作用
```
* 13
```text
jquery怎么实现多库共存
```
* 14
```text
jquery的on方法和one方法的区别
```

