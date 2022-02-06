export const handleError = (err) => {
  if (err.response) {
    if (err.response.data) {
      return err.response.data;
    } else {
      return "Something went wrong 😅🙏";
    }
  } else {
    return err.message;
  }
};
