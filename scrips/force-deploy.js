const { execSync } = require('child_process');

try {
  console.log('Forcefully deploying Next.js project...');
  console.log('Step 1: Building the Next project...');
  execSync('npm run build --force');
  console.log('Step 2: Removing the existing build folder...');
  execSync('rm -rf .next');
  console.log('Step 3: Copying the newly built files...');
  execSync('cp -R .//. .');
  console.log('Step 4: Starting the Next.js server...');
  execSync('npm run start');
  console.log('Forceful deployment completed successfully!');
} catch (error) {
  console.error('Error occurred during force deployment:', error);
}