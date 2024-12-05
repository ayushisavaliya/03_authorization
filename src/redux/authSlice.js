import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    return serializedState
      ? JSON.parse(serializedState)
      : { isAuthenticated: false, role: null, loading: false, error: null };
  } catch (e) {
    console.error("Failed to load auth state:", e);
    return { isAuthenticated: false, role: null };
  }
};

const initialState = loadAuthState();

export const loginAsync = createAsyncThunk(
  "auth/loginAsync",
  async ({ role, password }, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      if(password === "123456"){
        return { role };
      }
      return rejectWithValue("Incorrect password!!")
    } catch (error) {
      return rejectWithValue("Login failed!");
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logoutAsync",
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      return rejectWithValue("Logout failed!");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle login
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.role = action.payload.role;
        state.loading = false;
        localStorage.setItem("authState", JSON.stringify(state));
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Handle logout
    builder
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.role = null;
        state.loading = false;
        localStorage.removeItem("authState");
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
