// const otu =d3.json("samples.json")
// otu.then((json) =>{

//     var canvas =d3.select("#bar").append("svg")
//         .attr("width",500)
//         .attr("height",500)

//     canvas.selectAll("rect")
//         .data(data)
//         .enter()
//             .append("rect")
//             .attr("width",function (d) {return d.sample_vlaues;})
//             .attr("height", 50)
//             .attr("fill")
// })


var data = [{
    type: 'bar',
    x: [20, 14, 23],
    y: ['giraffes', 'orangutans', 'monkeys'],
    orientation: 'h'
  }];
  
  Plotly.newPlot('bar', data);
  