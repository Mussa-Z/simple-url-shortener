// console.log("Console log, sentence 1.");
setInterval(function() {    
    const req = new XMLHttpRequest();        
    req.onreadystatechange = function(){     
        if (req.readyState === 4) {  
            data = JSON.parse(req.response);
            data2 = String(data.name);            
            console.log(data2);
            html = "";    
            html += "<h1>Data from API: "+ data2 +"</h1>";
            document.getElementById("test").innerHTML = html ; 
        } 
    };
    req.open("GET", "http://127.0.0.1:8000/api/return_something"); 
    req.send();    
    }, 2000);