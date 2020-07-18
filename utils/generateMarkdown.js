// function to generate markdown for README
module.exports.generateMarkdown = function generateMarkdown(data) {
  console.log(data);
return `
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
    <h2><!--Project Title-->${data.title}</h2>
    <br>
    <h2><!--creadted date-->${data.date}</h2>
    <br>
    <h2><!--description-->${data.description}</h2>
    <br>
    <h2><!--setup/install requirements-->${data.install}</h2>
    <br>
    <h2><!--known Bugs-->${data.bugs}</h2>
    <br>
    <h2><!--support and contact details-->${data.contact}</h2>
    <br>
    <h2><!--Technologies Used-->${data.tech}</h2>
    <br>
    <h2><!--Contribution Guildlines-->${data.contribution}</h2>
    <br>
    <h2><!--License-->${data.license}</h2>
</body>
</html>
`;} 




