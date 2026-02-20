/**
 * Fix internal links in migrated Starlight docs.
 * Rewrites old WikiJS paths to new Starlight paths.
 * Does NOT touch any other content.
 */

const fs = require('fs');
const path = require('path');
const glob = require('path');

// Link rewriting rules: old path prefix → new path prefix
// Order matters: more specific rules first
const linkRewrites = [
  // Game server sub-pages
  ['/enshrouded/', '/game-servers/enshrouded/'],
  ['/factorio/', '/game-servers/factorio/'],
  ['/foundry/', '/game-servers/foundry/'],
  ['/hytale/', '/game-servers/hytale/'],
  ['/minecraft/', '/game-servers/minecraft/'],
  ['/palworld/', '/game-servers/palworld/'],
  ['/project-zomboid/', '/game-servers/project-zomboid/'],
  ['/satisfactory/', '/game-servers/satisfactory/'],
  ['/sons-of-the-forest/', '/game-servers/sons-of-the-forest/'],
  ['/towerunite/', '/game-servers/towerunite/'],

  // Game server index pages (exact match, no trailing content)
  ['/enshrouded)', '/game-servers/enshrouded)'],
  ['/factorio)', '/game-servers/factorio)'],
  ['/foundry)', '/game-servers/foundry)'],
  ['/hytale)', '/game-servers/hytale)'],
  ['/minecraft)', '/game-servers/minecraft)'],
  ['/palworld)', '/game-servers/palworld)'],
  ['/project-zomboid)', '/game-servers/project-zomboid)'],
  ['/satisfactory)', '/game-servers/satisfactory)'],
  ['/sons-of-the-forest)', '/game-servers/sons-of-the-forest)'],
  ['/towerunite)', '/game-servers/towerunite)'],

  // Nitro panel
  ['/nitro-panel/', '/getting-started/nitro-panel/'],
  ['/nitro-panel)', '/getting-started/nitro-panel)'],

  // Managed nitro
  ['/managed-nitro/', '/getting-started/managed-nitro/'],
  ['/managed-nitro)', '/getting-started/managed-nitro)'],
];

function fixLinks(content) {
  let result = content;
  for (const [oldPath, newPath] of linkRewrites) {
    // Only replace inside markdown link targets: ](path)
    // Use a regex that matches ]( followed by the old path
    const escaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('\\]\\(' + escaped, 'g');
    result = result.replace(regex, '](' + newPath);
  }
  return result;
}

// Process all .md files in src/content/docs/
function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath));
    } else if (entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

const docsDir = path.join(__dirname, 'src', 'content', 'docs');
const files = walkDir(docsDir);

let changed = 0;
let unchanged = 0;

for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const fixed = fixLinks(original);
  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    const rel = path.relative('.', filePath);
    console.log(`  ✓ Fixed links in ${rel}`);
    changed++;
  } else {
    unchanged++;
  }
}

console.log(`\nDone: ${changed} files updated, ${unchanged} unchanged\n`);
