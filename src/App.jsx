import './App.css'
import Header from './Header' ;
import ProductCard from './ProductCard';
import products from './Data/products.json';

function App() {

  return (
    <>
  <>
  <Header/>
  <main>
    <section id="section1">
      <div className="container">
        <div id="images">
          <img
            id="image1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
            alt=""
          />
          <img
            id="image2"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
            alt=""
          />
          <img
            id="image3"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
            alt=""
          />
          <img
            id="image4"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
            alt=""
          />
          <img
            id="mainImage"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
            alt=""
          />
        </div>
        <div>
          <h1 id="productTitle">Short Smocking Printed Cami Dress</h1>
          <span className="h3 price">
            MRP ₹<span id="price">1,490</span>
          </span>
          <ul className="variants">
            <li className="variant">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                alt=""
              />
            </li>
            <li className="variant">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                alt=""
              />
            </li>
            <li className="variant">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                alt=""
              />
            </li>
            <li className="variant">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEXY2Njo6Oie6BDVAAABDUlEQVR4nO3PAQ0AIAzAsOPfNCoIGbQKtpnHrdsBxznsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77HPY57HPY57DPYZ/DPod9Dvsc9jnsc9jnsM9hn8M+h30O+xz2Oexz2Oewz2Gfwz6HfQ77Pjjcs3wA4s0RAgUAAAAASUVORK5CYII="
                alt=""
              />
            </li>
          </ul>
          <p id="productDescription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            doloremque explicabo cum. Iste aspernatur alias quidem ullam, velit
            optio vero itaque. Aliquid deserunt eum incidunt nemo qui quo, rerum
            ad? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem necessitatibus hic dicta suscipit consequatur velit
            perferendis eius pariatur fuga fugiat. Nostrum hic corporis magnam
            velit beatae iusto officiis asperiores totam?
          </p>
          <div className="buttonHolder">
            <button className="button buttonPrimary">Add to cart</button>
            <a className="button buttonSecondary" href="#">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Similar products</h2>
        <div className="productsList" id="listingDiv">
        <ProductCard Name="Classic Navy Suit" price="$800" img="https://th.bing.com/th/id/OIP.q8d6VWs83ogInrjy8AiABwHaLE?w=186&h=278&c=7&r=0&o=5&dpr=1.6&pid=1.7"/>
        <ProductCard Name="Gray Wool Blazer" price="$350" img="https://th.bing.com/th/id/R.f953f0316250fb25c0d20046f3d85c24?rik=%2f3ZJZCUsHohcsw&riu=http%3a%2f%2fcdnc.lystit.com%2fphotos%2f2012%2f08%2f29%2four-legacy-grey-grey-textured-wool-3-button-rolling-blazer-product-1-4601053-624570913.jpeg&ehk=yuLpyXkXHH%2b4vWcBD6InDOmkD2Em8nG6ra%2fDte8eogg%3d&risl=&pid=ImgRaw&r=0"/>
        <ProductCard Name="Black Dress Pants" price="$200" img="https://th.bing.com/th/id/OIP.z0abtC4F-V_kNFR5ZsB7YwHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.6&pid=1.7"/>
        <ProductCard Name="White Dress Shirt" price="$100" img="https://th.bing.com/th/id/OIP.46iJJvIYoOco43vkIm2V0wHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.6&pid=1.7"/>
        <ProductCard Name="Leather Dress" price="$250" img="https://th.bing.com/th/id/OIP.z6iTTHOEnnQ4r8tSdE-mjgHaMD?w=186&h=303&c=7&r=0&o=5&dpr=1.6&pid=1.7"/>
        <ProductCard Name="Silk Tie" price="$75"/>
        <ProductCard Name="Brown Leather Belt" price="$50"/>
        <ProductCard Name="Tailored Vest" price="$150"/>
        <ProductCard Name="Patterned Pocket " price="$30"/>
        <ProductCard Name="Overcoat" price="$400"/>
        </div>
      </div>
    </section>
  </main>
  <footer />
</>

    </>
  )
}

export default App
