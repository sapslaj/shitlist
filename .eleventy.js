const { DateTime } = require("luxon")

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("luxonFormat", (dateObj, format = "yyyy-LL-dd") => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
  });
}
