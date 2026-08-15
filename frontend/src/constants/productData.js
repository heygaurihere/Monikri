import kurta1 from "../assets/illustrations/kurta1.png";
import saree from "../assets/illustrations/saree.png";
import saree2 from "../assets/illustrations/saree2.png";
import suit1 from "../assets/illustrations/suit1.png";
import suit2 from "../assets/illustrations/suit2.png";
import suit3 from "../assets/illustrations/suit3.png";

const productData = [
  {
    id: 1,
    name: "Classic Blue Saree",
    category: "saree",
    price: 1899,
    image: saree,
    description:
      "A timeless blue saree with delicate detailing, perfect for both everyday elegance and festive occasions.",
    colors: ["Blue", "Navy"],
    sizes: ["Free Size"],
    isNew: true,
  },
  {
    id: 2,
    name: "Festive Silk Saree",
    category: "saree",
    price: 2499,
    image: saree2,
    description:
      "Rich silk weave with a festive border, designed to make a statement at any celebration.",
    colors: ["Maroon", "Gold"],
    sizes: ["Free Size"],
    isNew: false,
  },
  {
    id: 3,
    name: "Everyday Cotton Kurta",
    category: "kurti",
    price: 899,
    image: kurta1,
    description:
      "Breathable cotton kurta with a relaxed fit, made for effortless everyday wear.",
    colors: ["Navy", "White"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: 4,
    name: "Ethnic Embroidered Suit",
    category: "ethnic",
    price: 1699,
    image: suit1,
    description:
      "Hand-finished embroidery over soft fabric, tailored for a graceful silhouette.",
    colors: ["Rust", "Beige"],
    sizes: ["S", "M", "L"],
    isNew: false,
  },
  {
    id: 5,
    name: "Designer Ethnic Suit",
    category: "ethnic",
    price: 2199,
    image: suit2,
    description:
      "A designer-inspired ethnic suit with contemporary detailing and a flattering drape.",
    colors: ["Pink", "Mustard"],
    sizes: ["S", "M", "L", "XL"],
    isNew: true,
  },
  {
    id: 6,
    name: "Party Wear Suit",
    category: "party",
    price: 2899,
    image: suit3,
    description:
      "Statement party wear crafted for evenings that call for a little extra shine.",
    colors: ["Orange", "Blue"],
    sizes: ["S", "M", "L"],
    isNew: false,
  },
];

export default productData;
