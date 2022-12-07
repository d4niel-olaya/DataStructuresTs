

export class MyArray{
    public data:any = {}
    public lenght = 0;
    
    get(value:number){
        return this.data[value];
    }

    push(element:any){
        this.data[this.lenght] = element;
        this.lenght++;
        return this.data;
    }


  

}

