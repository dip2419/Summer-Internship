function wordsLen(str) {
  const array = str.split(" ");
  return array.length;
}
const str = "deep patel g";
console.log("Word count:", wordsLen(str));

const b = "deep_patel-g";
function val(name) {
  regexp = /^[a-z_\-]+$/i;
  if (regexp.test(name)) {
    return true;
  } else {
    return false;
  }
}
console.log(val(b));

function extractValue(key, val) {
  let extractValue = key.map((item) => item[val]);
  return extractValue;
}
const c = [
  { a: 1, b: 2 },
  { a: 4, b: 5 },
  { a: 8, b: 9 },
];
console.log(extractValue(c, "b"));

let oldValue = "Vader said: No, I Am your father!";
console.log(oldValue.replace(/a/gi, "o"));

function checkIpAddress(ip) {
    const ipv4Pattern = 
        /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Pattern = 
        /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
}
const ipAddress = "122.1.0.0";
const ipAddress1 = "2001:0000:3238:DFE1:0063:0000:0000:FEFB";
console.log(checkIpAddress(ipAddress));
console.log(checkIpAddress(ipAddress1));