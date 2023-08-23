import React, { useState } from 'react'
import { CreateProduct } from './Screens/createProduct/createProduct';
import { ProductList } from './Screens/ProductList/ProductList';

export const Home = () => {
    const initialState = [
        {
        id: "1",
    name: "Beans",
    type: 'Protain',
    description: "good for you",
    productStatus: "success",
    dateCreated: "1/01/22",
        },
        {
            id: "2",
        name: "Beans",
        type: 'Protain',
        description: "good for you",
        productStatus: "success",
        dateCreated: "1/01/22",
            },
      ];
      const [productId, setProductId] = useState("")
      const [productName, setProductName] = useState("")
      const [productType, setProductType] = useState("")
      const [productDescription, setProductDescription] = useState("")
      const [productStatus, setProductStatus] = useState("")
      const [productStatusValue, setProductStatusValue] = useState("")
      
      const [dateCreated, setDateCreated] = useState("")
  
      const [productRealList, setproductRealList] = useState(initialState);
     
    const [dynamicRoute, setDynamicRoute] = useState(true)
    const addProducts = () => {
        // 👇️ push an object to the end of the state array
        setproductRealList(current => [...current, {id: productId, name: productName, type: productType, description: productDescription, productStatus: productStatusValue, dateCreated: dateCreated }]);
       setDynamicRoute(true)
       
      };
    const createAProductRoute = () => {
        setDynamicRoute(false)
    }
    return (
        <div>
            {
                dynamicRoute ?
                    (
                        <>
                            <button onClick={createAProductRoute}>Create a Product</button>
                            <ProductList productRealList={productRealList}/>
                        </>
                    ) : (<CreateProduct addProducts={addProducts} productId={productId} setProductId={setProductId} productName={productName} setProductName={ setProductName} productType={productType} setProductType={setProductType} productDescription={productDescription} setProductDescription={setProductDescription} productStatus={productStatus} setProductStatus={setProductStatus} productStatusValue={productStatusValue} setProductStatusValue={setProductStatusValue} dateCreated={dateCreated} setDateCreated={setDateCreated}/>)}


        </div>
    )
}