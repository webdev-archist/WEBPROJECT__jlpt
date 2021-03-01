console.log(jsonkanjidb);
sample0=jsonkanjidb[0]
container = document.createElement('div')
concated = ""
i=0
for(a in sample0){
     concated += "<b>"+i+"</b>"+a+" ;;"
     div = document.createElement('div')
     title = document.createElement('h4')
     title.textContent = a
     div.appendChild(title)
     value = document.createElement('p')
     value.textContent = sample0[a]
     div.appendChild(value)
     container.appendChild(div)
     i++
}
container.innerHTML = concated + "<hr/>" + container.innerHTML
main.appendChild(container)
