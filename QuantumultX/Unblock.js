/**
 * 
 *
 */

var body = $response.body;
var obj = JSON.parse(body);

obj['content']['notices'] = [];
obj['content']['isWhitelist'] = true;
body = JSON.stringify(obj);

console.log(body);

$done(body);