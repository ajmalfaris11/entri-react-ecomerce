import './App.css'

function App() {

  return (
    <>
          <header>
        <div class="container">
            <a id="logo" href="#">
                Cartify
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>

                </ul>
            </nav>
            <div class="actionLinks">
                <a href="#">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                </a>
                <a href="#">
                    <span class="material-symbols-outlined">
                        local_mall
                    </span>
                </a>

            </div>
        </div>

    </header>
    <main>
        <section id="section1">
            <div class="container">
                <div id="images">
                    <img id="image1"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                        alt="">
                    <img id="image2"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                        alt="">
                    <img id="image3"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                        alt="">
                    <img id="image4"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                        alt="">
                    <img id="mainImage"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                        alt="">
                </div>
                <div>
                    <h1 id="productTitle">Short Smocking Printed Cami Dress</h1>
                    <span class="h3 price">MRP
                        ₹<span id="price">1,490</span></span>
                    <ul class="variants">
                        <li class="variant">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                                alt="">
                        </li>
                        <li class="variant">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                                alt="">
                        </li>
                        <li class="variant">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                                alt="">
                        </li>
                        <li class="variant">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                                alt="">
                        </li>
                    </ul>
                    <p id="productDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                        doloremque explicabo cum. Iste
                        aspernatur alias quidem ullam, velit optio vero itaque. Aliquid deserunt eum incidunt nemo qui
                        quo, rerum ad? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
                        necessitatibus hic dicta suscipit consequatur velit perferendis eius pariatur fuga fugiat.
                        Nostrum hic corporis magnam velit beatae iusto officiis asperiores totam?</p>
                    <div class="buttonHolder">
                        <button class="button buttonPrimary">Add to cart</button>
                        <a class="button buttonSecondary" href="#">Buy now</a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h2>Similar products</h2>
                <div class="productsList" id="listingDiv">
                    <article class="product">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                            alt="">
                        <div class="productDetails">
                            <h3 class="h6">My product name</h3>

                            <div>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9734; </span>
                            </div>
                            <div class="priceAndButton">
                                <span class="p">$144</span>
                                <button class="button buttonPrimary">Add to cart</button>
                            </div>
                        </div>
                    </article>
                    <article class="product">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                            alt="">
                        <div class="productDetails">
                            <h3 class="h6">My product name</h3>

                            <div>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9734; </span>
                            </div>
                            <div class="priceAndButton">
                                <span class="p">$144</span>
                                <button class="button buttonPrimary">Add to cart</button>
                            </div>
                        </div>
                    </article>
                    <article class="product">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                            alt="">
                        <div class="productDetails">
                            <h3 class="h6">My product name</h3>

                            <div>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9734; </span>
                            </div>
                            <div class="priceAndButton">
                                <span class="p">$144</span>
                                <button class="button buttonPrimary">Add to cart</button>
                            </div>
                        </div>
                    </article>
                    <article class="product">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                            alt="">
                        <div class="productDetails">
                            <h3 class="h6">My product name</h3>

                            <div>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9734; </span>
                            </div>
                            <div class="priceAndButton">
                                <span class="p">$144</span>
                                <button class="button buttonPrimary">Add to cart</button>
                            </div>
                        </div>
                    </article>
                    <article class="product">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                            alt="">
                        <div class="productDetails">
                            <h3 class="h6">My product name</h3>

                            <div>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9733;</span>
                                <span>&#9734; </span>
                            </div>
                            <div class="priceAndButton">
                                <span class="p">$144</span>
                                <button class="button buttonPrimary">Add to cart</button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    </main>
    <footer></footer>
    </>
  )
}

export default App
