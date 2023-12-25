function TextField({ label, name, value, onChange }) {
  const handleInputChange = (e) => {
    // Allow only numeric values
    const numericValue = e.target.value.replace(/\D/g, "");
    onChange({
      target: {
        name,
        value: numericValue,
      },
    });
  };

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
        onChange={handleInputChange}
        maxLength={11}
        placeholder="شماره موبایل خود را وارد کنید"
        id={name}
        type="tel" // Change the type to "tel" for better mobile support
        autoComplete="off"
        className="textField__input"
        style={{ direction: "rtl" }} // Set the direction to right-to-left
      />
    </div>
  );
}

export default TextField;
