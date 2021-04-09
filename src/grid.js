export default class Grid {
    constructor(Board, ind){
     this.index = ind;
     this.Board = Board;
     this.empty = false; 
     this.width = this.Board.width / this.Board.dimension;
     this.height = this.Board.height / this.Board.dimension;
     this.el =  this.createDiv();
     Board.el.appendChild(this.el);
     if (this.index===this.Board.dimension * this.Board.dimension - 1){
         this.empty = true;
         return 
     }
        this.setImage();
        
    }

    createDiv(){
        const div  = document.createElement('div')

        
        
        div.style.backgroundSize = `${this.Board.width}px  ${this.Board.height}px `
        div.style.border = `1px solid black`;
        div.style.position = 'absolute'
        
        div.style.width = `${this.width}px`; 
       
        div.style.height = `${this.height}px`; 
        div.onclick = () => {
            
    
            const currentGridIndex = this.Board.findPosition(this.index);
            const emptyGridIndex  = this.Board.findEmpty();
            const {one:current_one, two:current_two} = this.getLeftRight(currentGridIndex);
            const {one:empty_one, two:empty_two} = this.getLeftRight(emptyGridIndex)

            if ((current_one===empty_one || current_two === empty_two) &&  (Math.abs(current_one-empty_one)|| Math.abs(current_two-empty_two))){
                this.Board.swapGrid(currentGridIndex, emptyGridIndex);
                this.Board.Totalslides += 1;
                this.Board.moves += 1;
                let clik = document.getElementById('full-image-holder1');
                clik.innerText = `The Total Moves = ${this.Board.moves}`
            }
            this.Board.win()
        }


        return div
    }
    setPosition(index ){
        const {left,top} = this.getPositionFromIndex(index)
        this.el.style.left = `${left}px`;
        this.el.style.top = `${top}px`;
    }

    getPositionFromIndex(index){
        const {one, two} = this.getLeftRight(index)
        return {
            left: this.width * one,
            top: this.height * two
        }
    }
    setImage() {
        const {one , two} =  this.getLeftRight(this.index)
        const left = this.width * one;
        const top = this.height * two;

        this.el.style.backgroundImage = `url(${this.Board.imageSrc})`
        this.el.style.backgroundPosition = `-${left}px -${top}px`
    }

    getLeftRight(index) {
       return  {one: (index % this.Board.dimension),
         two : Math.floor(index / this.Board.dimension)}
    }

    // timer(){
    //  const 
    // }


     
    
}