window.onload = function(){
    var ipUrl = "https://ipinfo.io/json?token=26844cb4019309"
    var appId = "appid=f5e6bdcf1a910c89d1e7a7b079f45e02";
    var location = document.getElementById("location");

    httpReqIpAsync(ipUrl);	
    

    //ip info.io api request for location
    function httpReqIpAsync(url, callback) {
		var httpReqIp = new XMLHttpRequest();
		httpReqIp.open("GET", url, true)
		httpReqIp.onreadystatechange = function() {
            if(httpReqIp.readyState == 4 && httpReqIp.status == 200) {
				var jsonIp = JSON.parse(httpReqIp.responseText)
                console.log(jsonIp);
                
            }
        }
        
        httpReqIp.send();
    }
}