前端js模版引擎
===

既可以自动变成jQuery插件,也可以单独为一个前端模板,亦可以是独立的node.js模板

可以自定义定界符，避免与后端各种模版定界符发生冲突

该模版优点:

1.模版采用js语法，没有学习成本

2.也是由于优点1所以该模版的解析速度还是很占优势的

3.可以自定义模版分隔符，就算是与js语法冲突的{{ }}都没有问题，避免了和后端模版分隔符冲突的风险

4.引入helper机制，避免影响全局变量
//helper机制的使用
 var tpl = Template(options, helper);
 
options是一个对象，有以下属性
  tpl 必选 待解析的模版字符串
 left 可选 左分隔符 默认 {{
 right 可选 右分隔符 默认}}
data 可选 要渲染的数据  如果在这个地方不传入的话  可以在调用tpl.render时传入
 
helper是一个对象，里边必须为函数
比如
<pre>
         {
            title: function(){
                return "<p>这是使用视图helper输出的代码片断</p>"
            },
            handle:function(data){
              return data.name.replace("aaa","bbb");
            }
        }

</pre>
详见 http://www.cnblogs.com/hust/archive/2011/04/28/2032265.html