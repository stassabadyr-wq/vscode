const normalizeUrl = (url) => url.startsWith('https://') ? url : `https://${url}`

console.log(normalizeUrl('yandex'))
console.log(normalizeUrl('https://yandex'))