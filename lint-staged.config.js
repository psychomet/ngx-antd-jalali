module.exports = {
  '{apps,libs,tools}/*.{ts,js,json,md,html,css,scss,less}': [
    'nx workspace-lint',
    'nx format:write --uncommitted --libs-and-apps',
  ],
};
