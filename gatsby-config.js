require("dotenv").config({ path: __dirname + "/.env" })

module.exports = {
    siteMetadata: {
        title: "KCSOC",
        author: "KCSOC National",
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-react-helmet",
    ],
}
