const replace = require('replace');
const fs = require('fs');

replace({
  regex: '../img',
  replacement: './img',
  paths: ['dist/index.html'],
  recurcsive: false,
  silent: false,
});

replace({
  regex: 'href="../',
  replacement: 'href="./',
  paths: ['dist/index.html'],
  recurcsive: false,
  silent: false,
});

replace({
  regex: 'src="../main',
  replacement: 'src="./main',
  paths: ['dist/index.html'],
  recurcsive: false,
  silent: false,
});

/**
 * for main-*.css
 * - ランダムでハッシュが変わるので、毎回探す
 */
const path = './dist';
let cssFile = '';
fs.readdir(path, function(err, files){
  if(err) throw err;
  fileList = files.filter((file) => {
    if(fs.statSync(path + "/" + file).isFile() && /main-[0-9a-z]+\.css/.test(file)) {
      replace({
        regex: 'url[(]../',
        replacement: 'url(./',
        paths: [
          path + "/" + file
        ],
        recurcsive: false,
        silent: false,
      });
    }
  });
});
