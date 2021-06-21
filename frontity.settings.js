const settings = {
  "name": "frontity-cf7-demo",
  "state": {
    "frontity": {
      "url": "https://frontity-cf7.aamodtgroup.com",
      "title": "Frontity CF7 Demo",
      "description": "This is a Frontity CF7 demo"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "GitHub",
              "https://github.com/aamodtgroup/frontity-contact-form-7"
            ],
            [
              "Issues",
              "https://github.com/aamodtgroup/frontity-contact-form-7/issues"
            ],
            [
              "Aamodt Group",
              "https://aamodtgroup.com"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://wp-frontity-cf7.aamodtgroup.com",
          "homepage": "home"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    "@frontity/yoast"
  ]
};

export default settings;
