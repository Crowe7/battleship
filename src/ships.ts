interface ShipInterface {
     length: number,
     hit: number[],
     name?: string // thats for optional
     isSunk(): boolean


 
 }

 class Ship implements ShipInterface {
     length: number
     hit: number[]
     name: string

     constructor(length: number, name: string) {
         this.length = length;
         this.hit = [];
         this.name = name // maybe add a way to tell what a ship is based on length as a method maybe??
     }

     isSunk() {
         if(this.hit.length === this.length) {
             return true
         }
         else {
             return false
         }
     }

     hitShip(index: number) {
         if(this.#checkForValidHit(index) === false ) {
             return this.hit
         } 
         this.hit.push(index);
         return this.hit
     }
     #checkForValidHit(index: number) {
        for(let i = 0; i < this.hit.length; i++) {
            if(index === this.hit[i]) {
                return false
            }
        }
        return true
     }
 }
 export default Ship