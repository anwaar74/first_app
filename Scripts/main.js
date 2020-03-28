
now = new Date();
localtime = now.toString();
utctime = now.toGMTString();
hour = now.getHours();
min = now.getMinutes();
sec = now.getSeconds();

document.write("<b>Local time:</b> " + localtime + "<BR>");
document.write("<b>UTC time:</b> " + utctime);
var myarray = ['a', 'b', 'c', 'd', 123, 5678];
alert(localtime);
console.log(localtime);
console.log(myarray[1], myarray[4]);
console.log(hour + ':' + min + ':' + sec);