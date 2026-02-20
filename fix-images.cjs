/**
 * Fix image paths that were incorrectly rewritten by fix-links.cjs.
 * Reverts image paths from /game-servers/X/image to /X/image, etc.
 * Only affects image references (![...](path)), not text links.
 */

const fs = require('fs');
const path = require('path');

// These prefixes were incorrectly added to image paths
const badPrefixes = [
  ['/game-servers/enshrouded/', '/enshrouded/'],
  ['/game-servers/factorio/', '/factorio/'],
  ['/game-servers/foundry/', '/foundry/'],
  ['/game-servers/hytale/', '/hytale/'],
  ['/game-servers/minecraft/', '/minecraft/'],
  ['/game-servers/palworld/', '/palworld/'],
  ['/game-servers/project-zomboid/', '/project-zomboid/'],
  ['/game-servers/satisfactory/', '/satisfactory/'],
  ['/game-servers/sons-of-the-forest/', '/sons-of-the-forest/'],
  ['/game-servers/towerunite/', '/towerunite/'],
  ['/getting-started/nitro-panel/', '/nitro-panel/'],
  ['/getting-started/managed-nitro/', '/managed-nitro/'],
];

// Image extensions
const imgExts = /\.(png|jpg|jpeg|gif|webp|avif|svg)/i;

function fixImagePaths(content) {
  let result = content;
  for (const [bad, good] of badPrefixes) {
    // Only fix inside image references: ![...]( path )
    // Match ![anything](badprefix/file.ext)
    const escaped = bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp('(!\\[[^\\]]*\\]\\()' + escaped + '([^)]+)', 'g');
    result = result.replace(regex, (match, prefix, filename) => {
      if (imgExts.test(filename)) {
        return prefix + good + filename;
      }
      return match; // Not an image, leave alone
    });
  }
  return result;
}

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
for (const filePath of files) {
  const original = fs.readFileSync(filePath, 'utf-8');
  const fixed = fixImagePaths(original);
  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, 'utf-8');
    console.log(`  ✓ Fixed images in ${path.relative('.', filePath)}`);
    changed++;
  }
}

console.log(`\nDone: ${changed} files fixed\n`);
