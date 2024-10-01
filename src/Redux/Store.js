import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./Features/Coindata/Coindataslice.js";
import Bitcoindataslice from "./Features/Bitcoindata/Bitcoindataslice.js";
import Controlslice from "./Features/Navcontrol/Controlslice.js";

const Dashbordstore=configureStore({
  reducer: {
    data : dataSlice,
    bitcoin: Bitcoindataslice,
    control: Controlslice
  }
});

export default Dashbordstore;