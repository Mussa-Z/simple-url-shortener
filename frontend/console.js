console.log("Console log, sentence 1.")
setInterval(function() {    
    const req = new XMLHttpRequest();        
    req.onreadystatechange = function(){
        html = "";
        var data = JSON.parse(req.response);      
        if (req.readyState === 4) {            
            html = "";
            data = JSON.parse(req.response)    
            html += "<h1>This should say something"+ String(data)+"</h1>";
            document.getElementById("test").innerHTML = html ; 
        } 
    };
    req.open("GET", "/backend/simpleurlshortener/urlshortener/api/return_something");  
    req.send();    
    }, 2000);