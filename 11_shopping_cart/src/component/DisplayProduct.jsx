import React, { useContext } from "react";
import Card from "./Card";
import list from "../ProductData/data";
import Alert from "@mui/material/Alert";
import { useDisplayContext } from "../context";

function DisplayProduct() {
    const {warning,handleClick} = useDisplayContext()
  return (
    <>
      <div className="mt-24">
        {warning && (
          <Alert className="fixed top-24 left-0 right-0" variant="filled" severity="error">
            This Product already exist in the Cart
          </Alert>
        )}
        <div className="flex flex-wrap justify-center ">
          {list.map((item) => (
            <Card item={item} key={item.id} handleClick={handleClick} />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayProduct;
