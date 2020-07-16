// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
  <title>Read Me</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1>Read Me</h1>
  </div>
  </div>
</body>
</html>
`;
}

module.exports = {generateMarkdown};
