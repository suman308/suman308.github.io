import grid from './grid';

 class Board {
    constructor(el, img1,  width, n = 3){
        
         this.moves = 0
         this.name = ""
         this.parentEl = el; 
         this.width = width; 
         this.index = 0
         this.imageSrc = img1
         this.dimension = n 
         this.grids = [];
         this.totalslides = 0 ;
         this.init()
         const img = new Image(); 
         img.onload = ()=> {

             this.height = img.height * this.width / img.width
             this.el.style.width = `${this.width}px`
             this.el.style.height = `${this.height}px`
             this.setup()
          }

        img.src = this.imageSrc;
        this.fullPicture();
        this.restart();
       
        
        }
        
    init(){
            this.el = this.createWrapper(); 
            this.parentEl.appendChild(this.el);
      
        
    }
    
    createWrapper(){
        const div = document.createElement('div');
        div.style.position = 'relative';
        div.style.margin = '0 auto'
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
     
        return div;
    }
    
    setup(){
        
      for(let i = 0; i < (this.dimension * this.dimension ); i++){
        
           this.grids.push(new grid(this, i));
      }
      this.shuffle();
    }

    shuffle(){
        for(let i = this.grids.length -1; i > 0; i--){
          
             const j = Math.floor(Math.random() * (i+1));
           
             [this.grids[i], this.grids[j]] = [this.grids[j], this.grids[i]]
             this.grids[i].setPosition(i)
             this.grids[j].setPosition(j)
        }
        
    }

   swapGrid(x, y) {
     [this.grids[x], this.grids[y]] = [this.grids[y], this.grids[x]]
     this.grids[x].setPosition(x);
     this.grids[y].setPosition(y)
   }


    findPosition(ind){
      return this.grids.findIndex(grid=> grid.index === ind)
    }

    findEmpty(){
      return this.grids.findIndex(grid => grid.empty === true)
    }
    
   fullPicture() {
     const el = document.getElementById("full-image-holder");
     el.removeChild(el.firstChild)
     const e = new Image();
     e.style.width = '200px'
     e.style.height = '200px'
     e.src = this.imageSrc;
     el.appendChild(e);
   }
    
    restart(){
      const div = document.getElementById('Restart') 
      div.addEventListener("click", this.shuffle.bind(this));
    }
    

    win(){
      let count = 0
      let i = 0; 
      while(i < this.grids.length ){
        if (i === this.grids[i].index){
          count += 1
        }

        i ++
      }
      
      
      if(count > (this.grids.length)-1){
        setTimeout(function () { 
          window.alert("Congrats You won"); 
           location.reload()}, 0)
           
       }

      }

    // changePic(){
    //   const nextPic1 = document.getElementById('nextImage')
    
    //   nextPic1.addEventListener('click',  ()=> {
    //     this.nextPic()}
    //    )

    // }

    

   
 }

export default Board; 