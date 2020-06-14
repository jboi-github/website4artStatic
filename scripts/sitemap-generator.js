require("babel-register") ({ presets: ["es2015", "react"] })
   
const router = require("./sitemap-routes.js").default
const Sitemap = require("react-router-sitemap").default
const profile = require("../public/config/profile.json")

function generateSitemap() {
    console.log(profile.site)
    return (
    new Sitemap(router)
        .build(profile.site)
        .save("./public/config/sitemap.xml")
    )
}

generateSitemap()
