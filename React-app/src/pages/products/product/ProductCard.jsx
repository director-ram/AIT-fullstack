import './ProductCard.css'

export const ProductCard = ({name,category,price,stock,inStock,image,discount,brand,rating})=> {
    return(<>
        <article className="product-card">
          <div className="product-card-image-wrap">
            <img src={image} className="product-card-image" alt={`${brand} ${name}`} />
            <span className="product-card-discount">-{discount}%</span>
          </div>
          <div className="product-card-content">
            <p className="product-card-category">{category}</p>
            <h3 className="product-card-title">{name}</h3>
            <p className="product-card-brand">{brand}</p>
            <div className="product-card-meta">
              <strong>₹{price.toLocaleString('en-IN')}</strong>
              <span>★ {rating}</span>
            </div>
            <p className={`product-card-stock ${inStock ? 'is-available' : 'is-sold-out'}`}>
              {inStock ? `${stock} in stock` : 'Out of stock'}
            </p>
            <button type="button" className="product-card-button">View product</button>
          </div>
        </article>
    </>)
}