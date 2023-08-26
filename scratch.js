 /** 
     * Any time i choose one of the licenses the corresponding badge pops up.
     * The licenses I want to choose from are ibm, mit, isc, and mozilla.
     * https://img.shields.io/badge/License-IPL_1.0-blue.svg
     * https://img.shields.io/badge/License-MIT-yellow.svg
     * https://img.shields.io/badge/License-ISC-blue.svg
     * https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg
     * Use template literal to equate with each license. keep the rest of the link the same. `https...` + ${color} + `.svg`
     * 
     * ${blue} = questions.choices[0] 
     * ${yellow} = questions.choices[1]
     * ${blue} = questions.choices[2]
     * ${brightgreen} = questions.choices[3]
     * var color =
     * 
     *   choices: ['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0' ],
     * 
     * https://img.shields.io/badge/License- + ${licenseColor[0]} + .svg
     * use indexOf() to 
    */
   const licenseColor = ['IPL_1.0-blue', 'MIT-yellow', 'ISC-blue', 'MPL_2.0-brightgreen'];
   const choices = ['IBM Public License Version 1.0', 'MIT', 'ISC', 'Mozilla Public License 2.0' ]
   const userInput = response.choices

   const choiceIndex = choices.indexOf(userInput)
   console.log(licenseColor[choiceIndex])