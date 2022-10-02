// https://www.google.com.hk/complete/search?q=%E6%B3%95%E8%A5%BF%E6%96%AF&cp=3&client=gws-wiz&xssi=t&hl=zh-CN&authuser=0&psi=MD04Y77PPIXB4-EPzpWg6AI.1664630065667&newwindow=1&dpr=1.25

const https = require('https')

const req = https.request({
	hostname:"clients1.google.com",
	path:"/complete/search?hl=zh&output=toolbar&q=xx",
	method:"GET"
},(res)=>{

	res.on('data',(d)=>{
		console.log(d);
	})
})

req.end()