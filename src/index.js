
/* 
Author: Tscanny 
last updated : 4 21 22
Description: dynamically renedered fusionchart based on dataset
*/





// DATA to loop over

const data = 
{
	skill_1: {
		Name: 'Skill 1',
		score: 77,
        renderAt: 'chart-container3'
	},
	skill_2: {
		Name: 'Skill 2',
		score: 66,
        renderAt: 'chart-container4'
	},
	skill_3: {
		Name: 'Skill 3',
		score: 88,
        renderAt: 'chart-container5'
	}
};
// DATA to loop over END

// for in loop start 
for (const key in data) {

// this calls the render function that is building the charts with the data

render(data[key]);

}
// end of for loop



function render(skill) {

    
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
     
    }



// attempt at dynamic data using map

// const mappedScores = 
// Object.values(data).map((skill) => {

// return skill.score + skill.Name;

// })
// console.log(mappedScores)








        
        
        