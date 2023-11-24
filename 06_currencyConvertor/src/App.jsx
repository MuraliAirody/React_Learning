
import { useState } from 'react';
import InputBox from './components/InputBox'
import UseCurrencyInformation from './customHooks/useCurrencyInformation'

function App() {
  const[fromAmount,setFromAmount] = useState("")
  const[toAmount,setToAmount] = useState("")
  const[fromCurrencyType,setFromCurrencyType] = useState("usd")
  const[toCurrencyType,setToCurrencyType] = useState("inr")

  const currencyInformation = UseCurrencyInformation(fromCurrencyType)
  const currencyKeys = Object.keys(currencyInformation)
  


  const swap = ()=>{
    // setFromAmount(toAmount)
    // setToAmount(fromAmount)
    setFromCurrencyType(toCurrencyType)
    setToCurrencyType(fromCurrencyType)
  }

  const convert = ()=>{
    setToAmount(fromAmount*currencyInformation[toCurrencyType])
  }

  // console.log(fromAmount)
  // console.log(toAmount)
  // console.log(fromCurrencyType);
  // console.log(toCurrencyType);

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-black"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                currencyOptions={currencyKeys}
                onCurrencyTypeChange={(currencyType)=>{setFromCurrencyType(currencyType)}}
                onAmountChange={(amount)=>{setFromAmount(amount)}}
                currencyType={fromCurrencyType}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                currencyOptions={currencyKeys}
                onCurrencyTypeChange={(currencyType)=>{setToCurrencyType(currencyType)}}
                onAmountChange={(amount)=>{setToAmount(amount)}}
                currencyType={toCurrencyType}
              />
            </div>
            <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg">
              Convert {fromCurrencyType.toUpperCase()} to {toCurrencyType.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
