import { MdOutlineAttachEmail, MdOutlinePlace } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
//
export const ContactData = [
  {
    id: 1,
    title: "Telephone",
    icon: <FiPhoneCall size={30} />,
    href: "tel:+34 669 997 156",
    content: "+34 669 997 156",
  },
  {
    id: 2,
    title: "WhatsApp",
    icon: <FaWhatsapp size={30} />,
    href: "https://wa.me/34669997156",
    content: "",
    image: "../assets/image-globals/whatsapp.jpg",
    imagefull: "../assets/image-globals/whatsapp-full.jpg",
  },
  {
    id: 3,
    title: "Email",
    icon: <MdOutlineAttachEmail size={30} />,
    href: "mailto:beckjacob2277@gmail.com",
    content: " beckjacob2277@gmail.com",
  },
  {
    id: 4,
    title: "Address",
    icon: <MdOutlinePlace size={30} />,
    href: "https://www.google.com/maps/@27.8008601,-15.4636596,16z",
    content: "Gran Canaria",
  },
];
