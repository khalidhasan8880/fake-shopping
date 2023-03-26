import React from 'react';
import { setDataLocalStorage } from '../setDataLocalStorage/setDataLocalStorage';


const Cosmetics = (props) => {

    function addCart(id) {
        setDataLocalStorage(id)
    }


    const { name, id, price } = props.product
    return (
        <>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://random.imagecdn.app/500/150" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>addCart(id)} className="btn btn-primary">Add Cart</button>
                        {/* <button onClick={remove} className="btn btn-primary">Delete</button> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cosmetics;