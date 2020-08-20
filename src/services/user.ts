import config from "../config/config";
import { User } from "../types/User";

export const getUsersFetch = async () => {
  const resp = await fetch(`${config.BASE_URL}${config.API.GET_USERS}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const json = (await resp.json()) as User[];

  if (json.length > 0) {
    return json;
  } else {
    throw Error("get users error");
  }
};
