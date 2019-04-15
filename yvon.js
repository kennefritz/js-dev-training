function palyndrom(str) {
	let tab = str.split('');
	var result = true;
	for (let i = 0; i <= parseInt((tab.length / 2) - 1); i++){
		if (tab.shift().toLowerCase() != tab.pop().toLowerCase()){
			result = false;
			break;
		}
	}
	return result;
}

function converter(num) {

}

function ceasercypher(str) {

}