export const handleError = (err) => {
  if (err.response) {
    if (err.response.data) {
      return err.response.data;
    } else {
      return {
        Error: "Something went wrong 🙏",
      };
    }
  } else {
    return err.message;
  }
};
