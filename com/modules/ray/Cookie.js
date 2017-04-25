class Cookie{
	static setCookie(key,value,time=365){
		let exp = new Date();
		exp.setTime(exp.getTime()+time*24*60*60*1000);
		document.cookie = key+"="+value+"; expires="+exp.toUTCString()+";";
		return true;
	}

	static getCookie(key){
		let cookies = document.cookie.split(";");
		let result = undefined;
		for(let i in cookies){
			if(cookies[i].indexOf(key)==1||cookies[i].indexOf(key)==0){
				result = cookies[i].split("=")[1];
			}
		}
		return result;
	}

	static checkCookie(key){
		if(getCookie(key)!=undefined) return true;
		else return false;
	}

	static deleteCookie(key){
		if(checkCookie) setCookie(key,'',-1);
	}
}
