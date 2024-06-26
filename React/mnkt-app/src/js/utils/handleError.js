export const handleError = (error) => {
  if (error.response) {
    const status = error.response.status;
    switch (status) {
      case 404:
        console.error("Error 404 : Not Found");
        break;
      case 500:
        console.error("Error 500: Internal Server Error");
        break;
      default:
        console.error(`Error ${status}: ${error.response.statusText}`);
        break;
    }
  } else if (error.request) {
    console.error("No Response Received From Server", error);
  } else {
    console.error("Error Setting Up Request: ", error.message);
  }
};
