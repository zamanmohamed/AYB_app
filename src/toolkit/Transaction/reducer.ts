import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PORT } from "../port";

const TransectionApi = `${PORT}/api/transaction`;

interface FetchCategoriesParams {
  page?: number;
  limit?: number;
  searchText?: string;
  startDate?: string;
  endDate?: string;
  id?: string;
  //   sortBy?: string;
  //   order?: string;
}

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data: any) => {
    const response = await axios.post(`${TransectionApi}/create`, data);
    return response.data.transaction;
  }
);

export const getTransections: any = createAsyncThunk(
  "Transection/getTransection",
  async ({
    page = 1,
    limit = 5,
    searchText = "",
    startDate,
    endDate,
  }: // sortBy = "createdAt",
  // order = "asc",
  FetchCategoriesParams) => {
    const response = await axios.get(`${TransectionApi}/search`, {
      params: { page, limit, searchText, startDate, endDate },
    });
    return response.data;
  }
);

export const getTransectionsByCustomer: any = createAsyncThunk(
  "Transection/getTransectionsByCustomer",
  async ({
    page = 1,
    limit = 5,
    searchText = "",
    startDate,
    endDate,
    id,
  }: // sortBy = "createdAt",
  // order = "asc",
  FetchCategoriesParams) => {
    const response = await axios.get(
      `${TransectionApi}/profit-loss/customer/${id}`,
      {
        params: { page, limit, searchText, startDate, endDate },
      }
    );
    return response.data;
  }
);

export const getProfitOrLoss: any = createAsyncThunk(
  "category/profit-loss",
  async () => {
    const response = await axios.get(`${TransectionApi}/profit-loss/company`);
    return response.data;
  }
);

// export const updateCategory = createAsyncThunk(
//   "category/updateCategory",
//   async () => {
//     const response = await axios.put(`${categorieApi}`);
//     return response.data.products;
//   }
// );

// export const deleteCategory = createAsyncThunk(
//   "category/deleteCategory",
//   async (id: any) => {
//     const response = await axios.delete(`${categorieApi}/${id}`);
//     return response.data.products;
//   }
// );

const initialState = {
  transections: [],
  transection: null,
  createTransectionStatus: "idle",
  updateTransectionStatus: "idle",
  deleteTransectionStatus: "idle",
  getTransectionStatus: "idle",
  getAllTransectionStatus: "idle",
  getProfitOrLossState: "idle",
  error: "",
  totalPages: 0,
  totalCount: 0,
  currentPageNo: 0,
  limit: 0,
  profitOrLossValue: 0,
};

const TransectionSlice = createSlice({
  name: "Transection",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.createTransectionStatus = "loading";
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.createTransectionStatus = "succeeded";
        state.transection = action.payload;
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.createTransectionStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getTransections.pending, (state) => {
        state.getAllTransectionStatus = "loading";
      })
      .addCase(getTransections.fulfilled, (state, action) => {
        state.getAllTransectionStatus = "succeeded";
        state.totalPages = action.payload.pagination.totalPages;
        state.totalCount = action.payload.pagination.totalCount;
        state.limit = action.payload.pagination.limit;
        state.currentPageNo = action.payload.pagination.currentPage;
        state.transections = action.payload.data;
      })
      .addCase(getTransections.rejected, (state, action) => {
        state.getAllTransectionStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getProfitOrLoss.pending, (state) => {
        state.getProfitOrLossState = "loading";
      })
      .addCase(getProfitOrLoss.fulfilled, (state, action) => {
        state.getProfitOrLossState = "succeeded";
        state.profitOrLossValue = action.payload.data;
      })
      .addCase(getProfitOrLoss.rejected, (state, action) => {
        state.getProfitOrLossState = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getTransectionsByCustomer.pending, (state) => {
        state.getAllTransectionStatus = "loading";
      })
      .addCase(getTransectionsByCustomer.fulfilled, (state, action) => {
        state.getAllTransectionStatus = "succeeded";
        state.totalPages = action.payload.pagination.totalPages;
        state.totalCount = action.payload.pagination.totalCount;
        state.limit = action.payload.pagination.limit;
        state.currentPageNo = action.payload.pagination.currentPage;
        state.transections = action.payload.data;
        state.profitOrLossValue = action.payload.profitOrLoss;
      })
      .addCase(getTransectionsByCustomer.rejected, (state, action) => {
        state.getAllTransectionStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
  reducers: {},
});

export const {} = TransectionSlice.actions;
export default TransectionSlice.reducer;
