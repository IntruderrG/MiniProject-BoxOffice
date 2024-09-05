//general:Gets the scoller elements 
const general = document.getElementsByClassName("general");
//all of them gets the text blocks
const getText1 = document.getElementsByClassName("mainText")[0];
const getText2= document.getElementsByClassName("mainText2")[0];
const getText3= document.getElementsByClassName("mainText3")[0];
const getText4= document.getElementsByClassName("mainText4")[0];
const getText5= document.getElementsByClassName("mainText5")[0];
//binds all above elemts into an array
const arrTxt=[getText1,getText2,getText3,getText4,getText5]
//makes foreach usable array
const finArr=Array.from(arrTxt)//Stores array of all the text elements


//Stores the arrray of the image divs inside the general
const Arrgeneral = Array.from(general);

//adds functionality to the scoller
function slider(event) {
  const storeTarget = event.currentTarget; // Use currentTarget to get the div
  storeTarget.classList.add("grow");
  // console.log("Hi I am",storeTarget.id)
  changedisplayType(storeTarget.id)//funciton

  //Just for functioning knowledge
  // getText.style.display = "block";
  // console.log("I am the id: ",fetchId);
  // console.log("I am the TARGET", event.target);
  // console.log("I am the CURRENT TARGET", event.currentTarget);
}
//removes the functionality from the scroller
function removeslider(event) {
  const storeTarget = event.currentTarget; // Use currentTarget to get the div
  storeTarget.classList.remove("grow");
  finArr.forEach((inp)=>inp.style.display="none")
  // console.log(storeTarget.classList);
}

//Controls display of the text
function changedisplayType(fetchId){
  if (fetchId==1){
    finArr.forEach((inp)=>inp.style.display="none")
    getText1.style.display = "block";
  }
  if (fetchId==2){
    finArr.forEach((inp)=>inp.style.display="none")
    getText2.style.display = "block";
  }
  if (fetchId==3){
    finArr.forEach((inp)=>inp.style.display="none")
    getText3.style.display = "block";
  }
  if (fetchId==4){
    finArr.forEach((inp)=>inp.style.display="none")
    getText4.style.display = "block";
  }
   if (fetchId==5){
    finArr.forEach((inp)=>inp.style.display="none")
    getText5.style.display = "block";
  }
}
Arrgeneral.forEach((inp) => {
  inp.addEventListener("mouseover", slider);
  inp.addEventListener("mouseout", removeslider);
});
