 // format date (yy-mm-dd)
 export const trimDate = (url) => {
      return url.slice(0, 10)
  }

//  get gateries  
  export const getCategory = (category) => {
    let uniqueCategory = new Set();
    category.map((c) => uniqueCategory.add(c.categories[0].title));
    uniqueCategory = Array.from(uniqueCategory);

    return uniqueCategory.map((u) => <option value={u} key={u}>{u}</option>);
  };
