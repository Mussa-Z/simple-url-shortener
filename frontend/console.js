// console.log("Console log, sentence 1.");
setInterval(function() {
    
    //Get User ID/email
    // only works when google sync is turned on.
    const p1 = chrome.identity.getProfileUserInfo();
    p1.then(
        (value) => {
          console.log(value.email); 
        }
    );
    chrome.identity.getProfileUserInfo((userInfo) => {
        console.log(userInfo);
        document.getElementById("user_email").innerHTML = "<h4>User ID: "+ userInfo.id +"</h4>";
        document.getElementById("user_id").innerHTML = "<h4>User Email: "+ userInfo.email +"</h4>";
    });
    
    // Get data from API calls. 
    // const req = new XMLHttpRequest();        
    // req.onreadystatechange = function(){     
    //     if (req.readyState === 4) {  
    //         data = JSON.parse(req.response);
    //         data2 = String(data.name);            
    //         console.log(data2);
    //         html = "";    
    //         html += "<h1>Data from API: "+ data2 +"</h1>";
    //         document.getElementById("test").innerHTML = html ; 
    //     } 
    // };
    // req.open("GET", "http://127.0.0.1:8000/api/return_something"); 
    // req.send();  
    
    const req1 = new XMLHttpRequest();        
    req1.onreadystatechange = function(){     
        if (req1.readyState === 4) {  
            data = JSON.parse(req1.response);
            data2 = String(data[0].long_url);        
            console.log(data2);
            html = "";    
            html += "<h1>Data from Newest API: "+ data2 +"</h1>";
            document.getElementById("test2").innerHTML = html ; 
        } 
    };

    //Get user request
    req1.open("GET", "http://127.0.0.1:8000/user/admin"); 
    req1.send(); 



    }, 2000);