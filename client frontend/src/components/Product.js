import React from "react";
import {data} from '../data'
import '../css/product.css'
export default function Product() {
    return (
        <>
            <section className="product">
                <div className="container">
                    <div className="row">
                        {data.map((course, index) => {
                            return (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item" key={index}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src="..." className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">
                                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                            </p>
                                            <a href="#" className="btn btn-primary">
                                                Go somewhere
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            </>
    )
}