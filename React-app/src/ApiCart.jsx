import { useEffect } from "react";
import { useState } from "react";
import Loader from "./components/Loaders/Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function ApiCart() {
  let [productsData, setProductsData] = useState([]);
  let [pages, setPages] = useState(1);
  let [search, setSearch] = useState("");
  let [categoryList, setCategoryList] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("");
  let [filteredProducts, setFilteredProducts] = useState([]);

  const displayProducts = !search.trim() && !selectedCategory ? productsData : filteredProducts;

  const pageCount = 10;
  const totalPages = Math.ceil(displayProducts.length / pageCount);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=100",
      );
      setProductsData(data.products);
      setFilteredProducts(data.products);
    }

    loadProducts();
  }, []);

  useEffect(() => {
    const query = search.trim();
    const controller = new AbortController();

    async function searchProducts() {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`,
        { signal: controller.signal },
      );
      setFilteredProducts(data.products);
    }

    async function category() {
      const { data } = await axios.get(
        `https://dummyjson.com/products/category/${encodeURIComponent(selectedCategory)}`,
        { signal: controller.signal },
      );
      setFilteredProducts(data.products);
    }

    if (selectedCategory) {
      category();
    } else {
      searchProducts();
    }

    return () => controller.abort();
  }, [search, selectedCategory, productsData]);

  useEffect(() => {
    async function categoryLs() {
      const { data } = await axios.get(
        "https://dummyjson.com/products/category-list",
      );
      // console.log(data);
      setCategoryList(data);
    }
    categoryLs();
  }, []);
  return (
    <>
      <center>
        <h2 className="my-3 text-primary text-decoration-underline">
          Sample Products
        </h2>
      </center>

      <div className="text-center my-3 d-flex justify-content-center align-items-center">
        {/* search field */}
        <div className="p-2 mx-3">
          <input
            type="search"
            className="form-control border-2 my-3"
            placeholder="Search products"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPages(1);
              setSelectedCategory("");
            }}
            style={{ width: "200px" }}/>
        </div>

        {/* dropdown field */}
        <div>
          <select
          className="p-2 rounded-pill border-2 text-warning border-info"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setPages(1);
            setSearch("");
          }}>
          <option value="">All categories</option>
          {categoryList.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
        </div>
      </div>

      {/* cards display */}
      <div className="d-flex justify-content-center flex-wrap my-3 g-4">
        {productsData.length === 0 ? (<Loader />) : filteredProducts.length > 0 ? (displayProducts.slice((pages - 1) * pageCount, pages * pageCount).map((product, i) => (
              <AnimatePresence>
                <motion.div
                className="col-2 card border-0 shadow text-center m-3 p-2"
                style={{ width: "250px" }}
                key={product.id}
                initial={{opacity:0, scale:0.6}}
                animate={{opacity:1, scale:1}}
                exit={{opacity:1,scale:0.6}}
                transition={{duration:1,delay:i* 0.5,ease:"easeOut"}}>
                <Link className="nav-link" key={i} to={`/products/${product.id}`} >
                <img src={product.thumbnail} height={'200px'} />
                <h2>{product.title}</h2>
                <p>
                  {product.description.length > 50 ? product.description.slice(0, 50) + "..." : product.description}
                </p>
                </Link>
              </motion.div>
              </AnimatePresence>
            ))
        ) : (<p className="text-center text-align-center text-warning">No products found.</p>)}
      </div>

      {/* pagination buttons display */}
      {totalPages > 1 && (
        <div className="d-flex align-items-center justify-content-center gap-1 mx-0">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (page) => (
              <div
                className="position-relative my-4 p-0"
                style={{ width: "2rem" }}
                key={page}>
                <div className="progress" role="progressbar" aria-label="Progress" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                  style={{ height: "1px" }}>
                  <div className="progress-bar" style={{ width: "50%" }}></div>
                </div>
                <button type="button" className={`position-absolute top-0 start-0 p-0 translate-middle btn btn-sm rounded-pill ${pages === page ? "btn-primary" : "btn-secondary"}`}
                  style={{ width: "2rem", height: "2rem" }} onClick={() => setPages(page)}>{page}</button>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}
