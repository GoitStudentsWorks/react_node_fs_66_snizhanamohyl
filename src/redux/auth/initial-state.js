export const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  isLoading: false,
  serverError: '',
  serverErrorStatus: null,
  resetForm: false,
};
