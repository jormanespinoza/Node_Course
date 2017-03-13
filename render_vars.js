var http = require('http');
    fs = require('fs'); // Allows reading files

http.createServer(function (req,res) {
  fs.readFile('./index.html', function (err, html) {
    var html_string = html.toString();
    // Regular Expression
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var name = 'Jorman';

    // Variables ['name']
    for (var i = 0; i < variables.length; i++) {
      /* It executes as javaScript code
      to obtain the variable's value */
      var value = eval(variables[i]);
      // Changes the content of the value between {}
      html_string = html_string.replace("{"+variables[i]+"}", value);
    }

    // Send Data
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(html_string);
    res.end();
  });
}).listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});
