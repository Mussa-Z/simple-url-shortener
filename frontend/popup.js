   
//(Investigate why userIdentity is not working as a universal variable)
var userIdentity;
DOMAIN = "https://musa7.pythonanywhere.com/";
chrome.identity.getProfileUserInfo((userInfo) => {
    userIdentity = userInfo.email;
    if (userInfo.email == ""){
        userIdentity = "anonymous";
    };

    //Shorten functionality
    document.getElementById("shorten_form").addEventListener("submit", shorten);

    //History
    reloadHistory(userIdentity);

    //Clear history functionality
    document.getElementById("clearHistoryButton").addEventListener("click", function(){clearHistoryFunc(userIdentity)});
   
});
function clearHistoryFunc(userIdentity) {      
    const req_del_history = new XMLHttpRequest();        
    req_del_history.onreadystatechange = function(){     
        if (req_del_history.readyState === 4) {                  
            reloadHistory(userIdentity);
        };          
    };
    req_del_history.open("DELETE", "https://musa7.pythonanywhere.com/delete/"+userIdentity); 
    req_del_history.send();
};

function reloadHistory(userIdentity){
    const req_history = new XMLHttpRequest();        
    req_history.onreadystatechange = function(){     
        if (req_history.readyState === 4) { 
            html_history = "";
            if (req_history.status != 404){
                history_data = JSON.parse(req_history.response);                
                html_history += "<h3>User: "+history_data[0].user_identifier+"</h3>";
                html_history +="<div id='history_scroll'>" ;
                html_history +="<ol>" ;
                html_history +="<dl>";
                for (var i = 0; i < history_data.length; i++) {
                    html_history +="<li>";
                    html_history += "<form id='delete_url_form' >"
                    html_history += "<dt><a target='_blank' href='"+DOMAIN+history_data[i].short_url_key+"'>"+DOMAIN+history_data[i].short_url_key+"</a></dt>";
                    html_history += "<dd>"+history_data[i].long_url+"</dd>";
                    html_history += "<input type='hidden' id='url' name='url' value='"+DOMAIN+history_data[i].short_url_key+"'>";
                    html_history += "<input class='delete_button' type='submit' value='Delete'>";
                    html_history += "</form>"
                    html_history += "</li>";                
                };
                html_history +="</dl>" ;
                html_history +="</ol>" ;
                html_history +="</div>" ;                
            };
            document.getElementById("inner_history_area").innerHTML = html_history;
            //Add listeners to individual delete buttons here.
            document.getElementById('delete_url_form').addEventListener("submit", deleteUrl); 

        } 
    };
    req_history.open("GET", "https://musa7.pythonanywhere.com/user/"+userIdentity); 
    req_history.send();
}

function shorten(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    userIdentity = userIdentity;
    url = dataObject.url;

    const req_shorten = new XMLHttpRequest();        
    req_shorten.onreadystatechange = function(){     
        if (req_shorten.readyState === 4) {                  
            reloadHistory(userIdentity);
            console.log("link:"+req_shorten.responseText);
            document.getElementById("short_url_area").innerHTML = "<p>Your Short URL:</p><a target='_blank' href='"+req_shorten.responseText+"' >"+req_shorten.responseText+" </a>";
        };          
    };
    req_shorten.open("POST", "https://musa7.pythonanywhere.com/aMv26DO/"); 
    req_shorten.setRequestHeader("Content-Type", "application/json");
    req_shorten.send(JSON.stringify({ "url": url, "user": userIdentity}));
}

function deleteUrl(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const dataObject = Object.fromEntries(data.entries());
    userIdentity = userIdentity;
    url = dataObject.url;
    const req_update = new XMLHttpRequest();        
    req_update.onreadystatechange = function(){     
        if (req_update.readyState === 4) {                  
            reloadHistory(userIdentity);
        };          
    };
    req_update.open("PUT", "https://musa7.pythonanywhere.com/EwD6y30/"); 
    req_update.setRequestHeader("Content-Type", "application/json");
    req_update.send(JSON.stringify({ "short_url": url, "user": userIdentity}));

}

// setInterval(function() {
// }, 2000);   

// onclick="chrome.tabs.create({url:this.href})"