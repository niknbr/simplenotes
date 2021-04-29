const fs = require("fs");
const manifestJson = {
  manifest_version: 2,
  name: "simple notes",
  version: "0.1.0",
  offline_enabled: true,
  short_name: "simple notes",
  description: "Click the icon. Add some notes. Done.",
  icons: {
    48: "icons/icon32.png",
    96: "icons/icon96.png",
  },
  browser_action: {
    default_icon: "icons/icon48.png",
    default_title: "simple notes",
    default_popup: "index.html",
  },
};

fs.writeFileSync("./build/manifest.json", JSON.stringify(manifestJson));
