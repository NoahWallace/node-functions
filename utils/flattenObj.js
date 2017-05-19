function flattenKeys () {
	let memo = {}
	let val = {};
	function set (obj, prevkey = "") {

		let i=JSON.stringify(obj);

		if (i in memo) {console.log(i)
			return memo[i]
		}


		for (let key in obj) {
			let newKey=prevkey===""? key : prevkey+"."+key;

			if (typeof obj[key] !== 'object' && typeof obj[key] !== 'null') {
				val[newKey]=obj[key];
			}
			else {

				val=set(obj[key],newKey)
			}
		}

		memo[i] = JSON.stringify(val);
		return val
	}
	return set
}
let b = flattenKeys();
let c = {
	a: {
		"-a": 1
	},
	b: {
		"-b": 2
	},
	d: {
		"-d": 3
	},
	e: 4,
	VBC: 123,
	12345: {
		ABC: {
			DEV: 123
		},
		DEF:{
			DEVS:1234
		},
		GEF:{
			ABC:{
				DEF:4321
			},
			DEF:{
				BCCD:12342,
				GEF:{
					"final":"final"
				}
			}
		}
	}
}
console.log(b(c))
