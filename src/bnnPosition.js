const getParam = require('./getParam.js');

let bnnPosition = (declarations) => {

  // Search for declarations
  declarations.forEach((declaration, index) => {

    // Find a custom property
    if (declaration.property === "bnn-position") {

      // Delete a custom property
      declarations.splice(index, 1);

      //Filter values
      let propertyValue1 = getParam(declaration.value, 0);
      let propertyValue2 = getParam(declaration.value, 1);
      let propertyValue3 = getParam(declaration.value, 2);
      let propertyValue4 = getParam(declaration.value, 3);

      // Add properties and values
      declarations.push({
        type: 'declaration',
        property: 'top',
        value: propertyValue1
      });

      declarations.push({
        type: 'declaration',
        property: 'left',
        value: propertyValue2
      });

      declarations.push({
        type: 'declaration',
        property: 'bottom',
        value: propertyValue3
      });

      declarations.push({
        type: 'declaration',
        property: 'right',
        value: propertyValue4
      });

    }

  });

};

module.exports = bnnPosition;
