function ProductsSearchForm({ name, number }) {
  return (
    <label htmlFor={name} className="flex items-center pb-2 gap-2">
      {" "}
      <input type="checkbox" name={name} id={name} />
      {name} ({number})
    </label>
  );
}

export default ProductsSearchForm;
