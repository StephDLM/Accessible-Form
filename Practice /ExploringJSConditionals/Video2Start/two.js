var isTrue = true;

if(isTrue) {
	console.log('yes');
} else {
	console.log('no');
}
//same as:

isTrue? console.log('yes'): console.log('no');

//same as:

var yesOrNo = isTrue? 'yes': 'no';
console.log(yesOrNo);
