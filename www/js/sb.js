function changeDisplay(id){
		if(document.getElementById(id).style.display=='none'){
			document.getElementById(id).style.display='table-cell';
		}else{
			document.getElementById(id).style.display='none';
		}
}