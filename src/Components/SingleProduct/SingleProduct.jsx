import './SingleProduct.css'
const SingleProduct = ({singleProduct}) => {
    // console.log(singleProduct);
    const {category,description,id,image,price,title} = singleProduct;
    console.log(id)
    return (
        <div className='product-container'>
            <h5>id:{id}</h5>
            <h2>Title:{title}</h2>
            <img src={image} alt="" />
            <p>details:{description}</p>
            {/* <p>hello world</p> */}
            
        </div>
    );
};

export default SingleProduct;