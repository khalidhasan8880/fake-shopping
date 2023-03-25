import React from 'react';
import { fakeDb } from '../setLocalStorage/localStorage';


const Cosmatics = (props) => {
    console.log(props.product);
    const {name, price, id} = props.product
    function buyNow(id) {
        fakeDb(id)
    }

    function remove(id) {
        const dataFromLocalStorage=localStorage.getItem('shopping-cart')
        const datas = JSON.parse(dataFromLocalStorage)
        const deleteData = Object.keys(datas).filter(key => key !== id)

        console.log(deleteData);
        // for (const key in datas) {
        //     const element = datas[key]
        //     console.log(element);
        // }
    }
    return (
        <div>
            <h1>hello from cosmatics</h1>
            <h3>name : {name}</h3>
            <h3>price : {price}</h3>
            <h3>id : {id}</h3>
            <button onClick={()=> buyNow(id)}>Buy now</button>
            <button onClick={()=> remove(id)}>Remove</button>
        </div>
    );
};
export default Cosmatics;