let decoder_name = "s%20it%20going%3F";
console.log(decodeURIComponent(decoder_name));
let coding = "How\'s it going?"
console.log(decodeURIComponent(coding));
console.log(encodeURIComponent(coding));
let web_uri = encodeURIComponent("http://www.base64encode.org/?=Hello World")
console.log(web_uri)
console.log(decodeURIComponent(web_uri))