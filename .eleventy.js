module.exports = function(eleventyConfig){
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