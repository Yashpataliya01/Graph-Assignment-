import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchbitcoinData = createAsyncThunk("data/fetchData", async () => {
  // const response = await fetch(
  //   "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=EUR&apikey=2A6X3L81X95DF0JC"
  // );
  // return response.json();
   const  data = {
    "2024-09-30": { "2a. high (EUR)": "26700", "3a. low (EUR)": "26000" },
      "2024-09-29": { "2a. high (EUR)": "26500", "3a. low (EUR)": "25800" },
      "2024-09-28": { "2a. high (EUR)": "27000", "3a. low (EUR)": "26300" },
      "2024-09-27": { "2a. high (EUR)": "27500", "3a. low (EUR)": "26750" },
      "2024-09-26": { "2a. high (EUR)": "28000", "3a. low (EUR)": "27200" },
   }
   return data;
});

const initialState = {
  bitcoin: [],
  status: null,
}


const bitcoinSlice = createSlice({
  name: "bitcoin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchbitcoinData.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(fetchbitcoinData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bitcoin = action.payload;
      })
      .addCase(fetchbitcoinData.rejected, (state) => {
        state.status = "Error occurred";
      });
  },
});

export default bitcoinSlice.reducer;
