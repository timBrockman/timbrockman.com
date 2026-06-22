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

  // ===
  // Collection Helper
  // ===

  //group by year (must have items must have dates)
   const groupByYear = (collection) => {
    // Sort descending (Newest first)
    const sorted = [...collection].sort((a, b) => b.date - a.date);
    
    // Group items by year
    const grouped = sorted.reduce((acc, item) => {
      const year = item.date.getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(item);
      return acc;
    }, {});

    // Group into an array of objects: [{ year: 2026, items: [...] }]
    return Object.keys(grouped)
      .sort((a, b) => b - a)
      .map(year => ({
        year: year,
        items: grouped[year]
      }));
  };


  // ============================================
  // Collections
  // ============================================
  eleventyConfig.addCollection("projects", function(collectionApi) {
    const collection = collectionApi
      .getFilteredByGlob("src/content/*.md");
    return collection.filter(item => item.data.tags && item.data.tags.includes("projects"));
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    const collection = collectionApi
      .getFilteredByGlob("src/content/*.md");
    return collection.filter(item => item.data.tags && item.data.tags.includes("posts"));
  });

    eleventyConfig.addCollection("postsByYear", (collectionApi)=>{
      const collection = collectionApi
          .getFilteredByGlob("src/content/*.md");
      return groupByYear(collection.filter(item => item.data.tags && item.data.tags.includes("posts")));
    });
    eleventyConfig.addCollection("projectsByYear", (collectionApi)=>{
      const collection = collectionApi
          .getFilteredByGlob("src/content/*.md");
      return groupByYear(collection.filter(item => item.data.tags && item.data.tags.includes("projects")));
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
      includes: "_includes"
      //layouts: "_includes/layouts"
    },
    templateFormats: ["md", "liquid", "njk", "html"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid"
  };
};