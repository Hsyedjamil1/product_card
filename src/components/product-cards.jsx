import React from "react";
import productdesktop from "./images/image-product-desktop.jpg";
import productmobile from "./images/image-product-mobile.jpg";
import cart from "./images/icon-cart.svg";


function ProductCard() {
    return (

        <div className="container-fluid">
            <div className="center-div d-sm-flex justify-content-sm-center align-items-sm-center ">
        <div class="card mb-3" style={{maxWidth: `$(540)px`}}>
        <div class="row g-0">
          <div class="col-sm-6 col-12">
                    <img src={productdesktop} class="img-fluid productdesktop" alt="productdesktop" />
                    <img src={productmobile} class="img-fluid productmobile" alt="productmobile"/>
          </div>
                        <div class="col-sm-6 col-12">
                            <div className="container">
            <div class="card-body">
            <div class="description-container">
                <div class="product-category">P E R F U M E</div>
                <div class="product-title">
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                </div>
                <div class="product-description">
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </div>
                <div class="discount-price mb-4 ">$149.99</div>
                <div class="original-price"><s>$169.99</s></div>
                <button>
                    <img src={cart} alt="Add to Cart"/>
                    <span> Add to Cart</span>
                </button>
            </div>
            </div>
                            </div>
                            </div>
        </div>
                </div>
                </div>
            </div>
  );
}

export default ProductCard;