/*
    ${A Fast micro javascript template engine}

    Author: 淘杰
    Gtalk: hustxiaoc@gmail.com
    Blog: http://hust.cnblogs.com
	source:http://www.cnblogs.com/hust/archive/2011/04/28/2032265.html
*/
KISSY.add("tpl",function(S){
          var  quote=function (str) {
                        str = str.replace(/[\x00-\x1f\\]/g, function (chr) {
                            var special = metaObject[chr];
                            return special ? special : '\\u' + ('0000' + chr.charCodeAt(0).toString(16)).slice(-4)
                        });
                        return str.replace(/"/g, '\\"') ;
                },
                metaObject = {
                    '\b': '\\b',
                    '\t': '\\t',
                    '\n': '\\n',
                    '\f': '\\f',
                    '\r': '\\r',
                    '\\': '\\\\'
                },
				default_config={
				  left:"{{",
				  right:"}}"
				};

    function Template(options,helper){
        return this instanceof arguments.callee?this.init(options,helper):new arguments.callee(options,helper);
    }
		
	S.augment(Template,
	   {
		init:function(options,helper){
			this.tpl=quote(options.tpl);
			this.left=options.left||default_config.left;
			this.right=options.right||default_config.right;
			this.body=[];
			this.compiled=null;
			this.data=options.data;
			this.helper=helper;
		},
		compile:function(){
			if(!this.compiled){
				var helpers=[],helper=this.helper;
				if(this.helper){
				   for(var h in helper){
					  if(helper.hasOwnProperty(h) && typeof helper[h] == "function"){
							helpers.push('var '+h+'=this.helper["'+h+'"]');
					  }
				   }
				}
				this.compiled=new Function("data",helpers.join(";")+';var temp=[];\n'+Template.parse(this)+'\n return  temp.join("");');
			}
			return this.compiled;
		},
		render:function(data){
			return this.compile().call(this,data||this.data);
		}
	  }
	).parse=function(self){
	   var temp;
	   if(self.right=="}}"){//这里主要是为了解决{{{造成的bug!
		  temp=self.tpl.replace(/(}})([^}])/g,function(){
			 return arguments[1]+" "+arguments[2];
		  }).split(new RegExp('(?='+self.left+')|('+self.right+')(?:[^}])'))
	   }else{
		  temp=self.tpl.split(new RegExp('(?='+self.left+')|('+self.right+')'))
	   }
	   
		temp=S.filter(temp,function(v){
			   return v&&!(new RegExp(self.right)).test(v);
		});
		S.each(temp,function(v){
			if((new RegExp('^'+self.left)).test(v)){
				v=v.replace('@','data.');
				if(new RegExp('^'+self.left+'\s*=').test(v)){
				   self.body.push(v.replace(new RegExp('^'+self.left+'\s*=(.*)'),'\ttemp.push($1);\n').replace(/\\n/g,''));
				}else{
				   self.body.push(v.replace(new RegExp('^'+self.left+'\s*(.*)'),'$1\n').replace(/\\n/g,''));
				}
			}
			else {self.body.push('\ttemp.push(\"'+v.replace(/\n|\t/g,'')+'\");\n');}
		  });
		return self.body.join("");
	};
	   
	return Template;
})