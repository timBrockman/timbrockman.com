/* eleventy config file
  - add plugins
  - add directories
  
*/

// import plugins from package.json
//const pluginImage = require("@11ty/eleventy-img");
//const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginAmp = require("@ampproject/eleventy-plugin-amp");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { pluginMermaid } = require("@kevingimbel/eleventy-plugin-mermaid");

module.exports = function(eleventyConfig){
  //plugins
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginAmp,{ imageOptimization: true, validation: false,});
  eleventyConfig.addPlugin(pluginMermaid, {
    outputDir: "_site/assets/mermaid",  // Publicly accessible
    mermaid: {
      theme: "dark",
      themeVariables: {
        primaryColor: "#fe9",
        primaryTextColor: "#000",
        background: "#0d0d0d",
        lineColor: "#fec"
      }
    }
  });
  //eleventyConfig.addPlugin(pluginImage);   

  // Enable AMP tags in markdown
  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));
  //filters

  //shortcodes
  //mermaidamp (mermaid svg wrapped in ampimg) 
  eleventyConfig.addPairedShortcode("mermaidamp", function(content, alt = "Diagram") {
    // Generate a hash from content to avoid filename collisions
    const hash = require("crypto").createHash("md5").update(content.trim()).digest("hex").slice(0, 8);
    const svgPath = `/assets/mermaid/${hash}.svg`;

    // Use your existing ampimg shortcode
    return `{% ampimg src="${svgPath}" alt="${alt}" width="600" height="400" layout="responsive" %}`;
  });
  //collections


  //directories and such
  eleventyConfig.addPassthroughCopy({"src/cp":"./"});

  return{
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
  };
};
