class DataBinder{
	constructor(controller){
		this.domController = document.querySelector("[r-controller="+controller+"]");
		let variables = this.domController.querySelectorAll("[v]");
		this.scopeVariable = [];
		
		for(let i=0; i<variables.length; i++){
			let attr = variables[i].getAttribute('v');
			//variables[i].innerHTML = this.scopeVariable[attr];
			console.log(attr);
		}
	}
	get getController(){return this.domController};
	bind(elem,val){		
		let variables = document.querySelectorAll('[v]');
		for(let i=0; i<variables.length; i++){
			let attr = variables[i].getAttribute('v');
			if(attr==elem) variables[i].innerHTML = val;
		}
	}
	setAutoBind(object){
		for(let key in object){
			this.bind(key,object[key]);
		}
	}
}