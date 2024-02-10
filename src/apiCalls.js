import axios from "axios";
export async function getAPI(url) {
  try {
    let result = await axios.get(url);
    return result.data.result;
  } catch (e) {
    console.log(e, "get error");
  }
}
export async function postAPI(url, formData) {
  try {
    let result = await axios.post(url, formData);
    return result.data;
  } catch (e) {
    console.log(e, "post error");
  }
}
export async function patchAPI(url, id) {
  try {
    let result = await axios.patch(`${url}?id=${id}`);
    return result;
  } catch (e) {
    console.log(e, "patch error");
  }
}
export async function deleteAPI(url, id) {
  try {
    let result = await axios.delete(`${url}?id=${id}`);
    return result;
  } catch (e) {
    console.log(e, "delete error");
  }
}
