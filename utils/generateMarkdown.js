// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    return `![badge-image](https://img.shields.io/static/v1?label=license&message=${license.replace(
      " ",
      "-"
    )}&color=green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `https://choosealicense.com/licenses/${license
      .toLowerCase()
      .replace(" ", "-")}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseLink = renderLicenseLink(license);
  return `## License
  
  This project is licensed under the ${license} license.
  The link to the license is at ${licenseLink}.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.projectLicense);
  let licenseSection = renderLicenseSection(data.projectLicense);
  return `# ${data.projectTitle}
  ${licenseBadge}

## Table of Contents
-- [Installation](#installation)
-- [Usage](#usage)
-- [Credits](#credits)
-- [License](#license)

## Description
${data.projectDescription}

## Installation
${data.installationInstructions}

## Usage
${data.usageInstructions}

## Testing
${data.testInstructions}

## How to Contribute
${data.contributionInstructions}

${licenseSection}

## Questions?
Github: https://github.com/${data.githubUsername}
Email: ${data.emailAddress}
`;
}

module.exports = generateMarkdown;
