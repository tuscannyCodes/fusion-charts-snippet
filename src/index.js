
/* 
Author: Tscanny 
last updated : 4 21 22
Description: dynamically renedered fusionchart based on dataset
*/

// variables

const skillHeader1 = document.getElementById('skillHeader1');
const skillHeader2 = document.getElementById('skillHeader2');
const skillHeader3 = document.getElementById('skillHeader3');
const mainContainer = document.getElementById('main');

// DATA to loop over

const data = 
{
	skill_1: {
		Name: 'Skill 1',
        textAt: 'skillHeader1',
		score: 77,
        renderAt: 'chart-container3'
	},
	skill_2: {
		Name: 'Skill 2',
        textAt: 'skillHeader1',
		score: 66,
        renderAt: 'chart-container4'
	},
	skill_3: {
		Name: 'Skill 3',
        textAt: 'skillHeader1',
		score: 88,
        renderAt: 'chart-container5'
	}
};
// DATA to loop over END

// for in loop start 
for (const key in data) {

// this calls the renderChart function that is building the charts with the data
// this calls the renderText function that is creating text with the data
renderChart(data[key]);
renderText(data[key]);
}
// end of for the loop

// this creates h1 text and populates it with skill.name
function renderText(skill){

const header = document.createElement("h1");
header.className = "skillHeader";
header.innerHTML= skill.Name;
mainContainer.appendChild(header)


}


function renderChart(skill) {

    
        FusionCharts.ready(function(){
            var chartObj = new FusionCharts({
    type: 'hlineargauge',
    renderAt: skill.renderAt,
    width: '400',
    height: '190',
    dataFormat: 'json',
    dataSource: {
        "chart": {
            "theme": "fusion",
            "caption": "",
            "subcaption": "",
            "lowerLimit": "0",
            "upperLimit": "100",
            "numberSuffix": "%",
            "chartBottomMargin": "40",
            "valueFontSize": "15",
            "valueFontBold": "0",
            "ticksBelowGauge": "0",
            "placeTicksInside": "0",
            "placeValuesInside": ""
           
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "35",
                "label": "Complete",
            }, {
                "minValue": "35",
                "maxValue": "70",
                "label": "In Progress",
            }, {
                "minValue": "70",
                "maxValue": "100",
                "label": "Incomplete",
            }]
        },
        "pointers": {
            "pointer": [{
                "value": skill.score
            }]
        },
        "trendPoints": {
            "point": [
                //Trendpoint
                {
                    "startValue": "70",
                    "displayValue": " ",
                    "dashed": "1",
                    "showValues": "0"
                }, {
                    "startValue": "85",
                    "displayValue": " ",
                    "dashed": "1",
                    "showValues": "0"
                },
                //Trendzone
                {
                    "startValue": "70",
                    "endValue": "85",
                    "displayValue": " ",
                    "alpha": "40"
                }
            ]
        },
    }
    }
    );
            chartObj.render();
        });
    
    
        // CHART 4
     
    }//End of renderChart Function









          
        