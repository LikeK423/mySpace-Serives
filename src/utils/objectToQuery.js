const objectToQuery = object =>{
	let array = [];
	for (let index in object){
		array.push(`${index}=${object[index]}`);
	}
	return '?' + array.join('&');
}

module.exports = objectToQuery
