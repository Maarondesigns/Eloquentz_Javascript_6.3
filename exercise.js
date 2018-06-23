class Group{
//creates empty array when new Group is called
    constructor (){
        this.group = [];
    }

//adds number to group if it doesn't exist    
    add(num){
        if (this.group.indexOf(num) === -1){
            this.group.push(num);
        }
    }

//deletes number from group if it exists
    delete(num){
        let index = this.group.indexOf(num);
        if (index !== -1){
            this.group.splice(index, 1);
        }
    }

 //checks if group has number and returns true or false
    has(num){
        if (this.group.indexOf(num) !== -1){
            return true;
        } 
        return false;
    }
//iterates over arguments and adds them to group
    // static from([...args]){
    //     let group = new Group;
    //     for (let num in args){
    //         group.add(args[num]);
        
    //     }
    //     return group;
    //}

//iterates over range from num1 to num2 and adds everything in range to group
    static from([num1, num2]){
        let group = new Group;
        while (num1 <= num2){
            group.add(num1);
            num1++;
        }
        return group;
    }

// generates iterable object
    [Symbol.iterator]() {
        return new GroupIterator(this);
      }
}

//allows iterable object to be iterated one value at a time with next() function.
class GroupIterator{
    constructor(array){
        this.num = 0;
        this.array = array;
    }

    next(){
        if (this.num >= this.array.group.length){
            return {done: true};
        };
        let value = this.array.group[this.num];
        this.num++;
        return {value, done: false};
    }
}
//end of solution


//testing what we get...

let range = Group.from([10, 20]);

console.log(range[Symbol.iterator]());

    // {num: 0, array: {
    //     group:	[
    //         0:	10
    //         1:	11
    //         2:	12
    //         3:	13
    //         4:	14
    //         5:	15
    //         6:	16
    //         7:	17
    //         8:	18
    //         9:	19
    //         10:	20
    //     ]
    // }}

let rangeIter = new GroupIterator(range);

for (let value of group.group){
    console.log(rangeIter.next())
}

    // {value: 10, done: false}
    // {value: 11, done: false}
    // {value: 12, done: false}
    // {value: 13, done: false}
    // {value: 14, done: false}
    // {value: 15, done: false}
    // {value: 16, done: false}
    // {value: 17, done: false}
    // {value: 18, done: false}
    // {value: 19, done: false}
    // {value: 20, done: false}

console.log(rangeIter.next())

// {done: true}