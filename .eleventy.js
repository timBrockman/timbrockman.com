/* eleventy config file
    - add plugins
    - add directories
    
*/

// import plugins from package.json
const pluginImage = require("@11ty/eleventy-img");
//const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginAmp = require("@ampproject/eleventy-plugin-amp");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig){
    //plugins
    eleventyConfig.addPlugin(pluginNavigation);
    eleventyConfig.addPlugin(pluginRss);
    //eleventyConfig.addPlugin(pluginSyntaxHighlight);
    eleventyConfig.addPlugin(pluginAmp,{ imageOptimization: true });
    eleventyConfig.addPlugin(pluginImage);   

    //directories and such
    return{
        dir: {
            input: "src",
            includes: "_includes",
            data: "_data",
            output: "_site"
          },
    };
};