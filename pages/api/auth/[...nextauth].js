import NextAuth from "next-auth";

import Providers from "next-auth/providers";

const options = {
    providers: [
        Providers.GitHub({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Twitter({
            clientId: "",
            clientSecret: ""
        }),
        Providers.Auth0({
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            domain: process.env.AUTH0_DOMAIN
        }),
        Providers.Email({
            server: {
                host: "",
                port: "",
                auth: {
                    user: "",
                    pass: ""
                }
            },
            from: "",
        }),
    ]
}

export default (req, res) => NextAuth(req, res, options);