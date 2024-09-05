function ProductCard(props){
    console.log(props)
 return(
    <article className="product">
            <img
              src={props.img}
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