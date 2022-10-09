const fs = require('fs')

module.exports = new class {
	async returnSamplePage (ctx,next){
		ctx.response.set('content-type', 'text/html');
		ctx.body = fs.readFileSync(`src/page/sample.html`,'utf-8');
	}
}
