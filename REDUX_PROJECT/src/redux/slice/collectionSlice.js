import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState: initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id == action.payload.id,
      );

      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state, action) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: () => {
      toast.success("Added to Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("Removed from the Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    },
  },
});
export const { addCollection, removeCollection, clearCollection, addedToast, removeToast } =
  collectionSlice.actions;
export default collectionSlice.reducer;
