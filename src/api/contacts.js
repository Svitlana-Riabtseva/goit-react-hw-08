import axios from 'axios';

const contactsInstance = axios.create({
  //   baseURL: 'https://672bb8c91600dda5a9f62204.mockapi.io',
  baseURL: 'https://connections-api.goit.global/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  },
});

export const setToken = token => {
  contactsInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  contactsInstance.defaults.headers.common.Authorization = '';
};

export const apiRegisterUser = async userFormData => {
  const { data } = await contactsInstance.post('/users/signup', userFormData);
  return data;
};

export const apiLogin = async userFormData => {
  const { data } = await contactsInstance.post('/users/login', userFormData);
  return data;
};

export const apiGetCurrentUser = async () => {
  const { data } = await contactsInstance.get('/users/current');
  return data;
};

export const apiLogoutUser = async () => {
  const { data } = await contactsInstance.post('/users/logout');
  return data;
};

export const apiGetContacts = async params => {
  const { data } = await contactsInstance.get('/contacts', {
    params,
  });
  return data;
};

export const apiAddContacts = async contact => {
  const { data } = await contactsInstance.post('/contacts', contact);
  return data;
};

export const apiEditContact = async contact => {
  const user = {
    name: contact.name,
    number: contact.number,
  };
  const { data } = await contactsInstance.patch(`/contacts/${contact.id}`, user);
  return data;
};

export const apiDeleteContact = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
