import { Http, Axios } from "@/infrastructure/http";

const axios = new Axios();
const http = new Http(axios);

export {
  http,
};
