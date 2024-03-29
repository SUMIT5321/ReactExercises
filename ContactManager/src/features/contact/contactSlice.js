import { createSlice, nanoid } from "@reduxjs/toolkit"
import { validateEnteredContact } from "./contactUtility";

const initialFromState = {
  searchTerm: "",
  contacts: [],
  formData: {
    firstName: {
      label: "First Name",
      value: "",
      errorMsg: null
    },
    lastName: {
      label: "Last Name",
      value: "",
      errorMsg: null
    },
    email: {
      label: "Email",
      value: "",
      errorMsg: null
    }
  }
}

const contactSlice = createSlice({
  name: "contact",
  initialState: initialFromState,
  reducers: {
    setFormData: (state, action) => {
      state.formData[action.payload.fieldId].value = action.payload.value;
    },
    addContact: state => {
      if (!validateEnteredContact(state)) return;
      
      const contact = {
        id: nanoid(),
        firstName: state.formData.firstName.value,
        lastName: state.formData.lastName.value,
        email: state.formData.email.value
      }
      state.contacts.push(contact)
      state.formData = initialFromState.formData;
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
    },
    filterContacts: (state, action) => {
      state.searchTerm = action.payload.searchTerm;
    }
  }
});

export default contactSlice.reducer;
export const { addContact, deleteContact, filterContacts, setFormData } = contactSlice.actions;