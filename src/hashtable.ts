

export class HashTable{
    public data:Array<any>;
    constructor(size:number){
        this.data = new Array(size)
    }

    /**
     * Method to return a hash Address
     * @param key Key hash 
     * @returns {number} Address
     */
    hashMethod(key:string):number{ 
        let hash:number = 0;
        for(let i: number = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) + i ) % this.data.length;
        }
        return hash;
    }

    set(key:string,value:string | number){
        const address: number = this.hashMethod(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key,value]);
        return this.data;
    }
}


