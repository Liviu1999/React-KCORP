import { FaXTwitter } from "react-icons/fa6";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

function Footer() {
  const socials = [
    {
      id: 1,
      img: (
        <FaXTwitter
          src="1"
          className="w-full h-full p-2 object-cover rounded-3xl border-2 border-blue-300 hover:text-blue-300 hover:cursor-pointer"
        />
      ),
    },
    {
      id: 2,
      img: (
        <FaInstagram className="w-full h-full p-2 object-cover rounded-3xl border-2 border-blue-300  hover:text-blue-300 hover:cursor-pointer" />
      ),
    },
    {
      id: 3,
      img: (
        <FaYoutube className="w-full h-full p-2 object-cover rounded-3xl border-2 border-blue-300  hover:text-blue-300 hover:cursor-pointer" />
      ),
    },
    {
      id: 4,
      img: (
        <FaTiktok className="w-full h-full p-2 object-cover rounded-3xl border-2 border-blue-300  hover:text-blue-300 hover:cursor-pointer" />
      ),
    },
  ];

  const payments = [
    {
      id: 1,
      img: <FaApplePay src="1" className="w-full h-full object-cover " />,
    },
    {
      id: 2,
      img: <FaPaypal className="w-full h-full object-cover" />,
    },
    {
      id: 3,
      img: <FaGooglePay className="w-full h-full object-cover" />,
    },
    {
      id: 4,
      img: <FaCcVisa className="w-full h-full object-cover" />,
    },
    {
      id: 5,
      img: <FaCcMastercard className="w-full h-full object-cover" />,
    },
    {
      id: 6,
      img: <SiAmericanexpress className="w-full h-full object-cover" />,
    },
  ];

  const catalogues = [
    { id: 1, name: "Accessoires", lien: "/404" },
    { id: 2, name: "Essentials", lien: "/404" },
    { id: 3, name: "Légendes du Club", lien: "/404" },
    { id: 4, name: "Pro Kit", lien: "/404" },
    { id: 5, name: "Nos Produits", lien: "/404" },
  ];

  const informations = [
    { id: 1, name: "FAQ", lien: "/404" },
    { id: 2, name: "Contact", lien: "/404" },
    { id: 3, name: "Mentions Légales", lien: "/404" },
    { id: 4, name: "Conditions Générales de Vente", lien: "/404" },
    { id: 5, name: "Politique de Confidentialité", lien: "/404" },
  ];

  return (
    <div className="bg-black h-[40vh] grid grid-cols-4 grid-rows-1 px-8 text-white">
      <div className="col-start-1 col-end-2 flex justify-evenly items-center">
        {socials.map((el) => (
          <div key={el.id} className="flex  h-1/6">
            {el.img}
          </div>
        ))}
      </div>
      <div className="flex flex-col pt-16">
        <p className="text-blue-300 w-full pl-32 text-lg font-bold">
          Catalogue
        </p>
        <ul className="flex flex-col pl-32">
          {catalogues.map((el) => (
            <li
              className="text-s font-normal  hover:text-blue-300 hover:cursor-pointer"
              key={el.id}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col pt-16">
        <p className="text-blue-300 w-full pl-32 text-lg font-bold">
          Informations
        </p>
        <ul className="flex flex-col pl-32">
          {informations.map((el) => (
            <li
              className="text-s font-normal  hover:text-blue-300 hover:cursor-pointer"
              key={el.id}
            >
              {el.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col pt-16">
        <p className="text-blue-300 pl-8">Modes de paiement</p>
        <div className="w-full h-1/2 flex flex-wrap">
          {payments.map((el) => (
            <div key={el.id} className="flex w-1/3 h-1/3">
              {el.img}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
