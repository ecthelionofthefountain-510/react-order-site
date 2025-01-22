export default function Card({ index, card, addToCart }) {
  const { name, images } = card

  return <div>
      <p>{name}</p>
      <img src={images.small} />
      <button onClick={() => addToCart(name)}>Add to cart</button>
  </div>
}