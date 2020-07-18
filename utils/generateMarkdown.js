// function to generate markdown for README
module.exports.generateMarkdown = function generateMarkdown(data) {
  //console.log(data);
return `

# Table of Contents
1.[Title] (#title)
2.[Description] (#description)
3.[Installation] (#install)
4.[Bugs] (#bugs)
5.[Support] (#contact)
6.[Contribution] (#contribution)
7.[License] (#license)

# ${data.title}
    
#### Created on ${data.date}

#### By ${data.developer}

## ${data.description}
    
## ${data.install}
    
## ${data.bugs}
    
## ${data.contact}
    
## ${data.tech}
    
## ${data.contribution}
    
### ${data.license}

`;} 




