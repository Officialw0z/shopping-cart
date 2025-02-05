import "./Header.css";
import Cart from "./Cart";

interface HeaderProps {
  cart: string[];
}

const Header = ({ cart }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__title">Book Store</h1>
      <Cart cart={cart} /> {}
    </header>
  );
};

export default Header;
