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
         return false;
     }

     hitShip(index: number) {
         // TODO MAKE SURE THAT IT CANT HIT SAME SPOT TWICE AND CANT TAKE A NUMBER LARGER THAN THE SHIP ITSELF??
         this.hit.push(index);
         return this.hit
     }

 }
 export default Ship