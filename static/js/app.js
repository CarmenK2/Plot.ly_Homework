//using D3 library to import json data
d3.json("samples.json").then((data) => {
    console.log(data);

// Looping each element from name and append and added to the drop down list
data.names.forEach((name) => {
    d3.select("#selDataset").append("option")
        .property("value",name)
        .text(name);
        });



//   Create Horizontal bar 

//     var data = [{
//         type: 'bar',
//         x: [20, 14, 23],
//         y: ['giraffes', 'orangutans', 'monkeys'],
//         orientation: 'h'
//       }];
      
//       Plotly.newPlot('bar', data);


//sample=data.sample.filter(SeletedID)
// var data = [{
//         type: 'bar',
//         x: sample.sample_values,
//         y: sample.otu_ids,
//         text:sample.otu_labels,
//         orientation: 'h'
//       }];
      
//       Plotly.newPlot('bar', data);



     
    // function filterTable() {

    //     // Prevent the page from refreshing
    //     d3.event.preventDefault();
    //      // Select the input element and get the raw HTML node - id is datetime (id use #)
    //     var inputElement = d3.select("#selDataset");
    //     // Get the value property of the input element
    //     var inputValue = inputElement.property("value");
    
    //     console.log(inputValue);
    //     // use filter method to match inputvalue from the main data by datetime key
    //     var filteredData = data.filter(elem => elem.selDataset === inputValue);
    
    //     console.log(filteredData);
    //     // use the buildTable function to create a table using data from filteredData
    //     buildTable(filteredData);
    
    // }


// Create a bubble chart
//     var trace1 = {
//         x: [1, 2, 3, 4],
//         y: [10, 11, 12, 13],
//         mode: 'markers',
//         marker: {
//             size: [40, 60, 80, 100]
//         }
//     };

//     var data = [trace1];

//     var layout = {
//         title: 'Marker Size',
//         showlegend: false,
//         height: 600,
//         width: 600
//     };

//     Plotly.newPlot('bubble', data, layout);


})

// // Call updatePlotly() when a change takes place to the DOM
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//   // Use D3 to select the dropdown menu
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");



