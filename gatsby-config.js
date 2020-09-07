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
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: "750",
                            linkImagesToOriginal: false,
                        },
                    },
                ],
            },
        },
    ],
}
