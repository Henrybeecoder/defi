import React, { useState } from "react"
import styles from "./style.module.css"
import { InputTemp, SelectTemp } from "../../components/InputTemp"

export const CreateProduct = ({
    addProducts,
    productId,
    setProductId,
    productName,
    setProductName,
    productType,
    setProductType,
    productDescription,
    setProductDescription,
    productStatus,
    setProductStatus,
    productStatusValue,
    setProductStatusValue,
    dateCreated,
    setDateCreated,
}) => {

    const productStatusList = [
        "Pending",
        "Success",
        "Failed"
    ]
    return (
        <div>
            <h2>Create a Product Today</h2>
            <div>
                <InputTemp
                    inputType="text"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                    placeholder="Enter your product Id"
                    width="50%"
                />
                <InputTemp
                    inputType="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter your product name"
                    width="50%"
                />
                <InputTemp
                    inputType="text"
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                    placeholder="Enter your product type"
                    width="50%"
                />
                <InputTemp
                    inputType="text"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Enter your product description"
                    width="50%"
                />
                <SelectTemp
                    mode='light'
                    options={productStatusList.map((list) => ({
                        label: list,
                        value: list,
                    }))}

                    label='Select Product Status'
                    value={productStatus}
                    onValueChange={(e: any) => {
                        setProductStatus(e.value.target)
                        setProductStatusValue(e.value)
                    }}
                />
                <InputTemp
                    inputType="text"
                    value={dateCreated}
                    onChange={(e) => setDateCreated(e.target.value)}
                    placeholder="DD/MM/YYYY"
                    width="50%"
                />
            </div>
            <button onClick={addProducts}>Add product</button>
        </div>

    )
}