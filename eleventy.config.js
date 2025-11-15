import { RenderPlugin } from "@11ty/eleventy";
import htmlmin from "html-minifier-terser";

function minifyHtml (content) {
    const path = this.page.outputPath || "";
    if (path.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true
        });

        return minified;
    }

    // If not an HTML output, return content as-is
    return content;
}

export default async function (eleventyConfig) {

    // DEBUG
    eleventyConfig.addWatchTarget("src");


    // BUILD
    eleventyConfig.setOutputDirectory("docs");
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setDataDirectory("_data");
    
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addPassthroughCopy("src/bundle.js");
    eleventyConfig.addPassthroughCopy("src/cart.js");
    eleventyConfig.addPassthroughCopy("src/bundle.css");

    eleventyConfig.addTransform("htmlmin", minifyHtml);
};