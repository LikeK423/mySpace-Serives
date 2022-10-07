const fs = require('fs')
const {
	page
} = require('../path')

module.exports = new class {
	async returnSamplePage (ctx,next){
		ctx.response.set('content-type', 'text/html');
		ctx.body = fs.readFileSync(`${page}/sample.html`,'utf-8');
	}
}
