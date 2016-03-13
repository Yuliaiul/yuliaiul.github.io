var arr = [];

for (var n = 0; n < 5; n++){
	arr[i] = prompt('Enter User Name')
}

console.log(arr);

var userName = prompt('Enter Your Name');
var flag = false;

for (var n = 0; n < arr.length; n++){
	if (arr[n] === userName){
		flag = true;
		break;	
	}
	console.log(i);
}

if (flag){ 
	alert(userName + 'login successfully!')
} else{
	alert('User Name Does Not Exist!')
}
