import axios from "axios";

export async function doGetRequest<T>(url: string, mapper?: (responses: any) => T): Promise<T> {
  const responses = await axios.get<T>(url);
  if (mapper) {
    return mapper(responses.data);
  }
  return responses.data;
}
