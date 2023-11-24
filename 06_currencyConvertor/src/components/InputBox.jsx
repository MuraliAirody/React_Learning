import React from 'react'

export default function InputBox({
    label = "",
    className = "",
    amount,
    amountDisable = false,
    currencyTypeDisable = false,
    onAmountChange,
    onCurrencyTypeChange,
    currencyType,
    currencyOptions = []
}) {


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    onChange={(e) => { onAmountChange && onAmountChange(e.target.value===""?"":Number(e.target.value)) }}
                    value={amount}
                    disabled={amountDisable}


                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(e) => { onCurrencyTypeChange && onCurrencyTypeChange(e.target.value) }}
                    disabled={currencyTypeDisable}
                    value={currencyType}
                >

                    {currencyOptions.map((currencyType) => (
                        <option key={currencyType} value={currencyType}>
                            {currencyType}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}
