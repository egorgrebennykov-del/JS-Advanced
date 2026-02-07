class Hex{
    constructor(value)
    {
        this.value = value;
    }

    valueOf()
    {
        return(this.value);
    }

    toString()
    {
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(other)
    {
        let sum = this.value + (other instanceof Hex ? other.value : other);
        return new Hex(sum);
    }

    minus(other)
    {
        let result = this.value - (other instanceof Hex ? other.value : other);
        return new Hex(result);
    }

    static parse(hexNum){
        return parseInt(hexNum, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(Hex.parse('AAA'));