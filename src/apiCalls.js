import axios from "axios";
export async function getAPI(url) {
  try {
    let result = await axios.get(url);
    return result;
  } catch (e) {
    console.log(e, "error");
  }
}
export async function postAPI(url, formData) {
  try {
    let result = await axios.post(url, formData);
    return result;
  } catch (e) {
    console.log(e, "error");
  }
}
export async function patchAPI(url, id) {
  try {
    let result = await axios.patch(`${url}/${id}`);
    return result;
  } catch (e) {
    console.log(e, "error");
  }
}
export async function deleteAPI(url, id) {
  try {
    let result = await axios.delete(`${url}/${id}`);
    return result;
  } catch (e) {
    console.log(e, "error");
  }
}
