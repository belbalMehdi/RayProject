Import.script('com.modules.ray.Cookie');
Import.script('com.modules.ray.HttpProvider');
Import.script('com.modules.ray.DataBinder');

class App{
	constructor(){
		//cookie example
		Cookie.setCookie("Car","Lamburghini");

		//dataBinding example
		let dataBinder = new DataBinder("myController");
		dataBinder.bind("name.ha","Lucky Luck");
		//Ajax http get example
		HttpProvider.get("user.json",true).then(function(data){
			dataBinder.setAutoBind(data.users[0]);
			for(let i in data.users){
				document.body.innerHTML = data.users[i].name+"<br>" + document.body.innerHTML;
			}
		})
	}
}

let app = new App();