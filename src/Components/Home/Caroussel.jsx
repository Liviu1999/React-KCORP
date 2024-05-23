import "./Caroussel.css";
import axios from "axios";
import { useState, useEffect } from "react";
function Caroussel({ name, smaller }) {
  const [products, setProducts] = useState([]);

  /**useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
  url: 'https://asos10.p.rapidapi.com/api/v1/getProductDetails',
  params: {
    productId: '1',
    currency: 'USD',
    store: 'US',
    language: 'en-US',
    sizeSchema: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'eb2f77dbb0msh359b1ac5924da26p1a0cdcjsna9392d1bd84d',
    'X-RapidAPI-Host': 'asos10.p.rapidapi.com'
  }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);**/

  return (
    <div className="container-caroussel">
      <div className="container-caroussel-head">
        <h2>{name}</h2>
        <div className="container-caroussel-head-buttons">
          <button>
            <img src="../public/arrow-left.png" alt="Left Arrow" />
          </button>
          <button>
            <img src="../public/arrow-right.png" alt="Left Arrow" />
          </button>
        </div>
      </div>
      <div
        className={
          smaller
            ? "container-caroussel-content-smaller"
            : "container-caroussel-content"
        }
      >
        <div className="container-caroussel-content-product">
          <div className="container-caroussel-content-product-img">
            <img src="../../public/photo.avif" alt="" />
          </div>
          {smaller ? <button>item</button> : <h3>item</h3>}
        </div>
        <div className="container-caroussel-content-product">
          <div className="container-caroussel-content-product-img">
            <img src="../../public/photo.avif" alt="" />
          </div>
          {smaller ? <button>item</button> : <h3>item</h3>}
        </div>
        <div className="container-caroussel-content-product">
          <div className="container-caroussel-content-product-img">
            <img src="../../public/photo.avif" alt="" />
          </div>
          {smaller ? <button>item</button> : <h3>item</h3>}
        </div>
        <div className="container-caroussel-content-product">
          <div className="container-caroussel-content-product-img">
            <img src="../../public/photo.avif" alt="" />
          </div>
          {smaller ? <button>item</button> : <h3>item</h3>}
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
