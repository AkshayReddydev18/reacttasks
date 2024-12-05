import { Component } from "react";
import "./main.css";
import iphone from "../images/iphone.jpg"
import iqoo from "../images/iqoo.jpg"
import redmi from "../images/redmi.webp"
import vivo from "../images/vivo.jpg"

const products = [
  {
    productName: "Iphone",
    productPrice: 50000,
    productImage:iphone,
    productAvailability: true,
  },
  {
    productName: "Iqoo",
    productPrice: 25000,
    productImage:iqoo,
    productAvailability: false,
  },
  {
    productName: "Redmi",
    productPrice: 30000,
    productImage:redmi,
    productAvailability: true,
  },
    {
    productName: "Vivo",
    productPrice: 20000,
    productImage:vivo,
    productAvailability: true,
  },
];

class Main extends Component {
  render() {
    return (
      <>
        <h1 style={styles.available}>
          {products.productName}
          {products.productPrice}
        </h1>
        <div className="mainbox">
          <div
            className={
              products.productAvailability ? "available" : "unavailable"
            }
          >
            <h1>{products[0].productName}</h1>
            <h1>{products[0].productPrice}</h1>
            <img src={products[0].productImage} alt="Iphone" />
          </div>
          <div
            className={
              products[1].productAvailability ? "available" : "unavailable"
            }
          >
            <h1>{products[1].productName}</h1>
            <h1>{products[1].productPrice}</h1>
            <img src={products[1].productImage} alt="" />
          </div>
          <div
            className={
              products[2].productAvailability ? "available" : "unavailable"
            }
          >
            <h1>{products[2].productName}</h1>
            <h1>{products[2].productPrice}</h1>
            <img src={products[2].productImage} alt="" />
          </div>
          <div
            className={
              products[3].productAvailability ? "available" : "unavailable"
            }
          >
            <h1>{products[3].productName}</h1>
            <h1>{products[3].productPrice}</h1>
            <img src={products[3].productImage} alt="" />
          </div>
        </div>
      </>
    );
  }
}
const styles = {
  available: { color: "green" },
  unavailable: { color: "red" },
};
export default Main;
