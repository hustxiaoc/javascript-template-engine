ǰ��jsģ������
===

�ȿ����Զ����jQuery���,Ҳ���Ե���Ϊһ��ǰ��ģ��,������Ƕ�����node.jsģ��

�����Զ��嶨������������˸���ģ�涨���������ͻ


<strong>��������ʹ��</strong>����ֻ�ܳ���<%= <&�������󶨽���ڣ������������ַ���������ȣ� �������������һ����|�����ָ���������������������֡�
��������������$.ejs.filters֮�ڣ�����������escape��unescape�����������ַ����Ĺ���������ʵ�������ҵ�langģ���
$.String.escapeHTML��$.String.unescapeHTML������������Լ����Ե�https://github.com/RubyLouvre/newland/blob/master/system/mass/lang.js
��������ȡ
<pre>
&lt;&= "&lt;aaaa&gt;" | escape  &&gt;
</pre>

<strong>��ͼhelper��ʹ��</strong>�����൱��һ�ֶ����ĺ���������ͨ���ɿ���ṩ����action���������ĸ���������Ŀ���ǽ�������ҵ������Ƴ�ģ�壬ʵ�����á������ڱ���ʱһ��д��ģ����

��
<pre>
var set_link = function(text, url){
  return '&lt;a href="'+url+'"&gt;'+text +'&lt;/a&gt;';
}

var fn = $.ejs.compile(source, {
  helpers:{
      set_link: set_link
   }
})
</pre>
��ô���ǾͿ���ֱ����ģ����ʹ�ô˷���
<pre>
&lt;&= set_link("rubylouvre","http://www.cnblogs.com/rubylouvre/") %&gt;
</pre>
<h3> "-"��������ʹ��</h3>
<p>������ģ��</p>
<pre>
&lt;%- for(var i=0, tl = @trs.length, tr; i &lt; tl; i++){ -%&gt;
   &lt;- tr = @trs[i] -&gt;
   &lt;tr&gt;
     &lt;td&gt;&lt;%= tr.name %&gt;&lt;/td&gt;&lt;td&gt;&lt;%= tr.sex %&gt;&lt;/td&gt;&lt;td&gt;&lt;%= tr.date %&gt;&lt;/td&gt;
   &lt;/tr&gt;
&lt;%- } -%&gt;
</pre>
<p>�����ʹ��-������,��ô���ɵ�HTML����ԭ<% %>֮��ĵط����ִ��Ŀհ�,�������ͻ���������,��֤HTML�ĸɾ�,���Ǵ�rails��ERBģ��������﷨.</p>

<h3>ģ��ı��뺯���Ļ���</h3>
<p>��ǰ�����ǿ���ͨ��ѡ����������ģ��,����</p>
<pre>

</pre>
<p>���ĵ�һ��������CSSѡ���������������jQuery��mass Framework�������ʹ��jQuery��������ʽ(mass Framework��ȫ����jQuery���Զ���α��)��
�����û��ʹ�ÿ�ܣ����᳢����querySelectorAll��Ѱ��Ԫ�أ�������ʹ��getElementById��Ԫ�أ���Ȼ������֮ǰ��ȥ����ǰ��#</p>
<p>��֮����ǰ������ʹ�õ�һ��������ģ��ļ��������õĺ�����Ϊһ����ֵ�Է���$.ejs.cache��</p>
<p>�ں�ˣ����ǿ������õ�����������tid��Ϊģ��ļ�</p>
<pre>
</pre>

<h3>��ģ���ʹ�û�layout��ָ��<h3>
<p>���Ƕ���ʹ����ͼhelperʵ�ֵģ�����������include������Ϊ������ģ��ĺ���</p>
<pre>
var fn = $.ejs(source, data, {
  helpers:{
     include: $.ejs
   }
})
</pre>
<p>����ָ��layout,�����꿴�ҵ�newlandjs��set_layout������λ��/app/views/...�е�ʹ��ʾ��</p>






��� http://www.cnblogs.com/hust/archive/2011/04/28/2032265.html