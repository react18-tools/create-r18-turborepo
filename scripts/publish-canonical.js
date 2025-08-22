const { execSync } = require("child_process");

// Publish canonical packages
["create-r18", "create-r18-turbo", "turborepo-template-init"].forEach(pkg => {
  execSync(`sed -i -e "s/name.*/name\\": \\"${pkg.replace(/\//g, "\\\\/")}\\",/" lib/package.json`);
  execSync("cd lib && npm publish --provenance --access public");
});
