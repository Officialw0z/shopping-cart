import './Cart.css'

interface cartProps {
    cart: string[]
}

const Cart = ({ cart }: cartProps) => {
    return (
        <div className='cart-container'>
            <p className='cart-icon'>🛒</p>
            <span className='cart-count'>{cart.length}</span>
            <ul className='cart-items'>
                {cart.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart