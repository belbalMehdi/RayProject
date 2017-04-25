class Import{
	static script(script){
		 let currentScript = document.currentScript;
		 let newScript = document.createElement('script');
		 newScript.async = false;
		 newScript.id = script;
		 var scripts = document.getElementsByTagName("script");
		 for(let i in scripts){
		 	if(scripts[i].id==script) return false;
		 }
		 script = script.replace(/\./g, '/')+'.js';
		 let xhr = new XMLHttpRequest();
		 xhr.open('GET',script,false);
		 xhr.send(null);
		 newScript.innerHTML = xhr.response;
		 document.body.insertBefore(newScript,currentScript);
		 return true;
	}
}