let container = document.createElement("div");
container.setAttribute("class","container");


let row = document.createElement("div");

row.setAttribute('class','row');

let col = document.createElement("div");

col.setAttribute('class','col');
col.innerHTML = "this is child ";


row.append(col)
container.append(row)

document.body.append(container)