import React from "react";

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index) => {
        const className = category === selectCategory ? "selected" : null;
          return( 
            <button 
              key={index}
              className={className}
              onClick={() => handleSelectCategory(category)}>
              {category}
            </button>)
        })}
    </div>
  );
}

export default CategoryFilter;
