import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PORT } from "../port";

const capitalApi = `${PORT}/api/capital`;

interface FetchCategoriesParams {
  page?: number;
  limit?: number;
  searchText?: string;
  startDate?: string;
  endDate?: string;
  //   sortBy?: string;
  //   order?: string;
}

export const createcapital = createAsyncThunk(
  "capital/createcapital",
  async (data: any) => {
    const response = await axios.post(`${capitalApi}/create`, data);
    return response.data.capital;
  }
);

export const getCapitals: any = createAsyncThunk(
  "Capital/getCapital",
  async ({
    page = 1,
    limit = 5,
    searchText = "",
    startDate,
    endDate,
  }: // sortBy = "createdAt",
  // order = "asc",
  FetchCategoriesParams) => {
    const response = await axios.get(`${capitalApi}/search`, {
      params: { page, limit, searchText, startDate, endDate },
    });
    return response.data;
  }
);

// export const getAllCategory: any = createAsyncThunk(
//   "category/getAllCategory",
//   async () => {
//     const response = await axios.get(`${categorieApi}/getAllCategory`);
//     return response.data.category;
//   }
// );

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
  Capitals: [],
  Capital: null,
  createCapitalStatus: "idle",
  updateCapitalStatus: "idle",
  deleteCapitalStatus: "idle",
  getCapitalStatus: "idle",
  getAllCapitalStatus: "idle",
  error: "",
  totalPages: 0,
  totalCount: 0,
  currentPageNo: 0,
  limit: 0,
};

const CapitalSlice = createSlice({
  name: "Capital",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createcapital.pending, (state) => {
        state.createCapitalStatus = "loading";
      })
      .addCase(createcapital.fulfilled, (state, action) => {
        state.createCapitalStatus = "succeeded";
        state.Capital = action.payload;
      })
      .addCase(createcapital.rejected, (state, action) => {
        state.createCapitalStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getCapitals.pending, (state) => {
        state.getAllCapitalStatus = "loading";
      })
      .addCase(getCapitals.fulfilled, (state, action) => {
        state.getAllCapitalStatus = "succeeded";
        state.totalPages = action.payload.pagination.totalPages;
        state.totalCount = action.payload.pagination.totalCount;
        state.limit = action.payload.pagination.limit;
        state.currentPageNo = action.payload.pagination.currentPage;
        state.Capitals = action.payload.data;
      })
      .addCase(getCapitals.rejected, (state, action) => {
        state.getAllCapitalStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
  reducers: {},
});

export const {} = CapitalSlice.actions;
export default CapitalSlice.reducer;
