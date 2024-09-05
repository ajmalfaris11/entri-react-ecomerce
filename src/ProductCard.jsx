function ProductCard(props){
    console.log(props)
 return(
    <article className="product">
            <img
            // conditional rendering
              src={props.img?props.img:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"}
              alt=""
            />
            <div className="productDetails">
              <h3 className="h6">{props.Name}</h3>
              <div>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆ </span>
              </div> 
              <div className="priceAndButton">
                <span className="p">{props.price}</span>
                <button className="button buttonPrimary">Add to cart</button>
              </div>
            </div>
          </article>
 )
}

export default ProductCard;