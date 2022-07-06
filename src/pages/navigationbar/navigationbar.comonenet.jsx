import "./navigationbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const NavigationBar = () => {

  return (
    <div className="nav">
      <Link to="/" className="Logo">
        <Logo />
      </Link>

      <Link to="/shop">
        <div>Shop</div>
      </Link>

      <Link to="/Sign-In">
        <div>Sign-in</div>

      </Link>
    </div>

  )
}

export default NavigationBar
