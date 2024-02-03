const clik=document.querySelector('#buttonclick');
var clicked=false;
clik.addEventListener('click', function() {clicked=true;
    console.log(clicked);
  });

function getmessage(){
const message = document.getElementById('message');
console.log(message.value); 
document.getElementById('cons').innerText=message;  
}

  function add() {
    const newDiv = document.createElement('div');
    const message = document.getElementById('message');
            newDiv.innerHTML =  message;
            ele.appendChild(newDiv);
    document.getElementById('cons').innerText=message;  
  };




  
  clik.addEventListener('clik',add());