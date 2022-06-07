const { exec, spawn } = require('node:child_process');
console.log(__dirname);
(async () => {
	await exec(`cd ${__dirname} && removeOldBuild.bat`, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});
	await exec(`cd ${__dirname} && makeDirectories.bat`, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});
	await exec(`cd ${__dirname} && copyFiles.bat`, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});
	await exec(`cd ${__dirname} && runTSC.bat`, (err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log(stdout);
	});
})();
