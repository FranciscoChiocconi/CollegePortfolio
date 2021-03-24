const text = document.querySelector(".frontheader");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ""
for(let i =0, i<splitText.length(), i++){
  text.innerHTML += "<span>" + splitText[i] + "<span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  cont span = text.querySelector('span')[char];
  span.chartList.add('fade')
  char++
  if()
}
