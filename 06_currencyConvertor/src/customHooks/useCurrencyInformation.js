
import { useState, useEffect } from "react";

function UseCurrencyInformation(currency) {

    const [data, setData] = useState({})
    // console.log(currency)
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            // console.log("inside useEffect ",data);
    },[currency])
    // console.log("before return ",data);
    return data;
}

export default UseCurrencyInformation