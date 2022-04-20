export function axiosError (error : any) {
  if (error.response) {
    console.log(error.response.data.error.message);
    console.log(error.response.status);
    console.log(error.response.headers);
    alert('An error ' + error.response.status + ' occured : ' + error.response.data.error.message);
  }
}
