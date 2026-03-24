function Product(props){ 
    //{props:productObj :{}}
    const {productObj}=props
    //state
    

    //return
    return(
        <div >
            <h1 className="text-3xl text-blue-600">{productObj.title}</h1>
            <h1>{productObj.description}</h1>
        </div>
);
}

export default Product