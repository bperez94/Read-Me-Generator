// function to generate markdown for README
module.exports.generateMarkdown = function generateMarkdown(data) {
  //console.log(data);
return `

# ${data.title}
    
#Created on ${data.date}

# By ${data.developer}

## Description 
${data.description}
    
## Installation
${data.install}
    
## Known bugs
${data.bugs}
    
## Contact Information
${data.contact}
    
## Technologies Used 
${data.tech}
    
## Contribution
${data.contribution}
    
### License
${data.license}

`;} 




