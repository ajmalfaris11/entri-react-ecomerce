function ProductCard(){
 return(
    <article className="product">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
              alt=""
            />
            <div className="productDetails">
              <h3 className="h6">My product name</h3>
              <div>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>☆ </span>
              </div>
              <div className="priceAndButton">
                <span className="p">$144</span>
                <button className="button buttonPrimary">Add to cart</button>
              </div>
            </div>
          </article>
 )
}

export default ProductCard;