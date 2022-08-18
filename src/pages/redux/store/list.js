import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getList } from '../service';

const initialState = {
  list: []
};

export const getListData = createAsyncThunk('list/getListData', async (key) =>{
  const res = await getList(encodeURIComponent(key));
  return res;
});

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListData.fulfilled, (state, { payload }) => {
      state.list = payload.data.formatData.data;
    });
  }
});

export default listSlice.reducer;
