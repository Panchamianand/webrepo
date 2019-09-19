function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

//usage:
function fetchQuestion(e){
 
 
 x=e;
 readTextFile("JSON/jaa.json", function(text){
    var data = JSON.parse(text);
    
    
    
    console.log(data[x].Question);
    
    document.getElementById("myData").innerHTML =  data[x].Question;
    document.getElementById("myData2").innerHTML = data[x].Option1;
    document.getElementById("myData3").innerHTML = data[x].Option2;
    document.getElementById("myData4").innerHTML = data[x].Option3;
    document.getElementById("myData5").innerHTML = data[x].Option4;
    
});
}




