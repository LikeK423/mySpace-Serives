const objectToQuery = object =>{
	let array = [];
	for (let index in object){
		array.push(`${index}=${encodeURI(object[index])}`);
	}
	return '?' + array.join('&');
}

module.exports = objectToQuery
