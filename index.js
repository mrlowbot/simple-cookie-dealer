function simpleCookieDealer(name, value, options) {
    let cookies = document.cookie.split(";");
    for (let cookie of cookies) {
        let cookieName = cookie.split("=")[0];
        if (cookieName.trim() === name) {
            return `Cookie with name "${name}" already exists`;
        }
    }
    if (typeof name !== "string" || name.length === 0 || typeof value !== "string") {
        return false;
    }

    if (options && typeof options !== "object") {
        return false;
    }

    let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value) + ";";

    if (options) {
        if (options.action === "delete") {
            cookieString += "expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        } else {
            if (options.expires) {
                if (typeof options.expires === "string") {
                    let date = new Date(options.expires);
                    if (!isNaN(date)) {
                        cookieString += "expires=" + date.toUTCString() + ";";
                    }
                } else if (options.expires instanceof Date && !isNaN(options.expires)) {
                    cookieString += "expires=" + options.expires.toUTCString() + ";";
                }
            } else {
                let date = new Date();
                date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
                cookieString += "expires=" + date.toUTCString() + ";";
            }

            if (options.domain) {
                cookieString += "domain=" + options.domain + ";";
            }
            if (options.path) {
                cookieString += "path=" + options.path + ";";
            }
            if (options.secure) {
                cookieString += "secure;";
            }
        }
    }

    document.cookie = cookieString;

    return `${name} cookie has been set`;
}

module.exports = simpleCookieDealer;