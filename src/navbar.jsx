import { useState } from "react";
import "./navbar.css";
import "./Components/Home/Video.css";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [hidden, setHidden] = useState(true);
  const [hiddenSec, setHiddenSec] = useState(true);
  const [hiddenThird, setHiddenThird] = useState(true);

  return (
    <>
      <nav>
        <img src="/Kcorp-Logo.svg" alt="Kcorp Logo" />
        <div className="nav-categories">
          <ul>
            <li
              onMouseEnter={() => [
                setHidden(true),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Accueil
            </li>
            <li
              onMouseEnter={() => [
                setHidden(false),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Kcorp
            </li>
            <li
              onMouseEnter={() => [
                setHiddenSec(false),
                setHidden(true),
                setHiddenThird(true),
              ]}
            >
              Esports
            </li>
            <li
              onMouseEnter={() => [
                setHidden(true),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Ultras
            </li>
            <li
              onMouseEnter={() => [
                setHidden(true),
                setHiddenSec(true),
                setHiddenThird(true),
              ]}
            >
              Partenaires
            </li>
            <li
              onMouseEnter={() => [
                setHiddenThird(false),
                setHidden(true),
                setHiddenSec(true),
              ]}
            >
              Boutique
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="icon-right">
            {" "}
            <CiHeart style={{ width: "80%", height: "80%" }} />
          </div>
          <div className="icon-right">
            {" "}
            <CiShoppingCart style={{ width: "80%", height: "80%" }} />
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
