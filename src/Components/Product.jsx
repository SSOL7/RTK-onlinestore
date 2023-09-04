import React from 'react'

function Product({ name, image, title, price}) {
  return (
    <div className='products'>
        <section>
            <article>
                <h1>{title}</h1>
                <h2>{price}</h2>
                <img src={image} alt={name} />
            </article>
        </section>
    </div>
  )
}

export default Product