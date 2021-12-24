function testGS(){

const url = "https://script.google.com/macros/s/AKfycbz7I27_U1dcgnOMd48Pg8ltyWgphA1MxV8gSgII2lL2h_N1F1kZzFLDLXmBi7Ync-Ixhg/exec"

fetch(url)
    .then(d => d.json())
    .then(d =>{
        document.getElementById("app").textContent = d[0].status;
    });
}

function addGS(){

    const url = "https://script.google.com/macros/s/AKfycbz7I27_U1dcgnOMd48Pg8ltyWgphA1MxV8gSgII2lL2h_N1F1kZzFLDLXmBi7Ync-Ixhg/exec"
    
    fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({name:"Virtalik"}) // body data type must match "Content-Type" header
      });
        
    }

document.getElementById("btn").addEventListener("click",testGS);
document.getElementById("btn2").addEventListener("click",addGS);
