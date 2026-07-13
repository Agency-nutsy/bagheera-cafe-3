const fs = require('fs');
const path = require('path');

const outputFilename = 'all_code.txt';
const directoriesToScan = ['src'];
const allowedExtensions = ['.tsx', '.ts', '.css', '.json', '.js', '.mjs', '.config.js'];
const rootFiles = [
    'tailwind.config.ts', 
    'next.config.mjs', 
    'package.json', 
    'tsconfig.json', 
    'postcss.config.mjs',
    '.eslintrc.json'
];

let allContent = '';

const fileDivider = `


/*********************************************************************************************************
 * 
 * 
 * 
 * 
 * 
 * ==============================================================================
 * END OF PREVIOUS FILE
 * ==============================================================================
 * 
 * 
 * 
 * 
 * 
 *********************************************************************************************************/


`;

// Process root files
rootFiles.forEach(file => {
    const fullPath = path.join(__dirname, file);
    if (fs.existsSync(fullPath)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        allContent += `\n\n\n====================================================================\n`;
        allContent += `📁 FILE PATH: /${file}\n`;
        allContent += `====================================================================\n\n`;
        allContent += content;
        allContent += fileDivider;
    }
});

// Recursively process directories
function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            scanDirectory(fullPath);
        } else {
            const ext = path.extname(fullPath);
            if (allowedExtensions.includes(ext)) {
                const content = fs.readFileSync(fullPath, 'utf8');
                const relativePath = path.relative(__dirname, fullPath).replace(/\\/g, '/');
                
                allContent += `\n\n\n====================================================================\n`;
                allContent += `📁 FILE PATH: /${relativePath}\n`;
                allContent += `====================================================================\n\n`;
                allContent += content;
                allContent += fileDivider;
            }
        }
    });
}

directoriesToScan.forEach(dir => {
    const fullPath = path.join(__dirname, dir);
    if (fs.existsSync(fullPath)) {
        scanDirectory(fullPath);
    }
});

fs.writeFileSync(path.join(__dirname, outputFilename), allContent);
console.log(`✅ Huge success! All project files have been compiled into ${outputFilename}`);
