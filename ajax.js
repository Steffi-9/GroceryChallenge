//Creating an XHR Object
var xhttp = new XMLHttpRequest();
//Event Listener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            //    console.log(response);
            var list = response.list;
            // console.log(list.length);
            
                for(var j=0;j <list.length; j++){
                    // output =list[i].SerialNumber;
                    document.getElementById("SlNo"+[j]).innerHTML=list[j].SerialNumber;
                    document.getElementById("name"+[j]).innerHTML=list[j].ProductName;
                    document.getElementById("unit"+[j]).innerHTML=list[j].Unit;
                    document.getElementById("qty"+[j]).innerHTML=list[j].Quantity;
                    document.getElementById("dep"+[j]).innerHTML=list[j].Department;
                    document.getElementById("note"+[j]).innerHTML=list[j].Notes;
                }
     
   }
  
}
xhttp.open("GET","list.json",true);
xhttp.send();
