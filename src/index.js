
import {images}  from './firebase'
import Board from "./Board"

// const randomPic = images[Math.floor(Math.random() * images.length)]; 
// const picUrl = "https://firebasestorage.googleapis.com/v0/b/slide-me-3f77d.appspot.com/o/beach.jpg?alt=media&token=34edc020-84b5-4b47-a516-57251871eaef"


const clickHandler = function (Imgsrc) {
  return () => {
    const Img = Imgsrc
   
    const e = document.getElementById('level')
    var value = e.options[e.selectedIndex].value;
    document.getElementById('outer').style.display = "none"
    const el = document.getElementById("image-holder");
    el.removeChild(el.firstChild)
    new Board(el, Img, 600, value)
  }
}
const level =  function(){
  return (event) => {
    const ImgSrc = event.currentTarget.src
    document.getElementById('outer').style.display = "block";
    
  let enter = document.getElementById('enter'); 
  enter.addEventListener('click', clickHandler(ImgSrc));
  }
}


const Instruction = function(){

    const ra = document.createElement('div')
    ra.innerHTML = "PLEASE CLICK ON A PICTURE  TO CHOOSE AND  PLAY "
    ra.setAttribute('class', 'instructions')
    return ra
    
}


document.addEventListener('DOMContentLoaded', 

function(){
  const picturesContainer = document.getElementById("container")
  document.getElementById('image-holder').appendChild(Instruction())
  console.log(picturesContainer);
      for(let i = 0; i< images.length; i++) {
          let pic1 = new Image()
          pic1.src = images[i];
        pic1.setAttribute('Id', `smallpic${i}`)
        picturesContainer.appendChild(pic1)
      }
      
      for (let i = 0; i < 14; i++){
        let smallpic = document.getElementById(`smallpic${i}`)
        smallpic.addEventListener('click', level());
      };
    }()


);




