app.directive('lineGraph', ['d3', function(d3){
  //in html, refer to this directive as <line-graph></line-graph>

    var link = function(scope, element, attrs) {

        console.log(scope.lineData);
        console.log(scope.yTitle);
        console.log(scope.xTitle);
        console.log(element[0].parentElement.clientWidth);

        var data = JSON.parse(scope.lineData);

        var w = element[0].parentElement.clientWidth;
        var h = element[0].parentElement.clientHeight;

        var margin = {
          top: 58,
          bottom: 100,
          left: 80,
          right: 40
        };

        var width = w - margin.left - margin.right;
        var height = h - margin.top - margin.bottom;

        var svg = d3.select("#lineGraphs").append("svg")
                    .attr("id", "chart")
                    .attr("width", w)
                    .attr("height", h);
                    console.log(svg);

        var chart = svg.append("g")
                    .classed("display", true)
                    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

        var dateParser = d3.timeParse("%B %Y");
        // console.log(dateParser("June 2014"));
        var x = d3.scaleTime()
                  .domain(d3.extent(data, function(d){
                    var date = dateParser(d.date);
                    return date;
                  }))
                  .range([0, width]);

        var y = d3.scaleLinear()
                  .domain([0, d3.max(data, function(d){
                    return d.value * 1.25;
                  })])
                  .range([height, 0]);

        var xAxis = d3.axisBottom(x)
                      .tickFormat(d3.timeFormat("%b"));
        var yAxis = d3.axisLeft(y)
                      .ticks(5);
        var yGridlines = d3.axisLeft(y)
                          .tickSize(-width, 0, 0)
                          .tickFormat("");


        var line = d3.line()
                    .x(function(d){
                      var date = dateParser(d.date);
                      return x(date);
                    })
                    .y(function(d){
                      return y(d.value);
                    });

        function plot(params){
          console.log(params.data[0].key);

          this.append("g")
              .call(yGridlines)
              .classed("gridline", true)
              .attr("transform", "translate(0,0)");

          this.append("g")
              .classed("x axis", true)
              .attr("transform", "translate(0," + height + ")")
              .call(params.axis.x);

          this.append("g")
              .classed("y axis", true)
              .attr("transform", "translate(0,0)")
              .call(params.axis.y);

          // enter()
          this.selectAll(".trendline")
              .data([params.data])
              .enter()
                .append("path")
                .classed("trendline", true);

          this.selectAll(".point")
            .data(params.data)
            .enter()
              .append("circle")
              .classed("point", true)
              .attr("r", 2);

          // update
          this.selectAll(".trendline")
              .attr("d", function(d){
                return line(d);
              });

          this.selectAll(".point")
            .attr("cx", function(d){
              var date = dateParser(d.date);
              return x(date);
            })
            .attr("cy", function(d){
              return y(d.value);
            });
          // exit()
          this.selectAll(".trendline")
              .data([params.data])
              .exit()
              .remove();

          this.selectAll(".point")
            .data(params.data)
            .exit()
            .remove();

            this.append("text")
            .attr("class", "y axis")
            .attr("x", 0)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .attr("transform", "translate(-50 , " + height/2 + ") rotate(-90)")
            .text(scope.leftTitle);

            this.append("text")
              .attr("class", "x axis")
              .attr("x", 0)
              .attr("y", height)
              .attr("text-anchor", "middle")
              .attr("transform", "translate(" + width/2 + ", 50)")
              .text(scope.bottomTitle);

            this.append("text")
              .attr("x", (width / 2))
              .attr("y", 0 - (margin.top / 2))
              .attr("text-anchor", "middle")
              .style("font-size", "18px")
              .style("text-decoration", "underline")
              .text(params.data[0].key);
            }

        plot.call(chart, {
          data: data,
          axis: {
            x: xAxis,
            y: yAxis
          }
        });
};



    return {
        scope : {
          lineData: "@",
          leftTitle: "@",
          bottomTitle: "@",
          graphTitle: "@"
        },
        replace : true,
        link : link,
        restrict : 'E'
    };

}]);
