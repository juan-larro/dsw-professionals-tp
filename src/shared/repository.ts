/*export interface repository<T> {
    findAll(): T[] | undefined
    findONe(item: {id: string}): T | undefined
    add(item: T): T | undefined
    update(item: T): T | undefined
    delete(item: {id:string}): T | undefined
}*/
export interface repository<T> {
    findAll(): Promise<T[] | undefined>; //promise cuando accedamos a la base de datos: Promise<T[] | undefined>
    findONe(item: {id: string}): Promise<T | undefined>;
    add(item: T): Promise<T | undefined>;
    update(id:string, item: T): Promise<T | undefined>;
    delete(item: {id:string}): Promise<T | undefined>;
}