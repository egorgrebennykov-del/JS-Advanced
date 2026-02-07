class List{
    constructor(){
        this.arr = [];
        this.size = 0;
    }

    add(num){
        this.arr.push(num);
        this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    }

    remove(index)
    {
        if(index < 0 || index > this.size)
        {
            throw new Error("Invalid Index");
        }
        else
        {
            this.arr.splice(index, 1);
            this.arr.sort((a, b) => a - b);
            this.size = this.arr.length;
        }
    }

    get(index)
    {
        if(index < 0 || index > this.size)
        {
            throw new Error("Invalid Index");
        }
        else
        {
            return(this.arr[index]);
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));