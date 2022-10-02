const axiosRequest = require('../../utils/axios-request');
const objectToQuery = require("../../utils/objectToQuery");

const search = (content)=>{
	const object = {
		q:content,
		cp:content.length,
		client:"gws-wiz",
		xssi: "t",
		hl: "zh-CN",
		authuser: "0",
		psi: "MD04Y77PPIXB4-EPzpWg6AI.1664630065667",
		newwindow: "1",
		// gs_mss: "pppp12",
		dpr: "1.25"
	};
	const headers = {
		":authority": "www.google.com.hk",
		":method": "GET",
		":path": "/complete/search?q=x%27x&cp=3&client=gws-wiz&xssi=t&hl=zh-CN&authuser=0&pq=%E8%80%8C%E6%B3%95%E5%9B%BD&psi=B4o4Y5OhK5O63LUPhLqc0AY.1664649736611&newwindow=1&dpr=1.25",
		":scheme": "https",
		"accept": "*/*",
		"accept-encoding": "gzip, deflate, br",
		"accept-language": "zh-CN,zh;q=0.9",
		"cookie":"AEC=AakniGM0D8YR8MfxoEg6XrK6N_9z-HMsEmCD1aMaBxEmdWl_T7gYf5W3Tc0; DV=w9i92JBq3uQkYIMZotJe81rZ-7JNORjiKlD-42UvvwMAAAA; NID=511=DtypPyO0OUQcabWZiNOL59b_Y9GeS5TeGflhVnwuvJRpk1h5__k56MnG-vxBDvjWcszAPKrhwsyMi3ikaDxCXYXzgXuOfTt6KJoHXip7W3FW1RBQj5g_iZLIzM_lX1KrA115hhjiL5ORxklweIa0T-KMK9PfAqe7R8rhXS_C_1XdbvJxDYBD6iAipg; OTZ=6705762_24_24__24_; 1P_JAR=2022-10-01-18",
		"referer": "https://www.google.com.hk/",
		"sec-ch-ua": `"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"`,
		"sec-ch-ua-arch": "x86",
		"sec-ch-ua-bitness": "64",
		"sec-ch-ua-full-version": "104.0.5112.102",
		"sec-ch-ua-full-version-list": `"Chromium";v="104.0.5112.102", " Not A;Brand";v="99.0.0.0", "Google Chrome";v="104.0.5112.102"`,
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-model":"",
		"sec-ch-ua-platform": "Windows",
		"sec-ch-ua-platform-version": "10.0.0",
		"sec-ch-ua-wow64": "?0",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode":"cors",
		"sec-fetch-site": "same-origin",
		"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36"
	}
	const options = {
		url: `https://www.google.com.hk/complete/search${objectToQuery(object)}`,
		// url:"http://clients1.google.com/complete/search?hl=zh&output=toolbar&q=xx",
		method: 'GET',
		headers:headers
	}

	return axiosRequest(options)
}

module.exports = search;