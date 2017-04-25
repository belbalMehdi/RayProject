class HttpProvider{

	static get(url,json=false){
		return new Promise(function(resolve,reject){

			let xhr = new XMLHttpRequest();

			xhr.open('GET',url,true);
			xhr.addEventListener('load', function(){
				let response = xhr.response;
				if(json) response = JSON.parse(response)
				if(xhr.readyState==4 &&xhr.status==200)  resolve(response);
				else reject("Ressource status : "+xhr.status);
			})
			xhr.send(null);
		})
	}
	static post(url,data){
		return new Promise(function(resolve,reject){

			let xhr = new XMLHttpRequest();

			xhr.open('GET',url,true);
			xhr.addEventListener('load', function(){
				let response = xhr.response;
				if(json) response = JSON.parse(response)
				if(xhr.status==200)  resolve(response);
				else reject("Ressource status : "+xhr.status);
			})
			xhr.send(data);
		})
	}
	static put(url,data){
		return new Promise(function(resolve,reject){

			let xhr = new XMLHttpRequest();

			xhr.addEventListener('load', function(){
				let response = xhr.response;
				if(json) response = JSON.parse(response)
				if(xhr.status==200)  resolve(response);
				else reject("Ressource status : "+xhr.status);
			})
			xhr.send(data);
		})
	}
	static delete(url,data){
		return new Promise(function(resolve,reject){

			let xhr = new XMLHttpRequest();

			xhr.addEventListener('load', function(){
				let response = xhr.response;
				if(json) response = JSON.parse(response)
				if(xhr.status==200)  resolve(response);
				else reject("Ressource status : "+xhr.status);
			})
			xhr.send(data);
		})
	}
}