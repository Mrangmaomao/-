### 学习css calc() 动态算法
> 语法 `cacl(四则运算)`


#### 语义
	calc 函数是css3计算函数，可以使用 * / - + 来计算值。calc函数也可以嵌套。
	

#### 兼容性

浏览器大部分支持，

<div>
    <style>
        ul{
            padding-left: 0px;
        }
        ul>li{
            margin-left:20px;
        }
        table{
            text-align: center;
            border-collapse: collapse;
        }
        table tr td,table tr th{
            border:1px solid #ddd;
            padding:10px;

        }
    </style>   
    <ul style="display: flex">
        <li style="list-style: none;">
            <span style="width:20px;vertical-align: middle;height:14px;display: inline-block;background-color:#90FF90"></span>
            = 支持
        </li>
        <li style="list-style: none;">
            <span style="width:20px;vertical-align: middle;height:14px;display: inline-block;background-color:#FF9090"></span>
            = 不支持
        </li>
        <li style="list-style: none;">
            <span style="width:20px;vertical-align: middle;height:14px;display: inline-block;background-color:#fdd"></span>
            = 部分支持
        </li>
    </ul>
</div>
<table>
<thead>
    <tr>
        <th style="background-color:#DDEEFF">IE</th>
        <th style="background-color:#DDEEFF">Firefox</th>
        <th style="background-color:#DDEEFF">Chrome</th>
        <th style="background-color:#DDEEFF">Safari</th>
        <th style="background-color:#DDEEFF">Opera</th>
        <th style="background-color:#DDEEFF">IOS Safari</th>
        <th style="background-color:#DDEEFF">Android Browser</th>
        <th style="background-color:#DDEEFF">Android Chrome</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td style="background-color:#FF9090">6.0-8.0</td>
        <td style="background-color:#FF9090">2.0-3.6</td>
        <td style="background-color:#FF9090">4.0-18.0</td>
        <td style="background-color:#FF9090">3.1-5.1</td>
        <td rowspan='3' style="background-color: #90FF90">15.0+</td>
        <td style="background-color:#FF9090">3.2-5.1</td>
        <td style="background-color:#FF9090">2.1-4.3</td>
        <td style="background-color:#FF9090">18.0</td>
    </tr>
    <tr>
        <td rowspan="2" style="background-color: #90FF90">9.0+</td>
        <td style="background-color: #90FF90">4.0-15.0
                -moz-</td>
        <td style="background-color: #90FF90">19.0-25.0
                -webkit-</td>
        <td style="background-color: #90FF90"></td>
        <td style="background-color: #90FF90">6.0-6.1
                -webkit-</td>
        <td rowspan="2" style="background-color: #fdd">
            4.4-4.4.4
        </td>
        <td style="background-color: #90FF90">19.0-25.0
                -webkit-</td>

    </tr>
    <tr>
        <td style="background-color: #90FF90">
            16.0+
        </td>
        <td style="background-color: #90FF90">
                26.0+
        </td>
        <td style="background-color: #90FF90">
            6.1+
        </td>
        <td style="background-color: #90FF90">
            7.0+
        </td>
        <td style="background-color: #90FF90">
                26.0+
        </td>
    </tr>
</tbody>
</table>


#### 常用方式举例

	.calc{
		width: calc(100% - 50px) // 父元素宽 减去 50px
		height: calc(100% + 50px) // 父 元素高 加上 50px
		height: calc(50% - calc(50% - 30px)); // 嵌套calc  假设父元素高度为400px; 根据四则运算的先后规律，先算出右边的， 400 * 0.5 - 30px = 170px; 再算左边的，200 - 170px = 30px; 由此推算出 此元素的高为 30px;
		width: calc(20% * 2 ) // 父元素宽的 20% * 2;
		width: calc(20% / 2 ) // 父元素宽的 20% / 2;
	}

#### 实景用例
> 实现响应式 view

	<html>
    <head>
        <meta charset="utf-8">
        <title>calc</title>
        <style>
           ul{
               display: flex;
               padding-left: 0;
           }
           li{
               list-style: none;
               margin: 10px 15px;
               width: calc( ( 100% - 15px * 2 * 3 ) / 3);
               height: 200px;
               background-color:palegoldenrod;
           }
        </style>
    </head>
    <body>
        <ul>
            <li>第一块</li>
            <li>第二块</li>
            <li>第三块</li>
        </ul>
    </body>
</html>



> 实现元素居中

	<html>
    <head>
        <meta charset="utf-8">
        <title>calc</title>
        <style>
            /** 垂直居中一个元素 **/
            .div{
                position: absolute;
                width: 400px;
                height: 400px;
                top: calc((100% - 400px) / 2);
                left: calc((100% - 400px) /2);
                background-color:palegoldenrod;
            }
        </style>
    </head>
    <body>
        <div class="div">
        </div>
    </body>
</html>

> 参考文献：http://caibaojian.com/css3-calc.html



> 谢谢观看！
