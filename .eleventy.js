const pluginAmp = require("@ampproject/eleventy-plugin-amp");

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  // ============================================
  // Existing Plugins
  // ============================================
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginAmp, { 
    imageOptimization: true, 
    validation: false 
  });

  // ============================================
  // Collections
  // ============================================
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/projects/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99));
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/posts/*.md")
      .reverse();
  });

  // ============================================
  // Passthrough Copies
  // ============================================
  eleventyConfig.addPassthroughCopy({ "src/cp": "./" });
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/logo");

  // ============================================
  // Shortcodes
  // ============================================
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Enable AMP tags in markdown
  let markdownIt = require('markdown-it');
  let options = {
    html: true,
    breaks: true,
    linkify: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts: "_includes/layouts"
    },
    templateFormats: ["md", "liquid", "njk", "html"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};
