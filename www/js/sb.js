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

function labelThis(id,day){
	if(localStorage.getItem('label' + id)=='1'){
		localStorage.removeItem('label' + id);
		var myarr = localStorage.getItem(day).split(";");
		var index;
		var myNewArray = [];
		for (index = 0; index < myarr.length; ++index) {if(myarr[index]>0 && myarr[index] != id){myNewArray[myNewArray.length]=myarr[index];}}
		localStorage.setItem(day, myNewArray.join(';'));
		document.getElementById('label' + id).src='images/label_32_bw.png';
	}else{
		localStorage.setItem('label' + id, '1');
		localStorage.setItem(day, localStorage.getItem(day) + ';' + id);
		document.getElementById('label' + id).src='images/label_32.png';
	}
}

function twoDigits(name){
var toReturn='';
if(name.length==1){
toReturn='0' + name;
}else{
toReturn = name;
}
return toReturn;
}