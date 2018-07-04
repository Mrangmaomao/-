##使用富文本方式方式做 复制到粘贴板 功能

在系统中我们经常会使用到 复制到粘贴板这个功能。以前使用flash做的。但现在我想使用富文本的方式将这个功能实现出来，如果有错，请指出。
#### 核心 document.execCommand('copy')
- 兼容性
	<style>
		table tr th,table tr td{
			border:1px solid #ddd;
			background-color:#efefef;
		}
	</style>
	<table>
		<thead>
			<tr>
				<th>IE</th>
				<th>chrome</th>
				<th>Edge</th>
				<th>firefox(gecko)</th>
				<th>Opera</th>
				<th>Safari</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td> 9</td>
				<td> 43 </td>
				<td>yes</td>
				<td>41</td>
				<td>29</td>
				<td>10</td>
			</tr>
		</tbody>
	</table>	

#### 代码
        <div class="div">
        </div>
        <span id="copy">请点击按钮复制这一段文字</span>
        <button onClick="copy()">复制</button>
        <script>
            function copy(){
                var text = document.getElementById('copy').innerHTML;
                var textarea = document.createElement('textarea');
                document.body.appendChild(textarea);
                textarea.value = text;
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }
        </script>
> 总结：此方法兼容性不是特别好，如需兼容ie8慎用，如果无需兼容，那这样还是挺好的。 谢谢观看
