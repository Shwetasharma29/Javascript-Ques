
class stack{
    constructor()  {
        this.data= [];
    }
    push(record){
        this.data.push(record)
    }
    pop(){
        return this.data.pop(record)
    }
    peek(){
        return this.data(this.data.length-1)
    }
}