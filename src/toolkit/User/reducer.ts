import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PORT } from "../port";

const userApi = `${PORT}/api/customer`;

interface FetchCategoriesParams {
  page?: number;
  limit?: number;
  searchText?: string;
  startDate?: string;
  endDate?: string;
  //   sortBy?: string;
  //   order?: string;
}

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data: any) => {
    const response = await axios.post(`${userApi}/create`, data);
    return response.data.customer;
  }
);

export const getUsers: any = createAsyncThunk(
  "user/getUser",
  async ({
    page = 1,
    limit = 5,
    searchText = "",
    startDate,
    endDate,
  }: // sortBy = "createdAt",
  // order = "asc",
  FetchCategoriesParams) => {
    const response = await axios.get(`${userApi}/search`, {
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
  users: [],
  User: null,
  createUserStatus: "idle",
  updateUserStatus: "idle",
  deleteUserStatus: "idle",
  getUserStatus: "idle",
  getAllUserStatus: "idle",
  error: "",
  totalPages: 0,
  totalCount: 0,
  currentPageNo: 0,
  limit: 0,
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.createUserStatus = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.createUserStatus = "succeeded";
        state.User = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.createUserStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      })
      .addCase(getUsers.pending, (state) => {
        state.getAllUserStatus = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.getAllUserStatus = "succeeded";
        state.totalPages = action.payload.pagination.totalPages;
        state.totalCount = action.payload.pagination.totalCount;
        state.limit = action.payload.pagination.limit;
        state.currentPageNo = action.payload.pagination.currentPage;
        state.users = action.payload.data;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.getAllUserStatus = "failed";
        state.error = action.error.message || "Something went wrong";
      });
  },
  reducers: {},
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
