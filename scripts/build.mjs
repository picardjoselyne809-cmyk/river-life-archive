// vinext beta invokes process.exit(0) immediately after prerendering. On
// Windows Node 24 this can race libuv/undici worker shutdown. Let successful
// builds drain naturally; nonzero exit codes retain the CLI's error behavior.
// See https://github.com/nodejs/node/issues/56645
await import('./export-archive.mjs');
const originalExit=process.exit.bind(process);
if(process.platform==='win32')process.exit=(code=0)=>{if(Number(code)!==0)return originalExit(code);process.exitCode=0;};
process.argv=[process.argv[0],'vinext','build',...process.argv.slice(2)];
await import('vinext/dist/cli.js').catch(async error=>{
 if(error.code!=='ERR_PACKAGE_PATH_NOT_EXPORTED')throw error;
 await import(new URL('../node_modules/vinext/dist/cli.js',import.meta.url));
});
