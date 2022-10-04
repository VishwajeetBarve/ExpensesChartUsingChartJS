
let myChart = document.getElementById("myChart").getContext("2d");   //gets the element from the the HTML.


let masspopChart = new Chart(myChart, {                 //creating new chart 
    type:'bar',                                         //bar,horizontal bar ,pie,donut etc
    data : {
        labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],  //labelsfor the data is availble,
        datasets:[{                           // create many object of data for many datasets.
            label:"Money Spent ($)",
            data:[
                17.45,                             //values of the data
                34.91,
                52.36,
                31.07,
                23.39,
                43.28,
                25.48
            ],
            backgroundColor: "hsl(10, 79%, 65%)", //background color of the each bar/block
            hoverBackgroundColor : "hsl(186, 34%, 60%)",   //on hover/click
            borderRadius : 5,       
            
            
        }]
    },
    options: {                 //options is the overall setting of the graphs
        plugins: {                  //pluggins such as legend , tooltip modification
          legend: {
             display:false
          },
          tooltip:{
            xAlign : "center",
            yAlign:"bottom",
            titleAlign :"center",
            padding: 5,
            caretSize:0,
            caretPadding:10,
            backgroundColor:"black",
            
              callbacks: {
                labelColor: function(context){
                  return {
                    backgroundColor : "hsl(186, 34%, 60%)"}
                }
              }
            
          }
        },

        scales:{                                //the scales that show up on the graph
          x:{
            grid:{
              display:false
            }
          },
          y:{
            grid:{
              display:false
            }
          },
          y:{
            display :false
          }
        },
        events : ["mousmove","click"],          //events which are permitted on the graph.
        
        
        
        }
      

});



