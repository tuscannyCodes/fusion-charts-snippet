






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







// let setScore= ""

for (const key in data) {

// console.log(`${key} : ${data[key].score}`);
// console.log(`${data[key].Name}`);
// setScore = data[key].score;
// console.log(setScore);



render(data[key]);

}
// end of for loop



function render(skill) {

    // console.log(pointerVal)
    
        // CHART 3
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
        // "annotations": {
        //     "origw": "400",
        //     "origh": "190",
        //     "autoscale": "1",
        //     "groups": [{
        //         "id": "range",
        //         "items": [{
        //             "id": "rangeBg",
        //             "type": "rectangle",
        //             "x": "$chartCenterX-115",
        //             "y": "$chartEndY-35",
        //             "tox": "$chartCenterX +115",
        //             "toy": "$chartEndY-15",
        //             "fillcolor": "#0075c2"
        //         }, {
        //             // "id": "rangeText",
        //             // "type": "Text",
        //             // "fontSize": "11",
        //             // "fillcolor": "#ffffff",
        //             // "text": "Recommended Utilization Range : 70% - 85%",
        //             // "x": "$chartCenterX",
        //             // "y": "$chartEndY-25"
        //         }]
        //     }]
        // }
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








        
        
        