const sort_y=document.querySelector(".y__movebox");function sortYMove(){for(let t of sort_y.children){let e=new Draggabilly(t,{axis:"y",containment:!0,grid:[10,10]}),n=e.position.y;e.on("pointerUp",(function(){if(e.position.y<=20){e.setPosition(0,n);let t=e.element.textContent;e.element.textContent=sort_y.children[0].textContent,sort_y.children[0].textContent=t}else if(e.position.y<=80){let t=e.element.textContent;e.setPosition(0,n),e.element.textContent=sort_y.children[1].textContent,sort_y.children[1].textContent=t}else if(e.position.y<=140){let t=e.element.textContent;e.setPosition(0,n),e.element.textContent=sort_y.children[2].textContent,sort_y.children[2].textContent=t}else if(e.position.y<=200){let t=e.element.textContent;e.setPosition(0,n),e.element.textContent=sort_y.children[3].textContent,sort_y.children[3].textContent=t}else if(e.position.y<=260){let t=e.element.textContent;e.setPosition(0,n),e.element.textContent=sort_y.children[4].textContent,sort_y.children[4].textContent=t}else{let t=e.element.textContent;e.setPosition(0,n),e.element.textContent=sort_y.children[5].textContent,sort_y.children[5].textContent=t}}))}}function sortYScore(){for(let t=0;t<contentSortY.length;t++)sort_y.children[t].textContent==contentSortY[t]?(userSortY+=1,sort_y.children[t].style.border="2px solid green"):sort_y.children[t].style.border="2px solid red"}sortYMove();