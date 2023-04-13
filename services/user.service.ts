import axios, {Axios, AxiosResponse} from 'axios';
import {IUser} from "../interfaces/user.interface";
// const userService = {
//     getAll:(): Promise<AxiosResponse<IUser>> => axios('https://jsonplaceholder.typicode.com/users/1'),
//     getById: (id:number) => axios ('https://jsonplaceholder.typicode.com/users/1')
// }
// або можна винести частину окремо
type IRes<T> = Promise<AxiosResponse<T>>
export const userService = {
    getAll:(): IRes<IUser[]> => axios('https://jsonplaceholder.typicode.com/users'),
    getById: (id:number): IRes<IUser> => axios ('https://jsonplaceholder.typicode.com/users/'+id)
}