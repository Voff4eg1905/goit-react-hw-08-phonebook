import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// const handleFulfilled = state => {
//   state.isLoading = false;
//   state.error = null;
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null, filter: '' },
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    // [fetchContacts.pending]: handlePending,
    // [fetchContacts.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.error = false;
    //   state.items = action.payload;
    // },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = false;
      state.items = state.items.filter(item => item.id !== action.payload.id); //! Possibly redo
    },
    [deleteContact.rejected]: handleRejected,
  },
});
export const { filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: { items: [], isLoading: false, error: null, filter: '' },
//   reducers: {
//     filterContacts(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: builder =>
//     builder
//       // GET
//       .addCase(fetchContacts.pending, handlePending)
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = false;
//         state.items = action.payload;
//       })
//       .addCase(fetchContacts.rejected, handleRejected)
//       // ADD
//       .addCase(addContact.pending, handlePending)
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addContact.rejected, handleRejected)
//       // DELETE
//       .addCase(deleteContact.pending, handlePending)
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = false;
//         state.items = state.items.filter(
//           contact => contact.id !== action.payload.id
//         );
//       })
//       .addCase(deleteContact.rejected, handleRejected),
// });

// export const { filterContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
