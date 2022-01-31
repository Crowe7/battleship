import Gameboard from "../gameboard";
import Ship from "../ships"

describe('Gameboard', () => {
    let gameboard: any

    beforeEach(() => {
         gameboard = new Gameboard
    });

    test('makes board', () => {
        expect(gameboard.board.length).toBe(100);
    });

    test('has each boat', () => {
        expect(gameboard.ships.length).toBe(5);
    });

    test('can log missed shot', () => {
        expect(gameboard.takeAttack(0)).toEqual('miss');
    });

    test('doesnt allow same shot twice on empty spot', () => {
        gameboard.takeAttack(0);
        expect( () => {gameboard.takeAttack(0)}).toThrow(Error);
    });

    test('doesnt allow ship to be shot in same spot', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        expect( () => {gameboard.takeAttack(0)}).toThrow(Error);
    });

    test('can place ship in empty spot', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        expect(gameboard.board.filter((index: string) => index !== '')).toEqual([{Ship: ship, isSpotHit: false, position: 1}, {Ship: ship, isSpotHit: false, position: 2}]);
    });

    test('can undo last ship placed', () => {
        let ship = new Ship(2, 'Carrier');
        gameboard.placeShip([0,1], ship);
        gameboard.undoLastShipPlace();
        expect(gameboard.board.filter((index: string) => index !== '')).toEqual([]);
    });

    test('undoing ship also lowers ships placed counter', () => {
        let ship = new Ship(2, 'Carrier');
        gameboard.placeShip([0,1], ship);
        gameboard.undoLastShipPlace();
        gameboard.undoLastShipPlace();
        expect(gameboard.shipsLeft).toBe(0);
    });

    test('doesnt allow invalid cordinates passed in', () => {
        let ship = new Ship(5, 'sub');
        expect( () => {gameboard.placeShip([6,7,8,9,10], ship)}).toThrow(Error);
    });

    test('placing ship updates how many are on board', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        expect(gameboard.shipsLeft).toBe(1);
    });

    test('can place ship vertically', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,10], ship);
        expect(gameboard.board[10]).toEqual({Ship: ship, isSpotHit: false, position: 2});
    });

    test('doesnt allow ship to be placed on another ship', () => {
        let ship = new Ship(2, 'sub');
        let ship2 = new Ship(3, 'boat');
        gameboard.placeShip([0,1], ship);
        expect( () => {gameboard.placeShip([1,2,3], ship2)}).toThrow(Error);
    });
    test('doesnt allow ship smaller than index given', () => {
        let ship = new Ship(2, 'sub');
        expect( () => {gameboard.placeShip([0,1,2], ship)}).toThrow(Error);
    });

    test('doesnt allow ship larger than index given', () => {
        let ship = new Ship(2, 'sub');
        expect( () => {gameboard.placeShip([0], ship)}).toThrow(Error);
    });

    test('spot can take a hit with ship on it', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        expect(gameboard.board[0]).toEqual({Ship: ship, isSpotHit: true, position: 1})
    });
    
    test('ship can take a hit', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        expect(gameboard.board[0].Ship.hit).toEqual([1]);
    });

    test('ship can take multiple hits', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        gameboard.takeAttack(1)
        expect(gameboard.board[1].Ship.hit).toEqual([1,2]);
    });

    test('hit can sink ship', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        gameboard.takeAttack(1)
        expect(gameboard.shipsLeft).toBe(0);
    });

    test('can report sunk ship', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        expect(gameboard.takeAttack(1)).toEqual('sub has Sunk!');
    });

    test('updates correct number of sunk ships', () => {
        let ship = new Ship(2, 'sub');
        let ship2 = new Ship(3, 'boat');
        gameboard.placeShip([0,1], ship);
        gameboard.placeShip([3,4,5], ship2);
        gameboard.takeAttack(0);
        gameboard.takeAttack(1);
        gameboard.takeAttack(3);
        gameboard.takeAttack(4);
        gameboard.takeAttack(5);
        expect(gameboard.shipsLeft).toBe(0);
    });

    test('can report when all ships sunk', () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShip([0,1], ship);
        gameboard.takeAttack(0);
        gameboard.takeAttack(1);
        expect(gameboard.checkForWin()).toEqual(true);
    });
    
    test('randomly generates correct number of indexes', () => {
        let ship = new Ship(2, 'sub');
        expect(gameboard.returnValidRandomCords(ship.length, 'random').length).toBe(2);
    });

    test('randomly generates correct number of indexes horizontally', () => {
        let ship = new Ship(2, 'sub');
        expect(gameboard.returnValidRandomCords(ship.length, 'horizontal').length).toBe(2);
    });

    test('randomly generates correct number of indexes vertically', () => {
        let ship = new Ship(2, 'sub');
        expect(gameboard.returnValidRandomCords(ship.length, 'vertical').length).toBe(2);
    });

    test('random vertical cords are valid' , () => { //checks that the first didget in each number in array matches
        let ship = new Ship(2, 'sub');
        function getFirstNumbers(array: number[]) {
            let firstNumberArray: number[] = [] // up until the for loop pushes the first number on
            let stringifiedNum: string = array[0].toString();
            let firstNum = parseInt(stringifiedNum.charAt(0));
            if(array[0].toString().length === 1) {
                firstNumberArray.push(0);
            }
            else{
                firstNumberArray.push(firstNum);
            }
            for(let i = 0; i < array.length; i++) {
                stringifiedNum = array[i].toString();
                firstNum = parseInt(stringifiedNum.charAt(0));

                if(firstNum === firstNumberArray[i - 1] + 1) {
                    firstNumberArray.push(firstNum);
                }
            }
            return firstNumberArray
        }
        expect(getFirstNumbers(gameboard.returnValidRandomCords(ship.length, 'vertical')).length).toBe(2);
    });

    test('random horizontal cords are valid' , () => { //checks that the first diget in each number in array matches
        let ship = new Ship(2, 'sub');
        function getFirstNumbers(array: number[]) {
            let firstNumberArray: number[] = []
            if(array[0] < 10 && array[1] < 10) {
                firstNumberArray.push(0);
                return firstNumberArray;
            }
            for(let i = 0; i < array.length; i++) {
                let stringifiedNum: string = array[i].toString();
                let firstNum = parseInt(stringifiedNum.charAt(0));
                if(firstNum !== firstNumberArray[0]) {
                    firstNumberArray.push(firstNum);
                }
            }
            return firstNumberArray
        }
        expect(getFirstNumbers(gameboard.returnValidRandomCords(ship.length, 'horizontal')).length).toBe(1);
    });

    test('can generate horizontal cords based on starting number', () => {
        let ship = new Ship(2, 'sub');
        expect(gameboard.generateCordsFromStartingPosition(7, 'X', ship)).toEqual([7,8]);
    });

    test('can generate horizontal cords based on starting number', () => {
        let ship = new Ship(3, 'sub');
        expect(gameboard.generateCordsFromStartingPosition(67, 'Y', ship)).toEqual([67,77,87]);
    });


    test('can place ship randomly' , () => {
        let ship = new Ship(2, 'sub');
        gameboard.placeShipRandomly(ship);
        expect(gameboard.board.filter((index: string) => index !== '')). toEqual([{Ship: ship, isSpotHit: false, position: 1}, {Ship: ship, isSpotHit: false, position: 2}]);
    });

    test('can place many ships randomly', () => {
        for(let i = 0; i <  5; i++) {
            let ship = new Ship(i + 1, 'sub');
            gameboard.placeShipRandomly(ship);
        }
        let newBoard = gameboard.board.filter((index: string) => index !== '');
        expect(newBoard.length).toBe(15);
    });

    test('can place all board ships randomly', () => {
        gameboard.placeAllShipsRandomly();
        let newBoard = gameboard.board.filter((index: string) => index !== '');
        expect(newBoard.length).toBe(17);
    });
    test
    // for testing random number placement. just test that the random numbers that it wouod put out all would align properly on the grid ie [1,2,3] not [9,10,11]
    // pass in ships length for that
    // test placing od ships by feeding the place ship function specified cordiantes and the ship in question and make sure that the output indexes match what they should be


});