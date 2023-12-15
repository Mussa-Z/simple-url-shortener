// console.log("Console log, sentence 1.");

// function fetch_url(val){

//     const req_shortURL = new XMLHttpRequest();        
//     req_shortURL.onreadystatechange = function(){     
//         if (req_shortURL.readyState === 4) {  
//             data = JSON.parse(req_shortURL.response);
//             data2 = String(data[0].short_url_key);        
//             console.log(data2);
//             html = "";    
//             html += "<h1>New Short URL here: "+ data2 +"</h1>";
//             document.getElementById("short_url_area").innerHTML = html ; 
//         } 
//     };

//     //Get user request
//     req_shortURL.open("GET", "https://musa7.pythonanywhere.com/user/"+String(val)); 
//     req_shortURL.send(); 

// }


   
//(Strangest thing, this variable is not acting like a universal variable)
var userIdentity;
chrome.identity.getProfileUserInfo((userInfo) => {

    //POST Area
    userIdentity = userInfo.email;
    //Send anonymous if user not logged in:
    if (userInfo.email == ""){
        userIdentity = "anonymous";
    };
    user_html = ""
    user_html += "<form action='https://musa7.pythonanywhere.com/aMv26DO/' method='post' class='form' enctype='multipart/form-data'>";
    user_html += "<input type='hidden' id='user' name='user' value='"+ userIdentity+"'>";
    user_html += "<input type='text' id='url' placeholder='Enter original URL' name='url'><br>";
    user_html += "<input class='shorten_button' type='submit' value='Shorten'>";
    user_html += "</form>";
    document.getElementById("original_url_area").innerHTML = user_html;
    //End of POST Area


    //History
    const req_history = new XMLHttpRequest();        
    req_history.onreadystatechange = function(){     
        if (req_history.readyState === 4) {  
            history_data = JSON.parse(req_history.response);                
            console.log(history_data);
            html_history = "<h1 class='history'>History</h1>";
            html_history += "<h3>User: "+history_data[0].user_identifier+"</h3>";
            html_history +="<ol>" ;
            html_history +="<dl>";
            for (var i = 0; i < history_data.length; i++) {
                html_history +="<li>";
                html_history +="<dt>"+history_data[i].short_url_key+"</dt>";
                html_history +="<dd>"+history_data[i].long_url+"</dd>";
                html_history += "<input class='delete_button' type='submit' value='Delete'>";
                html_history +="</li>";
                
            };
            html_history +="</dl>" ;
            html_history +="</ol>" ;
            document.getElementById("history_area").innerHTML = html_history ; 
        } 
    };
    console.log("Should be user id:"+userIdentity);
    req_history.open("GET", "https://musa7.pythonanywhere.com/user/"+userIdentity); 
    req_history.send();

});






setInterval(function() {



    //for change in input box
    // const input = document.getElementById('url');
    // input.addEventListener("change", updateValue);
    // function updateValue(e) {
    //     console.log("this value"+e.target.value);

    //     const req5 = new XMLHttpRequest();        
    //     req5.onreadystatechange = function(){     
    //         if (req5.readyState === 4) {  
    //             data = JSON.parse(req5.response);
    //             data2 = String(data[0].short_url_key);        
    //             console.log("Did we get data?????"+data2);
    //             html5 = "";    
    //             html5 += "<h3>New Short URL here: "+ data2 +"</h3>";
    //             document.getElementById("short_url_area").innerHTML = html5 ; 
    //         } 
    //     };
    //     //Get user request
    //     req5.open("GET", "https://musa7.pythonanywhere.com/user/"+String(e.target.value)); 
    //     req5.send();
    // }
    //End of change in input box 





    
    //Get User ID/email
    // only works when google sync is turned on.
    // const p1 = chrome.identity.getProfileUserInfo();
    // p1.then(
    //     (value) => {
    //       console.log(value.email); 
    //     }
    // );
    // chrome.identity.getProfileUserInfo((userInfo) => {
    //     console.log(userInfo);
    //     document.getElementById("user_email").innerHTML = "<h4>User ID: "+ userInfo.id +"</h4>";
    //     document.getElementById("user_id").innerHTML = "<h4>User Email: "+ userInfo.email +"</h4>";
    //     user_html = "<p>New area:</p>"
    //     user_html += "<form action='https://musa7.pythonanywhere.com/aMv26DO/' method='post' class='form' enctype='multipart/form-data'>";
    //     user_html += "<input type='hidden' id='user' name='user' value='"+ userInfo.email+"'>";
    //     user_html += "<input type='text' id='url' placeholder='Enter original URL' name='url'><br>";
    //     user_html += "<input class='shorten_button' type='submit' value='Shorten'>";
    //     user_html += "</form>";
    //     document.getElementById("original_url_area").innerHTML = user_html;
         



    // });
    
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
    
    // const req_shortURL = new XMLHttpRequest();        
    // req_shortURL.onreadystatechange = function(){     
    //     if (req_shortURL.readyState === 4) {  
    //         data = JSON.parse(req_shortURL.response);
    //         data2 = String(data[0].short_url_key);        
    //         console.log(data2);
    //         html = "";    
    //         html += "<h1>Data from Newest API: "+ data2 +"</h1>";
    //         document.getElementById("test2").innerHTML = html ; 
    //     } 
    // };

    //Get user request
    // req_shortURL.open("GET", "https://musa7.pythonanywhere.com/user/admin"); 
    // req_shortURL.send(); 



    }, 2000);   