var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var modify = document.getElementsByTagName('li');
		// acceess the 3rd element of li in the index field
		//modify[2].innerHTML = request.responseText;
		for(var i=0; i<modify.length; i++){
		modify[i].innerHTML=request.responseText;
		}
	}
}
request.send();
