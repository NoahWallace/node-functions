function flattenKeys(){
	let memo={}
	function set(obj){
		if (obj in memo){return memo[obj]}
		let val="";
		for(let key in obj){
			if(typeof obj[key] !== 'object' && typeof obj[key] !== 'null'){
				val+=key+"_;";
			}
			else{
				
				val+= key+"_"+ set(obj[key])
			}
		}

		memo[obj]=val;
		return val
	}
	return set
}
let b=flattenKeys()
let c={a:{"-a":1},b:{"-b":2},d:{"-d":1},e:1,VBC:123,12345:{ABC:{DEV:123}}}
console.log(b(c))
