// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Read Me</title>
</head>
<body>
    <h1>Read Me</h1>
    <br>
    <h2><!--Project Title--></h2>
    <br>
    <h2><!--creadted date--></h2>
    <br>
    <h2><!--description--></h2>
    <br>
    <h2><!--setup/install requirements--></h2>
    <br>
    <h2><!--known Bugs--></h2>
    <br>
    <h2><!--support and contact details--></h2>
    <br>
    <h2><!--Technologies Used--></h2>
    <br>
    <h2><!--Contribution Guildlines--></h2>
    <br>
    <h2><!--License--></h2>
</body>
</html>
`;
}

module.exports = {generateMarkdown};
