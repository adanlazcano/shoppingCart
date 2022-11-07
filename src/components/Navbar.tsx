import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CarIcon } from "./CartIcon";

const { Link } = Nav;

export const Navbar = () => {

  const {cartQuantity,openCart,closeCart} = useShoppingCart()
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Link to="/" as={NavLink}>
            Home
          </Link>
          <Link to="/store" as={NavLink}>
            Store
          </Link>
          <Link to="/about" as={NavLink}>
            About
          </Link>
        </Nav>
        { cartQuantity > 0 &&
        <Button
        onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <CarIcon />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: "0",
              right: "0",
              transform:"translate(25%,25%)"
            }}
          >
           {cartQuantity}
          </div>
        </Button>
}
      </Container>
    </NavbarBs>
  );
};
