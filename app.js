function genQR() {
  var url = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs="

  var image= document.getElementById("img")
  var textIn= document.getElementById("qrtext").value;
  var imgSize= document.getElementById("size").value;

  if(textIn!="" && imgSize=="100"){
    image.src=url+"100x100"+"&ch1="+textIn;
    // https://chart.googleapis.com/chart?cht=qr&chs=100x100&ch1=hello
  }
  else if(textIn!="" && imgSize=="150"){
    image.src=url+"150x150"+"&ch1="+textIn;
  }
  else if(textIn!="" && imgSize=="256"){
    image.src=url+"256x256"+"&ch1="+textIn;
  }
  else if(textIn!="" && imgSize=="512"){
    image.src=url+"512x512"+"&ch1="+textIn;
  }
  else {
    alert("Please Enter Text !");
  }
}
