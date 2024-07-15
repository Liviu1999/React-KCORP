import { useState } from "react";
import "./navbar.css";
import "./Components/Home/Video.css";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import ReviewBag from "./Components/ReviewBag";

function Navbar() {
  const [hidden, setHidden] = useState(true);
  const [hiddenSec, setHiddenSec] = useState(true);
  const [hiddenThird, setHiddenThird] = useState(true);
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <nav>
        <img src="/Kcorp-Logo.svg" alt="Kcorp Logo" />
        <div className="nav-categories">
          <ul>
            <Link
              className="li"
              to="/"
              onMouseEnter={() => [
                setHidden(true),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Accueil
            </Link>
            <Link
              className="li"
              to="/"
              onMouseEnter={() => [
                setHidden(false),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Kcorp
            </Link>
            <Link
              className="li"
              to="/esport"
              onMouseEnter={() => [
                setHiddenSec(false),
                setHidden(true),
                setHiddenThird(true),
              ]}
            >
              Esports
            </Link>
            <Link
              className="li"
              to="/ultras"
              onMouseEnter={() => [
                setHidden(true),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Ultras
            </Link>
            <Link
              className="li"
              to="/partenaires"
              onMouseEnter={() => [
                setHidden(true),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Partenaires
            </Link>
            <Link
              className="li"
              to="/product/kc"
              onMouseEnter={() => [
                setHiddenThird(false),
                setHidden(true),
                setHiddenSec(true),
              ]}
            >
              Boutique
            </Link>
          </ul>
        </div>
        <div className="nav-right">
          <div className="icon-right">
            {" "}
            <CiHeart style={{ width: "80%", height: "80%" }} />
          </div>
          <div className="icon-right">
            {" "}
            <CiShoppingCart
              className="hover:cursor-pointer"
              onClick={() => setIsHidden(!isHidden)}
              style={{ width: "80%", height: "80%" }}
            />
          </div>
          <div className="icon-right">
            {" "}
            <CgProfile style={{ width: "80%", height: "80%" }} />
          </div>
        </div>
      </nav>

      <div>
        {hidden ? null : (
          <div className="nav-down" onMouseLeave={() => setHidden(true)}>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
          </div>
        )}
      </div>

      <div>
        {hiddenSec ? null : (
          <div className="nav-down" onMouseLeave={() => setHiddenSec(true)}>
            <div className="nav-down-ul">
              <ul>
                <li>Nos jeux</li>
                <li>LOL</li>
                <li>Valo</li>
                <li>RL</li>
                <li>TFT</li>
                <li>Valo GC</li>
              </ul>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
          </div>
        )}
      </div>
      <ReviewBag isHidden={isHidden} setIsHidden={setIsHidden} />
      <div>
        {hiddenThird ? null : (
          <div className="nav-down" onMouseLeave={() => setHiddenThird(true)}>
            <div className="nav-down-ul">
              <ul>
                <li>Nos collection</li>
                <li>Essentials</li>
                <li>Pro Kit</li>
                <li>Monogramme</li>
                <li>KCX3</li>
                <li>Nos produits</li>
              </ul>
            </div>
            <div className="nav-down-ul">
              <ul>
                <li>Accessoires</li>
                <li>Piece of history</li>
                <li>Accessoires</li>
                <li>Logitech</li>
                <li>Quersus</li>
              </ul>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
            <div className="container-img">
              <img
                src="../public/KC_ESS_1500x1500_94d90382-3441-4923-9ec2-17da3b80e4b8.webp"
                alt=""
              />
              <h3>Hey</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
