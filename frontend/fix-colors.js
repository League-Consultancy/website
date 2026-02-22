import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('./src', function (filePath) {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // A simple regex approach:
        // We want to replace text-brand-gray-400 with text-brand-gray-600 dark:text-brand-gray-400
        // But ONLY if it's not already preceded by dark:
        content = content.replace(/(?<!dark:)text-brand-gray-400/g, 'text-brand-gray-600 dark:text-brand-gray-400');
        // We want to replace text-brand-gray-500 with text-brand-gray-700 dark:text-brand-gray-500, unless preceded by dark:
        content = content.replace(/(?<!dark:)text-brand-gray-500/g, 'text-brand-gray-700 dark:text-brand-gray-500');

        // Also replace gray-400 that are not brand-gray 
        content = content.replace(/(?<!dark:|brand-)text-gray-400/g, 'text-gray-600 dark:text-gray-400');
        content = content.replace(/(?<!dark:|brand-)text-gray-500/g, 'text-gray-700 dark:text-gray-500');

        // Clean up any double darks if they happened
        content = content.replace(/dark:text-brand-gray-400 dark:text-/g, 'dark:text-');
        content = content.replace(/dark:text-brand-gray-500 dark:text-/g, 'dark:text-');

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
