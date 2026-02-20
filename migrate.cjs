/**
 * WikiJS → Astro Starlight migration script
 * 
 * Mechanical transformations only — no content rewriting:
 * 1. Strip WikiJS frontmatter fields, keep title + description
 * 2. Remove duplicate H1 that matches the title  
 * 3. Strip WikiJS image sizing syntax (=WIDTHx, =WIDTHxHEIGHT)
 * 4. Convert WikiJS callouts ({.is-warning}, {.is-danger}, {.is-success}) → Starlight admonitions
 * 5. Strip WikiJS CSS classes ({.align-center}, etc.)
 */

const fs = require('fs');
const path = require('path');

function transformMarkdown(content) {
  // 1. Parse and rebuild frontmatter
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) {
    console.warn('  WARNING: No frontmatter found');
    return content;
  }

  const fmBlock = fmMatch[1];
  const afterFrontmatter = content.slice(fmMatch[0].length);

  // Extract title and description from frontmatter
  const titleMatch = fmBlock.match(/^title:[^\S\r\n]*(.+)$/m);
  const descMatch = fmBlock.match(/^description:[^\S\r\n]*(.+)$/m);

  const title = titleMatch ? titleMatch[1].trim() : 'Untitled';
  const description = descMatch ? descMatch[1].trim() : '';

  // Build clean Starlight frontmatter
  let newFrontmatter = `---\ntitle: "${title.replace(/"/g, '\\"')}"`;
  if (description) {
    newFrontmatter += `\ndescription: "${description.replace(/"/g, '\\"')}"`;
  }
  newFrontmatter += '\n---';

  let body = afterFrontmatter;

  // 2. Remove duplicate H1 that matches the title (with optional ** bold wrapping)
  // Match the first H1 in the document — strip if it's essentially the same as the title
  const h1Regex = /^#\s+\**([^\n*]+)\**\s*$/m;
  const h1Match = body.match(h1Regex);
  if (h1Match) {
    const h1Text = h1Match[1].trim();
    // Compare case-insensitively, ignoring punctuation differences
    if (h1Text.toLowerCase().replace(/[^a-z0-9]/g, '') === title.toLowerCase().replace(/[^a-z0-9]/g, '')) {
      body = body.replace(h1Match[0], '');
    }
  }

  // 3. Strip WikiJS image sizing syntax: ![alt](path =WIDTHx) or ![alt](path =WIDTHxHEIGHT)
  body = body.replace(/(!\[[^\]]*\]\([^)]+?)\s+=\d+x\d*\)/g, '$1)');

  // 4. Convert WikiJS callouts to Starlight admonitions
  // Pattern: > text\n{.is-warning} → :::caution\ntext\n:::
  // WikiJS format: > line1\n> line2\n{.is-warning}
  body = body.replace(/^((?:>[ \t]+.*\n?)+)\{\.is-warning\}\s*$/gm, (match, blockquote) => {
    const text = blockquote.replace(/^>\s?/gm, '').trim();
    return `:::caution\n${text}\n:::`;
  });
  body = body.replace(/^((?:>[ \t]+.*\n?)+)\{\.is-danger\}\s*$/gm, (match, blockquote) => {
    const text = blockquote.replace(/^>\s?/gm, '').trim();
    return `:::danger\n${text}\n:::`;
  });
  body = body.replace(/^((?:>[ \t]+.*\n?)+)\{\.is-success\}\s*$/gm, (match, blockquote) => {
    const text = blockquote.replace(/^>\s?/gm, '').trim();
    return `:::tip\n${text}\n:::`;
  });
  body = body.replace(/^((?:>[ \t]+.*\n?)+)\{\.is-info\}\s*$/gm, (match, blockquote) => {
    const text = blockquote.replace(/^>\s?/gm, '').trim();
    return `:::note\n${text}\n:::`;
  });

  // 5. Strip remaining WikiJS CSS classes like {.align-center}
  body = body.replace(/\{\.[\w-]+\}/g, '');

  // Clean up excessive blank lines (more than 2 consecutive)
  body = body.replace(/\n{4,}/g, '\n\n\n');

  return newFrontmatter + body;
}

function migrateFile(srcPath, destPath) {
  const content = fs.readFileSync(srcPath, 'utf-8');
  const transformed = transformMarkdown(content);

  const destDir = path.dirname(destPath);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(destPath, transformed, 'utf-8');
  console.log(`  ✓ ${path.relative('.', srcPath)} → ${path.relative('.', destPath)}`);
}

