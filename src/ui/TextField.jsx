function TextField({
  label,
  name,
  value,
  onChange,
  placeholder,
  maxLength,
  style,
  type,
}) {


  return (
    <div className="w-full flex flex-col justify-center space-y-2">
      <label
        className="font-bold text-sm sm:text-base md:text-lg lg:text-xl"
        htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        id={name}
        type={type} // Change the type to "tel" for better mobile support
        autoComplete="off"
        className="textField__input"
        style={style} // Set the direction to right-to-left
      />
    </div>
  );
}

export default TextField;
