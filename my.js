function testGS(){

const url = "https://script.google.com/macros/s/AKfycbxwiCpNXhn58UVJhAYzspnZOAzCwgr49fJjELfm9hc1BFIRNHplQa_D6F3N3OQHbzg/exec"

fetch(url)
    .then(d => d.json())
    .then(d =>{
        document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",testGS);