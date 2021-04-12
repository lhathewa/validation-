var nav =document.body.querySelector(".nav");
var display =document.body.querySelector(".display");

var pages = [
  {
    name:"Home",
    content:"Home"
  },
  {
    name:"About",
    content:"About"
  },
  {
    name:"View",
    content:""
  }
]



for(var i=0; i<pages.length; i++){
  createPage(pages[i]);
}

function createPage(pg){
  var button =document.createElement("button");
  button.addEventListener("click", function(){
    contentWrite(pg.content, pg.name);
  })
  button.innerHTML=pg.name;
  nav.appendChild(button);
}

function contentWrite(wd,pg){
  display.innerHTML="";
  if(pg!=="About"){
    display.innerHTML=wd;
  }else{
    About()
  }
  
}

function About(){
  var header = document.createElement("h1");
  header.innerHTML="About";
  display.appendChild(header);
    var header = document.createElement("h3");
  header.innerHTML="Lane";
  display.appendChild(header);
  
  
  document.body.querySelector(".counter").innerHTML=count;
  document.body.querySelector(".butt").addEventListener("click",function(){
   
    document.body.querySelector(".counter").innerHTML=count;
  })
    
}

var list=[""];

function validate(){
  var messEle=document.body.querySelector(".valMess");
  var username=document.body.querySelector(".username").value;
   var password=document.body.querySelector(".password").value;
  if(username==="coolStudent123"){
    messEle.innerHTML="Submitted!"
  }else{
    messEle.innerHTML="Incorrect"
  }
  
}

document.body.querySelector(".validate").addEventListener("click", function(){
  validate();
})

function renderItems(){
  document.body.querySelector(".display").innerHTML="";
  for(var i=0; i<list.length; i++){
    var ele =document.createElement("div");
    ele.innerHTML=list[i];
    document.body.querySelector(".display").appendChild(ele);
  }
}

function submit(){
  var text=document.body.querySelector(".text").value;
  if(text.length!==0){
    document.body.querySelector(".subMess").innerHTML="";
     list.push(text);
  }else{
    document.body.querySelector(".subMess").innerHTML="Not enough letters"
  }
 
  renderItems();
}

document.body.querySelector(".submit").addEventListener("click", function(){
  submit();
})

renderItems();


//contentWrite(pages[0].content, "Home");