import cart from "../assets/cart.svg";
import "../styles/ProductCard.css";

const ProductCard = () => {
    return (
        <section className="product-card">
            <div className="product-img"/>
            <div className="product-main">
                <div className="product-info">
                    <p className="product-type">
                        PERFUME
                    </p>
                    <h1 className="product-title">
                        Gabrielle Essence Eau De Parfum
                    </h1>
                    <p className="product-text">
                        A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                    </p>
                </div>
                <div className="product-price">
                    <h2 className="product-price-main">
                        $149.99
                    </h2>
                    <p className="product-price-msrp">
                        $169.99
                    </p>
                </div>
                <button className="product-btn">
                    <img className="product-btn-img" src={cart} alt="cart"/>
                    Add to Cart
                </button>
            </div>
        </section>
    );
}

export default ProductCard;