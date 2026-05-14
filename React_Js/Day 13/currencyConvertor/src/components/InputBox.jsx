function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div
      className={`bg-black/80 p-3 rounded-lg text-sm flex ${className} text-white/70 font-bold`}
    >
      <div className="w-1/2">
        <label className="text-white/70 mb-2 inline-block font-bold">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/70 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1.5 bg-gray-800 cursor-pointer outline-none scroll-0"
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectCurrency}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
