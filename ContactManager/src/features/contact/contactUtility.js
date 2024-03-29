import { createSelector } from "@reduxjs/toolkit";
import validator from "../../utils/validator";

const selectContacts = state => state.contact.contacts;
const selectSearchTerm = state => state.contact.searchTerm;
const selectContactId = (_, contactId) => contactId;

export const selectContactById = createSelector(selectContacts, selectContactId, (contacts, id) => contacts.find(contact => contact.id === id));
export const selectFilteredIds = createSelector(selectSearchTerm, selectContacts, (searchTerm, contacts) => {
  return contacts.filter(contact => {
    const contactText = `${contact.firstName} ${contact.lastName} ${contact.email}`.toLowerCase();
    return contactText.includes(searchTerm.toLowerCase())
  }).map(e => e.id)
});

export const validateEnteredContact = state => {
  state.formData.firstName.errorMsg = validator.validateIsNotEmpty(state.formData.firstName.label, state.formData.firstName.value);
  state.formData.lastName.errorMsg =  validator.validateIsNotEmpty(state.formData.lastName.label, state.formData.lastName.value);
  state.formData.email.errorMsg = validator.validateIsNotEmpty(state.formData.email.label, state.formData.email.value);
  if (state.formData.email.errorMsg === null) state.formData.email.errorMsg = validator.validateEmail.bind(validator)(state.formData.email.value);

  if (state.formData.firstName.errorMsg !== null || state.formData.lastName.errorMsg !== null || state.formData.email.errorMsg !== null) {
    return false;
  } else return true;
}