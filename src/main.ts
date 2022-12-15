import { HashTable } from "./hashtable";
const MyHash = new HashTable(50);
console.log(MyHash.set('Juan', 2003));
MyHash.set('Daniel',2003)
MyHash.set('Juanes', 20012)
MyHash.set('Diego',1440)
MyHash.set('Mariana', 1900)
MyHash.deleted('Daniel')
MyHash.deleted('Juan')
console.log(MyHash.data)