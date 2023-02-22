import ListNavbar from "../ListNavbar/ListNavbar";
import "./Navbar.css";

const Navbar = () => {
  return (
    <ul>
      <ListNavbar title="Productos" />
      <ListNavbar title="Servicios" />
      <ListNavbar title="Contacto" />
    </ul>
  );
};

export default Navbar;
