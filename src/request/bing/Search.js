const axiosRequest = require('utils/axios-request');
const objectToQuery = require("utils/objectToQuery");

module.exports = (content)=>{
	const object = {
		pt: "msnedgentp",
		rt: "1",
		qry: content,
		cp: "0",
		contentWidth: "400",
		pc: "U531",
		msbqf: "false",
		cvid: "20840a5186794c63a87bfe56554032c6"
	};
	const header = {
		cookie:"MUID=3917027A16116140010F13A517C360E8; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=BD45A94C2FC84B81B44715925059BA93&dmnchg=1; ANON=A=EA0B72FC5800E4441F3EA8DDFFFFFFFF; USRLOC=HS=1; ABDEF=V=13&ABDV=13&MRNB=1657678976785&MRB=0; SRCHUSR=DOB=20220712&T=1663909506000; SRCHHPGUSR=SRCHLANG=zh-Hans&BRW=XW&BRH=M&CW=1920&CH=969&SW=1920&SH=1080&DPR=1&UTC=480&DM=1&PV=10.0.0&EXLTT=9&HV=1663909507&BZA=0&THEME=1&PR=1.25&PRVCW=1536&PRVCH=754&WTS=63799506306; _SS=SID=2C22C8C0F56268A60FF3DAF0F4BB69EA; SUID=A",
		refer:"https://ntp.msn.cn/",
		orgine:"https://ntp.msn.cn"
	}

	const options = {
		url: `https://www.bing.com/AS/Suggestions${objectToQuery(object)}`,
		method: 'GET'
	}
	console.log(options.url);
	return axiosRequest(options)
}
