import React, { useState } from "react";
import ProductDs from "../reuseables/ProductDs";
import PI from "../../assets/PI.png";
import Container from "../Container";
import SelectOpt from "../reuseables/SelectOpt";
import { useDispatch } from "react-redux";
import { addcart } from "../../store/CounterSlice";
import PI2 from "../../assets/PI2.png";
import PI3 from "../../assets/PI3.png";
import { Link } from "react-router-dom";

function ProductShop() {
  const [showpopup, setshowpopup] = useState(false);

  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    dispatch(addcart(item));
  };
  return (
    <div>
      <section>
        <Container>
          <div className="my-4 ">
            Home / Shop / Dental / Tweezers & Forceps / General Tweezers
          </div>
          <div className="flex flex-wrap justify-between mt-9 items-center mb-6">
            <div className="flex order-2 sm:order-1">
              <h2 className="font-bold text-[32px] tracking-[2px]">
                General Tweezers
              </h2>
            </div>
            <div className=" flex flex-wrap items-center order-1 sm:order-2">
              <span className="text-[15px] font-normal mr-7 hidden sm:block">
                {detailP.length} Results
              </span>
              <div className="flex items-center mr-12">
                <span className="text-[15px] mr-[9px]">Sortby &nbsp;</span>
                <div>
                  <SelectOpt
                    options={sort}
                    isSearchable={false}
                    isClearable={false}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-[15px]">Show &nbsp;</span>
                <div className="mx-[11px]">
                  <SelectOpt
                    options={pages}
                    isSearchable={false}
                    isClearable={false}
                  />
                </div>
                <span className="text-[15px]">&nbsp; Per page</span>
              </div>
            </div>
          </div>
          {/* // mapping the Product */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-11 mb-20">
            {detailP.map((item) => (
              <ProductDs
                item={item}
                handleAddCart={handleAddCart}
                showpopup={showpopup}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default ProductShop;

const detailP = [
  {
    id: 1,
    Image: PI2,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 2,
    Image: PI3,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 3,
    Image: PI2,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 4,
    Image: PI3,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 5,
    Image: PI2,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 6,
    Image: PI2,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 7,
    Image: PI3,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 8,
    Image: PI3,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 9,
    Image: PI2,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 10,
    Image: PI3,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 11,
    Image: PI2,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
  {
    id: 12,
    Image: PI3,
    Pname: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    SKU: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    Shippinginfo: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    qty: 1,
  },
];

const pages = [
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "45", label: "45" },
];

const sort = [
  { value: "Default", label: "Default" },
  { value: "Low To high", label: "Low To high" },
  { value: "High to Low", label: "High to Low" },
];
