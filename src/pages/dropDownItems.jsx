import React from "react";

function dropDownItems({ posts, param, selectedBrands, onBrandFilter }) {
  let brands = [];
  const insertAllBrands = (arr) => {
    // console.log("all",arr);
    arr.map((val, index) => {
      if (param === "brand") {
        if (brands.includes(val.brand) === false) {
          brands.push(val.brand);
        }
      } else if (param === "categories") {
        if (brands.includes(val.category) === false) {
          brands.push(val.category);
        }
      }
    });
  };
  insertAllBrands(posts);
  return (
    <div>
      {brands.map((val, index) => {
        // console.log("val", val);
        return (
          <div className="flex gap-1 items-baseline">
            <input
              type="checkbox"
              checked={selectedBrands.includes(val)}
              onChange={() => onBrandFilter(val)}
            />
            <p className="mt-2">{val}</p>
          </div>
        );
      })}
    </div>
  );
}

export default dropDownItems;
