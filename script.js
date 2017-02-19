
window.onbeforeunload = function(){
	var ta = document.getElementById("user_post");
	if(ta.value != ""){
	    return "You have unsaved work!";
	}
}
