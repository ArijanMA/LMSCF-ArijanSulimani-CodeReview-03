


function Insurance(){
    
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var power = document.getElementById("power").value;
    var countries = document.getElementById("countries").value;

    var x = Math.floor((power * 100)/ number + 50);
    var y = Math.floor((power * 120)/ number + 100);
    var z = Math.floor((power * 150 / number) + 3 + 50);

  

        if ( countries == "austria"){
        document.getElementById("result").innerHTML = name + " , your insurance costs " + x +" €";
        } else if ( countries == "hungary"){
        document.getElementById("result").innerHTML = name + " , your insurance costs " + y +" €";
        } else {
        document.getElementById("result").innerHTML = name + " , your insurance costs " + z +" €";
        }
    
    }


