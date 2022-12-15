

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

    /**
     * 
     * @param key Key Value
     * @returns Value or undefined
     */
    get(key:string){
        const address:number = this.hashMethod(key)
        const currentBucket:Array<any> = this.data[address];
        if(currentBucket){
            for(let i:number = 0; i < currentBucket.length; i++){
                if(currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }
        return undefined;
    }

    deleted(key:string){
        const address:number = this.hashMethod(key);
        let bucket: Array<any> = this.data[address];
        if(bucket){
            let newBucket = bucket.filter((Element) => Element[0] != key) 
            if(newBucket.length == 0){
                delete this.data[address] 
            }else{
                this.data[address] = newBucket
            }
            return true;
        }
        return false;
    }
}


