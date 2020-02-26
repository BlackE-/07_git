/*
	SPREAD
*/

let fruits = ['appler','orange','banana'];
//METHODO INMUTABLE
//CONSERVA SU ESPACIO EN MEMORA
fruits.push('lemon'); 


//METHODO MuTABLE
fruits = ['peach',...fruits,'pineapple']
console.log(fruits);


let user = {};

user = {
	name:'',
	age:'',
	curp:''
};

user = {
	...user,
	address:'',
	rfc:'',
	age:''
};

console.log(user);

const restFuntion = (...myArray) =>{
	console.log(myArray);
};

// restFuntion(1,2,3,4,5,6,7,8,9);
restFuntion(1,'hola',false);


const array2 = [1,2,3,4,5,6,7,8,9,0];

//OPTIMIZADO 
for(const iterator of array2){
	//1,2,3,4,5,6,7,8,9
	console.log(iterator);
}

const map = new Map();
for(const [iterator,key] in map){
	//0,1,2,3,4,5,6,7,8,9
	console.log(index);
}


// const mult = (...numbers) =>{
// 	// retorno explicito 
// 	// return numbers.reduce((product,factor)=>{
// 	// 	return product * factor;
// 	// },1);

// 	//retorno implicito
// 	return numbers.reduce((product,factor)=> product * factor ,1);
// };


//retorno implicito
//simplificando
const mult = (...numbers) =>return numbers.reduce((product,factor)=> product * factor ,1);


// mult(1,2,3,4,5,6,7,8,9);
console.log(mult(1,2,3,4,5,6,7,8,9));