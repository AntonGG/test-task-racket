import config from "../config/config";
import { Post } from "../types/Post";

export const getPostsFetch = async () => {
  const resp = await fetch(`${config.BASE_URL}${config.API.GET_POSTS}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const json = (await resp.json()) as Post[];

  if (json.length > 0) {
    return json;
  } else {
    throw Error("get posts error");
  }
};
