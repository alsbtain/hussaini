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

var now = new Date().getTime();

function labelThis(id,day,huName,time,timestamp){
	if(localStorage.getItem('label' + id)=='1'){
		localStorage.removeItem('label' + id);
		window.plugin.notification.local.cancel(id);
		var myarr = localStorage.getItem(day).split(";");
		var index;
		var myNewArray = [];
		for (index = 0; index < myarr.length; ++index) {if(myarr[index]>0 && myarr[index] != id){myNewArray[myNewArray.length]=myarr[index];}}
		localStorage.setItem(day, myNewArray.join(';'));
		document.getElementById('label' + id).src='images/label_32_bw.png';
	}else{
		localStorage.setItem('label' + id, '1');
		localStorage.setItem(day, localStorage.getItem(day) + ';' + id);
		
		var delta = new Date(now + (timestamp-currentTimestamp)*1000 - 30*60*1000);
		if(delta > now){
			window.plugin.notification.local.add({
				id:      id,
				title:   'تنبيه مناسبة',
				message: huName + ': ' + time,
				date:    delta
			});
		}

		document.getElementById('label' + id).src='images/label_32.png';
	}
}

function onSbReady(){

var headID = document.getElementsByTagName("head")[0];         
var newScript = document.createElement('script');  
newScript.type = 'text/javascript';
newScript.charset = 'utf-8';

var go=getUrlVars()["go"];
if(go=="reload"){
newScript.src = 'http://h.alsbtain.net/api.main.php?go=' + getUrlVars()["go"] + '&id=' + getUrlVars()["id"] + '&email=' + getUrlVars()["email"] + '&phone=' + getUrlVars()["phone"] + '&name=' + getUrlVars()["name"] + '&title=' + getUrlVars()["title"] + '&content=' + getUrlVars()["content"];  
} else if(go=="search"){
newScript.src = 'http://h.alsbtain.net/api.main.php?go=' + getUrlVars()["go"] + '&id=' + getUrlVars()["id"] + '&name=' + getUrlVars()["name"];  
} else if(go=="cp"){
newScript.src = 'http://h.alsbtain.net/api.cp.php?do=' + getUrlVars()["do"] + '&id=' + getUrlVars()["id"] + '&day=' + getUrlVars()["day"] + '&month=' + getUrlVars()["month"] + '&year=' + getUrlVars()["year"] + '&step=' + getUrlVars()["step"];  
} else if(go=="schedule"){
if(getUrlVars()["day"]>0 && getUrlVars()["month"]>0 && getUrlVars()["year"]>0){
newScript.src = 'http://h.alsbtain.net/api.main.php?go=' + getUrlVars()["go"] + '&day=' + getUrlVars()["day"] + '&month=' + getUrlVars()["month"] + '&year=' + getUrlVars()["year"] + '&label=' + localStorage.getItem(twoDigits(getUrlVars()["day"]) + twoDigits(getUrlVars()["month"]) + getUrlVars()["year"]);
}else{
newScript.src = 'http://h.alsbtain.net/api.main.php?go=' + getUrlVars()["go"] + '&label=' + localStorage.getItem(currentDate);
}} else {
newScript.src = 'http://h.alsbtain.net/api.main.php?go=' + getUrlVars()["go"] + '&id=' + getUrlVars()["id"] + '&day=' + getUrlVars()["day"] + '&month=' + getUrlVars()["month"] + '&year=' + getUrlVars()["year"] + '&city=' + localStorage.getItem('city') + '&place=' + localStorage.getItem('place');  
}

headID.appendChild(newScript);

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