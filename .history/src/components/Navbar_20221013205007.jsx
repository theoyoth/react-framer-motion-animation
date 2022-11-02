import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="logo"></div>
        <ul class="nav-menu">
          <li class="nav-item">HOME</li>
          <li class="nav-item">PRODUCT</li>
          <li class="nav-item">ABOUT</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
