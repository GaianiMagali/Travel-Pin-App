import axios from "axios";

export function dispatch(options) {

    let config = {
        method: options.method || "get",
        url: options.url,
    };

    if (options.body) {
        config["data"] = options.body;
    }

    return axios(config)
        .then((res) => res.data)
        .catch((error) => error);
}