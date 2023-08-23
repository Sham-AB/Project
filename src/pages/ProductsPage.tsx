import React, { useContext } from "react";
import { CreateProd } from "../component/CreateProd";
import { Loader } from "../component/Loader";
import { Error } from "../component/ErrorMsg";
import { Modal } from "../component/Modal";
import { Product } from "../component/Product";
import { ModalCntxt } from "../context/ModalCntxt";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export function ProductPage(){
    const {loading, products, error, addProd} = useProducts()
    const {modal, open, close} = useContext(ModalCntxt)

    const createHandler=(product: IProduct)=>{
        close()
        addProd(product)
    }

      return ( 
        <div className='container mx-auto max-w-2xl pt-5'>
            { loading && <Loader /> }
            { error && <Error error={error} /> }
            { products.map(product => <Product product={product} key={product.id}/>) }
                

               { modal && <Modal title='Create new product' onClose={close}>
                    <CreateProd onCreate={createHandler}/>
                </Modal> }
                <button 
                className="absolute bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-1"
                onClick={open}
                >+</button>
        </div>

        )
        
}