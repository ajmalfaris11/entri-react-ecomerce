function ProductCard(props) {
  // console.log(props);

  const starElements = [];
  const isDecimal = !Number.isInteger(props.star) ? true : false;
  console.log(isDecimal)

  // Use a for loop to populate the starElements array
  for (let i = 0; i < 5; i++) {
    if(isDecimal && i === Math.floor(props.star)){

      starElements.push(
        <span>
          ✬
        </span>
      );
      
      continue;
    }
    starElements.push(
      <span>
        {i < props.star ? '★' : '☆'}
      </span>
    );

  }
 
  return (
    <article className="product">
      <img
        // conditional rendering
        src={
          props.img
            ? props.img
            : "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
        }
        alt=""
      />
      <div className="productDetails">
        <h3 className="h6">{props.Name}</h3>
        <div>
          {starElements} {/* Render the array of star elements */}
        </div>
        <div className="priceAndButton">
          <span className="p">${props.price}</span>
          <button className="button buttonPrimary">Add to cart</button>
        </div>
      </div>
    </article>

  );
}

export default ProductCard;
