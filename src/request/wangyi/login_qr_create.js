const QRCode = require('qrcode')

module.exports =async (key)=>{
	return new Promise(async (resolve) => {
		const url = `https://music.163.com/login?codekey=${key}`;
		return resolve({
			qrUrl: url,
			qrImg: await QRCode.toDataURL(url)
		})
	})
}
