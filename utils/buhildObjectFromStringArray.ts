import * as deepmerge from 'deepmerge'


export function buildObjectFromString<T>(arr,pfx):T{
	let newObj:T;
	arr.map((item)=>{
		let str = pfx+"_"+item.replace(/\./g,"_");
		let spl=item.split(".");

		spl.reverse().map((v,i,_array)=>{
			let nextItem=_array[i+1];
			let val;
			if(i===0 && _array.length === 1){
				val={[v]:str};
				newObj=deepmerge(newObj,val)
			}
			else if(i===0 && _array.length > 1){
				val={[v]:str};
				_array[i+1]={[nextItem]:val}
			}
			else if(i===_array.length-1){
				newObj=deepmerge(newObj,v)
			}
			else{
				_array[i+1]={[nextItem]:v}
			}
			return v
		})

	});
	return newObj;
}
