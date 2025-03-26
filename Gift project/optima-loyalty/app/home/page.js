import Link from "next/link";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* Browse The Category Section */}
      <section className="category-section">
        <h2 className="section-title">Browse The Category</h2>
        <p className="section-subtitle">
          The best way to get the product you love.
        </p>
        <div className="category-grid">
          <div className="category-card mobile">
            <img src="/image/mobile.jpeg" alt="Mobile" />
            <h3>Mobile</h3>
          </div>
          <div className="category-card computer">
            <img src="/image/computer.jpg" alt="Computer/Laptop" />
            <h3>Computer / Laptop</h3>
          </div>
          <div className="category-card electronic">
            <img src="/image/pnter.jpeg" alt="Electronic Device" />
            <h3>Electronic Device</h3>
          </div>
        </div>
      </section>

      {/* Latest Voucher Section */}
      <section className="voucher-section">
        <h2 className="section-title">Latest Voucher</h2>
        <div className="voucher-grid">
          <div className="voucher-card">
            <img src="/image/lenovo.jpeg" alt="Lenovo 27 Monitor" />
            <h4>Lenovo 27" Monitor</h4>
            <p>2,500.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card">
            <img src="/image/lenovo2.jpeg" alt="Surface Laptop Go 2" />
            <h4>Surface Laptop Go 2</h4>
            <p>2,500.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card">
            <img src="/image/Surface4.jpg" alt="Surface Laptop 4" />
            <h4>Surface Laptop 4</h4>
            <p>7,000.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card new">
            <img src="/image/Surface5.png" alt="Surface Laptop Studio" />
            <h4>Surface Laptop Studio</h4>
            <p>8,890.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card">
            <img src="/image/headphone.jpg" alt="Lenovo Headset" />
            <h4>Lenovo Headset</h4>
            <p>1,500.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card new">
            <img src="/image/hplap.PNG" alt="HP Laptop" />
            <h4>HP Laptop</h4>
            <p>2,500.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card new">
            <img src="/image/Card.jpeg" alt="Asus RTX4070 Ti Graphic Card" />
            <h4>Asus RTX4070 Ti Graphic Card</h4>
            <p>8,799.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="voucher-card">
            <img src="/image/zt.jpg" alt="Zotac RTX4090 Graphic Card" />
            <h4>Zotac RTX4090 Graphic Card</h4>
            <p>8,799.00 Points</p>
            <button className="add-to-cart">Add to cart</button>
          </div>
        </div>
        <button className="show-more">Show More</button>
      </section>
    </div>
  );
}