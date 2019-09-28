const tempData = {
		title: {
			text: 'Avg Temperature in Fahrenheit in 2018',
		},
		data: [
			{
				type: "column",
				dataPoints: [
					{ label: "California",  y: 65  },
					{ label: "New York", y: 55  },
					{ label: "Florida", y: 68 },
					{ label: "Washington",  y: 45  },
					{ label: "Neveda",  y: 73  }
					]
			}
			]
	};

const rainData = {
		title: {
			text: 'Avg Rainfall in cm in 2018',
		},
		data: [
			{
				type: "column",
				dataPoints: [
					{ label: "California",  y: 4  },
					{ label: "New York", y: 6  },
					{ label: "Florida", y: 18 },
					{ label: "Washington",  y: 10  },
					{ label: "Neveda",  y: 4  }
					]
			}
			]
	};

module.exports.get_graphs = function(req, res, next) {
	var featureData = rainData;
	if(req.query.type == "temp"){
		featureData = tempData;
	}
	
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(featureData));
};