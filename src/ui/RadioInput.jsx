function RadioInput({ label, value, onChange, name, id, checked }) {
  return (
    <div className="flex justify-center items-center gap-x-2 text-sm md:text-base font-bold">
      <input
        className="cursor-pointer form-radio text-blue-700 focus:ring-blue-700"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
