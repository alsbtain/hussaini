function changeDisplay(id){
		if(document.getElementById(id).style.display=='none'){
			document.getElementById(id).style.display='table-cell';
		}else{
			document.getElementById(id).style.display='none';
		}
}

function selectItemByValue(id, value){
var elmnt = document.getElementById(id);
  for(var i=0; i < elmnt.options.length; i++)
  {
    if(elmnt.options[i].value === value) {
      elmnt.selectedIndex = i;
      break;
    }
  }
}

function labelThis(id){
	if(localStorage.getItem('label' + id)=='1'){
		localStorage.removeItem('label' + id);
		document.getElementById('label' + id).src='images/label_32_bw.png';
	}else{
		localStorage.setItem('label' + id, '1');
		document.getElementById('label' + id).src='images/label_32.png';
	}
}