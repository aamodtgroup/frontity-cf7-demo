const settings = {
  name: "frontity-cf7-demo",
  state: {
    frontity: {
      url: "https://frontity-cf7.devhuset.dev",
      title: "Frontity CF7 Demo",
      description: "This is a Frontity CF7 demo",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            [
              "GitHub",
              "https://github.com/aamodtgroup/frontity-contact-form-7",
            ],
            [
              "Issues",
              "https://github.com/aamodtgroup/frontity-contact-form-7/issues",
            ],
            ["Devhuset", "https://devhuset.no"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://wp-cf7.devhuset.dev",
          homepage: "home",
        },
      },
    },
    "@aamodtgroup/frontity-contact-form-7",
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
  ],
};

export default settings;