// Migration mapping: [sourcePath, destPath]
// Index files get renamed to index.md
const migrations = {
  batch1: [
    // === Enshrouded ===
    ['import-data/enshrouded.md', 'src/content/docs/game-servers/enshrouded/index.md'],
    ['import-data/enshrouded/how-to-connect.md', 'src/content/docs/game-servers/enshrouded/how-to-connect.md'],
    ['import-data/enshrouded/quest-progression.md', 'src/content/docs/game-servers/enshrouded/quest-progression.md'],

    // === Foundry ===
    ['import-data/foundry.md', 'src/content/docs/game-servers/foundry/index.md'],
    ['import-data/foundry/how-to-connect-to-foundry.md', 'src/content/docs/game-servers/foundry/how-to-connect-to-foundry.md'],
    ['import-data/foundry/how-to-add-mods.md', 'src/content/docs/game-servers/foundry/how-to-add-mods.md'],
    ['import-data/foundry/create-collection-for-mod-syncing.md', 'src/content/docs/game-servers/foundry/create-collection-for-mod-syncing.md'],
    ['import-data/foundry/manage-automated-backups.md', 'src/content/docs/game-servers/foundry/manage-automated-backups.md'],
    ['import-data/foundry/transfer-singleplayer-save.md', 'src/content/docs/game-servers/foundry/transfer-singleplayer-save.md'],

    // === Hytale ===
    ['import-data/hytale/Hytale.md', 'src/content/docs/game-servers/hytale/index.md'],
    ['import-data/hytale/download-install-hytale-server.md', 'src/content/docs/game-servers/hytale/download-install-hytale-server.md'],

    // === Tower Unite ===
    ['import-data/towerunite.md', 'src/content/docs/game-servers/towerunite/index.md'],
    ['import-data/towerunite/how-to-setup-condo.md', 'src/content/docs/game-servers/towerunite/how-to-setup-condo.md'],
    ['import-data/towerunite/known-issues.md', 'src/content/docs/game-servers/towerunite/known-issues.md'],

    // === Sons of the Forest ===
    ['import-data/sons-of-the-forest.md', 'src/content/docs/game-servers/sons-of-the-forest/index.md'],
    ['import-data/sons-of-the-forest/connect-to-server.md', 'src/content/docs/game-servers/sons-of-the-forest/connect-to-server.md'],
    ['import-data/sons-of-the-forest/manage-admins.md', 'src/content/docs/game-servers/sons-of-the-forest/manage-admins.md'],
    ['import-data/sons-of-the-forest/upload-saves.md', 'src/content/docs/game-servers/sons-of-the-forest/upload-saves.md'],
  ],

  batch2: [
    // === Minecraft ===
    ['import-data/minecraft.md', 'src/content/docs/game-servers/minecraft/index.md'],
    ['import-data/minecraft/how-to-connect.md', 'src/content/docs/game-servers/minecraft/how-to-connect.md'],
    ['import-data/minecraft/modpacks.md', 'src/content/docs/game-servers/minecraft/modpacks.md'],
    ['import-data/minecraft/change-server-version.md', 'src/content/docs/game-servers/minecraft/change-server-version.md'],
    ['import-data/minecraft/optimize-your-minecraft-server-maximum-performance.md', 'src/content/docs/game-servers/minecraft/optimize-your-minecraft-server-maximum-performance.md'],
    ['import-data/minecraft/server-commands.md', 'src/content/docs/game-servers/minecraft/server-commands.md'],
    ['import-data/minecraft/upload-saved-games.md', 'src/content/docs/game-servers/minecraft/upload-saved-games.md'],

    // === Palworld ===
    ['import-data/palworld.md', 'src/content/docs/game-servers/palworld/index.md'],
    ['import-data/palworld/connect-to-server.md', 'src/content/docs/game-servers/palworld/connect-to-server.md'],
    ['import-data/palworld/server-name-and-password.md', 'src/content/docs/game-servers/palworld/server-name-and-password.md'],
    ['import-data/palworld/server-settings.md', 'src/content/docs/game-servers/palworld/server-settings.md'],
    ['import-data/palworld/admin-commands.md', 'src/content/docs/game-servers/palworld/admin-commands.md'],
    ['import-data/palworld/delete-and-archive-saves.md', 'src/content/docs/game-servers/palworld/delete-and-archive-saves.md'],
    ['import-data/palworld/change-server-specs.md', 'src/content/docs/game-servers/palworld/change-server-specs.md'],
    ['import-data/palworld/migrate-save-data.md', 'src/content/docs/game-servers/palworld/migrate-save-data.md'],
    ['import-data/palworld/restore-saves.md', 'src/content/docs/game-servers/palworld/restore-saves.md'],
    ['import-data/palworld/update-server.md', 'src/content/docs/game-servers/palworld/update-server.md'],
    ['import-data/palworld/scheduled-start.md', 'src/content/docs/game-servers/palworld/scheduled-start.md'],
    ['import-data/palworld/rcon-commands.md', 'src/content/docs/game-servers/palworld/rcon-commands.md'],
    ['import-data/palworld/xbox-server.md', 'src/content/docs/game-servers/palworld/xbox-server.md'],
  ],

  batch3: [
    // === Satisfactory ===
    ['import-data/satisfactory.md', 'src/content/docs/game-servers/satisfactory/index.md'],
    ['import-data/satisfactory/first-time-setup.md', 'src/content/docs/game-servers/satisfactory/first-time-setup.md'],
    ['import-data/satisfactory/how-to-join.md', 'src/content/docs/game-servers/satisfactory/how-to-join.md'],
    ['import-data/satisfactory/manage-saves.md', 'src/content/docs/game-servers/satisfactory/manage-saves.md'],
    ['import-data/satisfactory/modsetup.md', 'src/content/docs/game-servers/satisfactory/modsetup.md'],
    ['import-data/satisfactory/satisfactory-1.md', 'src/content/docs/game-servers/satisfactory/satisfactory-1.md'],
    ['import-data/satisfactory/switch-to-experimental.md', 'src/content/docs/game-servers/satisfactory/switch-to-experimental.md'],
    ['import-data/satisfactory/unclaim-server.md', 'src/content/docs/game-servers/satisfactory/unclaim-server.md'],
    ['import-data/satisfactory/upload-singleplayer-save.md', 'src/content/docs/game-servers/satisfactory/upload-singleplayer-save.md'],

    // === Project Zomboid ===
    ['import-data/project-zomboid.md', 'src/content/docs/game-servers/project-zomboid/index.md'],
    ['import-data/project-zomboid/how-to-connect.md', 'src/content/docs/game-servers/project-zomboid/how-to-connect.md'],
    ['import-data/project-zomboid/admin-panel.md', 'src/content/docs/game-servers/project-zomboid/admin-panel.md'],
    ['import-data/project-zomboid/admin-permissions.md', 'src/content/docs/game-servers/project-zomboid/admin-permissions.md'],
    ['import-data/project-zomboid/mod-installation.md', 'src/content/docs/game-servers/project-zomboid/mod-installation.md'],
    ['import-data/project-zomboid/set-server-password.md', 'src/content/docs/game-servers/project-zomboid/set-server-password.md'],
    ['import-data/project-zomboid/singleplayer-copy.md', 'src/content/docs/game-servers/project-zomboid/singleplayer-copy.md'],
    ['import-data/project-zomboid/troubleshooting-mods.md', 'src/content/docs/game-servers/project-zomboid/troubleshooting-mods.md'],

    // === Factorio ===  
    ['import-data/factorio/guides.md', 'src/content/docs/game-servers/factorio/index.md'],
    ['import-data/factorio/connect-to-server.md', 'src/content/docs/game-servers/factorio/connect-to-server.md'],
    ['import-data/factorio/admin.md', 'src/content/docs/game-servers/factorio/admin.md'],
    ['import-data/factorio/intall-mods.md', 'src/content/docs/game-servers/factorio/intall-mods.md'],
    ['import-data/factorio/upload-save.md', 'src/content/docs/game-servers/factorio/upload-save.md'],
  ],

  batch4: [
    // === VPS ===
    ['import-data/vps.md', 'src/content/docs/vps/index.md'],
    ['import-data/vps/os-reinstall.md', 'src/content/docs/vps/os-reinstall.md'],
    ['import-data/vps/root-password-reset.md', 'src/content/docs/vps/root-password-reset.md'],
    ['import-data/vps/ssh-keys.md', 'src/content/docs/vps/ssh-keys.md'],
    ['import-data/vps/snapshot-backups.md', 'src/content/docs/vps/snapshot-backups.md'],
    ['import-data/vps/mfa-setup.md', 'src/content/docs/vps/mfa-setup.md'],

    // === Billing ===
    ['import-data/billing.md', 'src/content/docs/billing/index.md'],

    // === Nitro Panel ===
    ['import-data/nitro-panel.md', 'src/content/docs/getting-started/nitro-panel/index.md'],
    ['import-data/nitro-panel/port-configuration.md', 'src/content/docs/getting-started/nitro-panel/port-configuration.md'],
    ['import-data/nitro-panel/creating-backups.md', 'src/content/docs/getting-started/nitro-panel/creating-backups.md'],
    ['import-data/nitro-panel/using-subdomains.md', 'src/content/docs/getting-started/nitro-panel/using-subdomains.md'],
    ['import-data/nitro-panel/subusers.md', 'src/content/docs/getting-started/nitro-panel/subusers.md'],

    // === Managed Nitro ===
    ['import-data/managed-nitro.md', 'src/content/docs/getting-started/managed-nitro/index.md'],
    ['import-data/managed-nitro/supported-games.md', 'src/content/docs/getting-started/managed-nitro/supported-games.md'],

    // === Server Infrastructure ===
    ['import-data/server-infrastructure.md', 'src/content/docs/getting-started/server-infrastructure.md'],
  ],
};

// Run specified batch
const batchName = process.argv[2];
if (!batchName || !migrations[batchName]) {
  console.log('Usage: node migrate.js <batch1|batch2|batch3|batch4>');
  console.log('Available batches:', Object.keys(migrations).join(', '));
  process.exit(1);
}

console.log(`\nRunning ${batchName} (${migrations[batchName].length} files)...\n`);

let success = 0;
let errors = 0;

for (const [src, dest] of migrations[batchName]) {
  try {
    migrateFile(src, dest);
    success++;
  } catch (err) {
    console.error(`  ✗ ${src}: ${err.message}`);
    errors++;
  }
}

console.log(`\nDone: ${success} succeeded, ${errors} failed\n`);
