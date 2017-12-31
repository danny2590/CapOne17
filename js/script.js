  $.getJSON("https://raw.githubusercontent.com/danny2590/CapOne17/master/data/zipcodes.json", function(data) {
      //console.log($("#myChart"));
      const myChart = document.getElementById("myChart").getContext("2d");

      //sort through my json data which has created an array of objects and return the listed parameters
      const neighborhoods = data.map(function(location) {
          return location.neighborhoods;
      });
      const nightlyCost = data.map(function(location) {
          return location.avgPrice;
      });
      const bookingFrequency = data.map(function(location) {
          return location.listings;
      });

      const chartOptions = {
          type: 'bar',
          data: {
              labels: neighborhoods,
              datasets: [{
                      label: 'Price Per Night',
                      data: nightlyCost,
                      backgroundColor: randomColor(),
                  },
                  {
                      type: 'line',
                      label: "Booking Frequency",
                      data: bookingFrequency,
                      fill: false,

                  }
              ]
          },
          //The code immediately preceeding options creates adds stylistic elements to my charts
          options: {
              legend: {
                  display: true
              },
              title: {
                  display: true,
                  text: 'Average Price Per Night'
              }
          }
      };

      return new Chart(myChart, chartOptions);
  });



  //Pie Chart
  //console.log($("#pieChart"));
  $.getJSON("https://raw.githubusercontent.com/danny2590/CapOne17/master/data/zipcodes.json", function(data) {
      const pieChart = document.getElementById("pieChart").getContext('2d');

      //sort through my json data which has created an array of objects and return the listed parameters
      const neighborhoods = data.map(function(location) {
          return location.neighborhoods;
      });
      const nightlyCost = data.map(function(location) {
          return location.avgPrice;
      });
      const bookingFrequency = data.map(function(location) {
          return location.listings;
      });

      const pieChartOptions = {
          type: 'pie', // bar, horizontalBar, pie, line, doughnut, radr, polarArea charts are available
          data: {
              labels: neighborhoods.slice(0, 10), // As the data (number of neighborhoods && listings) is too large to display in an appealing way
              backgroundColorHover: randomColor(), // I am using the slice method to limit my chart to show only the first 10 properties of my neighborhoods array
              datasets: [{
                  label: "No. of Listings",
                  data: bookingFrequency.slice(0, 10),
                  backgroundColor: randomColor({ //the use of this randomColor call was to create some differentiation in the data by
                      count: 10, //pasing an array of colorsinto the diferent properties of my pie-chart
                      hue: 'random',
                      luminosity: 'light',
                  }),
              }]
          },
          options: {
              legend: {
                  display: true
              },
              title: {
                  display: true,
                  text: 'Most Frequently Booked Neighborhoods'
              }
          }
      };

      return new Chart(pieChart, pieChartOptions);
  });


  // Last Chart - Bedrooms vs. Reviews -- For this chart I am grouping together two sets of data to form a grouped bar-chart
  // as well as adding an overlayed line chart to show progression_______________________
  //console.log($("#reviewChart"));
  $.getJSON("https://raw.githubusercontent.com/danny2590/CapOne17/master/data/listings.json", function(data) {
      const reviewChart = document.getElementById("reviewChart").getContext("2d");

      //sort through my json data which has created an array of objects and returned the listed items
      //created a function that sorts through the array and groups the # of bedrooms
      const bedrooms = data.map(function(location) {
          return location.bedrooms;
      });
      const reviewScore = data.map(function(location) {
          return location.avg_review_score;
      });
      const avgEarnings = data.map(function(location) {
          return location.avg_price;
      });
      const reviewNums = data.map(function(location) {
          return location.num_reviews;
      });

      // Bar Chart, Display Options: Color and Labels
      const plotOptions = {
          type: 'bar', // Types of possible charts as provided by Chart.js bar, horizontalBar, pie, line, doughnut, radr, polarArea charts are available
          data: {
              labels: ["Studio", "One Bedroom", "Two Bedroom", "Three Bedroom", "Four Bedroom", "Five Bedroom", "Six Bedroom", "Seven Bedroom"],
              datasets: [{
                  label: "Per Night Price",
                  type: "line",
                  backgroundColor: "rgba(95, 125, 151, 0.9)",
                  data: avgEarnings,
                  fill: false
              }, {
                  label: "Average No of Reviews",
                  type: "bar",
                  backgroundColor: "rgba(164, 189, 134, 0.9)",
                  backgroundColorHover: "#3e95cd",
                  data: reviewNums,
                  fill: false
              }, {
                  label: "Review Score",
                  type: "bar",
                  backgroundColor: "red",
                  data: reviewScore,
              }]
          },
          /*
            A grouped bar chart to display the correlation of reviews, and price, vs. homeSize for profitability!
          */
          options: {
              legend: {
                  display: true
              },
              title: {
                  display: true,
                  text: 'Home Size Vs. Popularity'
              },
              scales: {
                  yAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: "Avg Price Per Room"
                      }
                  }],
                  xAxes: [{
                      scaleLabel: {
                          display: true,
                          labelString: "No. of Bedrooms"
                      }
                  }]
              }
          }
      };
      return new Chart(reviewChart, plotOptions);
  });


  //  Animate the Scroll Mouse Button on HeaderMast
  $(document).ready(function() {
      $(".mouse").click(function(event) {
          $('html, body').animate({
              scrollTop: '+=575px'
          }, 1200);
      });
  });

  //Grab the information entered into the zipcode form
  //method should get the zipcode entered iterate
  //through the file and once a matching zipcode is found
  //should return the neighborhood

  $("#zipBtn").click(function() {
      var lat = document.getElementById("lat").value;
      var long = document.getElementById("long").value;


      //var test = 12345;
      /*if (zip <= test) {
          console.log("Less than " + test);
          //document.write("<td style='width: 100px; color: red; text-align: right;'>" + zip + "</td>");
      } else {
          console.log("Greater than Zip " + zip)
      }*/
      //getArray(zip);
      filterJSON(lat, long);
  });
  //create a new table with the zipcode information

  // iterating through the elements in the town array in testFile.JSON and comparing it to
  // the user entered zipCode

  // Original Method Mapping through JSON file failed because the method went through each element
  // fileSize was too big and Data was too interconnected
  
 /* function getArray(zipcode) {
      var x = $.getJSON("../data/zipcodes.json", function(data) {
          //const zip = document.write("<td style='width: 100px; color: red; text-align: right;'>Col Head 2</td>");
          const zip = data.map(function(location) {
              var area = location.neighborhoods;
              var match = false;
              var popSize = document.getElementById("newNightly");

          // console.log("TEST");

              for(var i = 0 in location){           //iterating through the individual objects inside of location array
                  if (zipcode == area){
                     match = true;                 //this boolean will pass through directions
                     popSize.innerHTML = location.avgPrice;
                 }
                  break;
              };
              //return popSize;
          });
      });
  };*/

  function filterJSON(lat, long) {
      var check = $.getJSON("https://raw.githubusercontent.com/danny2590/CapOne17/master/data/locate.json", function(data) {
          var hoodName = document.getElementById("newZip");
          var hoodPrice = document.getElementById("newNightly");
          var hoodWeeklyPrice = document.getElementById("newPrice");
          var hostPricing;      //instance variable for location pricing data
          var weeklyPrice;
          const hostData = data.filter(function (el){               //filtering through the JSON for specific targets
              return (el.latitude == lat) && (el.longitude == long);
          }).map(function (el){
              //return el.price;
              hostPricing = el.price;
              return el.neighbourhood_cleansed;
          })
            weeklyPrice = hostPricing * 7;
            hoodName.innerHTML = hostData;
            hoodPrice.innerHTML = hostPricing;
            hoodWeeklyPrice.innerHTML = weeklyPrice;

      });
  };
