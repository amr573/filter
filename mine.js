let dad=document.querySelector(".dad");
let items=[
{
    img:"download.jpg",
    name:"T-shert",
    text:"the best T-shert in the Egypt . it is made in egypt and it is made from the skin ",
    button:"buy",
}
,
{
    img:"shoes.jpg",
    name:"shoes",
    text:"te best shoes in the Egypt. it is made in Egypt and is is made from skin ",
    button:"buy",
}
,
{
    img:"bag.jpg",
    name:"bag",
    text:"te best bag in the Egypt. it is made in Egypt and is is made from skin ",
    button:"buy",
}
,
{
    img:"bike.jpg",
    name:"bike",
    text:"te best bike in the Egypt. it is made in Egypt and is is made from Gold ",
    button:"buy",
}
,
{
    img:"book.jpg",
    name:"book",
    text:"te best book in the Egypt. it is made in Egypt and is is made from skin ",
    button:"buy",
}
,
{
    img:"phon.jpg",
    name:"phon",
    text:"te best phon in the Egypt. it is made in Egypt and is is made from gold ",
    button:"buy",
}
,
{
    img:"tabal.jpg",
    name:"tabal",
    text:"te best tabal in the Egypt. it is made in Egypt and is is made from gold ",
    button:"buy",
}
,
{
    img:"carsjpg.jpg",
    name:"cars",
    text:"te best cars in the Egypt. it is made in Egypt and is is made from gold ",
    button:"buy",
}
,
{
    img:"glass.jpg",
    name:"glasses",
    text:"te best glasses in the Egypt. it is made in Egypt and is is made from gold ",
    button:"buy",
}
,
{
    img:"cap.jpg",
    name:"cap",
    text:"te best cap in the Egypt. it is made in Egypt and is is made from skin ",
    button:"buy",
}
,
{
    img:"coleor.jpg",
    name:"color",
    text:"te best color in the Egypt. it is made in Egypt and is is made from best wood ",
    button:"buy",
}
,

]


let bu=document.querySelector(".bu")
let len=items.length;

      
       
        
       let inp=document.querySelector(".inp")
     

      let fillterdItem = []
      inp.addEventListener("change", () => {
        fillterdItem = items.filter(el => el.name.includes(inp.value));
        show()
      })

      function show(){
        dad.innerHTML=` `
  if(fillterdItem.length>0){
  
      fillterdItem.forEach((item)=>{
           dad.innerHTML+=`
          <div class="devo">
          <img class="img"src=${item.img} >
          <h2 class="name">${item.name}</h2>
          
          <p class="pra">${item.text}</p>
          <button class="buy">${item.button}</button>
          
          </div>`
          })
  }else{
      
    items.forEach((item)=>{
      
          dad.innerHTML+=`
        <div class="devo">
        <img class="img"src=${item.img} >
        <h2 class="name">${item.name}</h2>
        
        <p class="pra">${item.text}</p>
        <button class="buy">${item.button}</button>
        
        </div>`
      
      })
  }
  
  }
  show()