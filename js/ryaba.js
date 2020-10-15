const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = "Здесь могла быть ваша реклама";
	$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);



const var1Node = $('.j-var1');
const var2Node = $('.j-var2');
const var3Node = $('.j-var3');
const var4Node = $('.j-var4');
const var5Node = $('.j-var5');
const var6Node = $('.j-var6');
const speachNode = $('.j-speach');

const btnCreate = $('.j-btn-create');
const btnReplace = $('.j-btn-replace');
const textNode = $('.j-text');


const startObj = {
  "text":[
    "Жили-были {var1} да {var2}",
    "Была у них {var3}",
    "Снесла {var3} {var4}, не простое - золотое",
    "- {var1} бил, бил - не разбил",
    "- {var2} била, била - не разбила",
    "{var5} бежала, {var6} задела, {var4} упало и разбилось.",
    "{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
  ]
};

btnCreate.click(function() {
  textNode.html(startObj.text);
})

btnReplace.click(function() {
  const var1 = var1Node.val();
  const var2 = var2Node.val();
  const var3 = var3Node.val();
  const var4 = var4Node.val();
  const var5 = var5Node.val();
  const var6 = var6Node.val();
  const speach = speachNode.val();
    
  const newObj = {
    "text":[
      `Жили-были ${var1} да ${var2}`,
      `Была у них ${var3}`,
      `Снесла ${var3} ${var4}, не простое - золотое`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила`,
      `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      `${speach}`,
    ]
  };
  
    
  textNode.html(newObj.text);
})
