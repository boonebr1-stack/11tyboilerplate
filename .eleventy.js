
// The export statement makes these settings available to other files in 11ty

module.exports = function(eleventyConfig) {
  // Shortcode: "Never leave home without it"
  eleventyConfig.addShortcode("tagline", function() {
    return `<p class="tagline">Never leave home without it.</p>`;
  });

  // Allow copying of styles and images
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};