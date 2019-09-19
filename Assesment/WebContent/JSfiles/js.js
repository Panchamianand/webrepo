 function radioValidation(){

	    var gender = document.getElementsByName('quiz');
	    var genValue = false;

	    for(var i=0; i<gender.length;i++){
	        if(gender[i].checked == true){
	            genValue = true;    
	        }
	    }
	    if(!genValue){
	        alert("Please Choose atleast one option");
	        return false;
	    }

	}
  
  function setCookie(cname,cvalue,exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  var expires = "expires=" + d.toGMTString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	  
	}
	
function getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i < ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}

function ourFunction(val) {
	  //alert(document.getElementsByName('option')[0].value);
	  //var user=document.getElementsByName('ques1')[0].value;
	  //setCookie("username", user, 30);
	  var selected;
	  //alert("hi");
	  var opt=document.getElementsByName('quiz');
	  for(i=0;i<opt.length;i++)
	   {
	    if(opt[i].checked)
	     {
	     var option = "g" + (i+1);
	            selected = document.getElementById(option).value;
	         // alert(option);//op1
	          // alert(selected);//a b c d
	     //selected=opt[i].value;
	     setCookie(val, selected, 30);
	     //checkCookie();
	     }
	   }

	    //document.getElementById("order").value = "You ordered a coffee with: " + txt;
	    
	    
	  }


function finalScore() {
    var score = 0;
    readTextFile("JSON/jaa.json", function(text){
    var data = JSON.parse(text);
    //alert("hi");
    for (var x in data)  {
     //alert(getCookie(x));
         if ( data[x].answer == getCookie(x) ) {
            score ++;
         }
        
      }
    //  alert(score);
    document.getElementById("demo9").innerHTML= " YOUR FINAL SCORE IS : " + score + "  Out of 4" + "<br>" + "THANK YOU FOR PLAYING :)";
    alert( " YOUR FINAL SCORE IS : "  +score);
    //document.write(score);
    }); 
 }
//document.getElementById("demo9").innerHTML=finalScore();
