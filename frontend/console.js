   
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
            
            html_history = "<h3>User: "+history_data[0].user_identifier+"</h3>";

            html_history +="<div id='history_scroll'>" ;
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
            html_history +="</div>" ;
            document.getElementById("inner_history_area").innerHTML = html_history ; 
        } 
    };
    req_history.open("GET", "https://musa7.pythonanywhere.com/user/"+userIdentity); 
    req_history.send();



    //Clear history functionality:
    document.getElementById("clearHistoryButton").addEventListener("click", function(){ClearHistoryFunc(userIdentity)});
    

});
function ClearHistoryFunc(userIdentity) {      
    const req_del_history = new XMLHttpRequest();        
    req_del_history.onreadystatechange = function(){     
        if (req_del_history.readyState === 4) {                  
            alert("Succesfully cleared your user history.");}; 
         
    };
    req_del_history.open("DELETE", "https://musa7.pythonanywhere.com/delete/"+userIdentity); 
    req_del_history.send();
};

function ReloadHistory(userIdentity){
    
}

// setInterval(function() {
// }, 2000);   