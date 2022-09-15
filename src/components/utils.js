export const sanitizeString = string => {
	const map = {
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#x27;',
		'/': '&#x2F;',
	}
	const reg = /[<>"'/]/gi
	return string.replace(reg, match => map[match])
}
