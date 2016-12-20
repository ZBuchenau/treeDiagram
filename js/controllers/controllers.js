app.controller('mainController', ['$scope', mainController]);

function mainController($scope) {
  var vm = this;

  vm.data = [
    {key: "BDX Gold Package", value: 58, date: "January 2014"},
    {key: "BDX Gold Package", value: 59, date: "February 2014"},
    {key: "BDX Gold Package", value: 58, date: "March 2014"},
    {key: "BDX Gold Package", value: 50, date: "April 2014"},
    {key: "BDX Gold Package", value: 56, date: "May 2014"},
    {key: "BDX Gold Package", value: 80, date: "June 2014"},
    {key: "BDX Gold Package", value: 54, date: "July 2014"},
    {key: "BDX Gold Package", value: 53, date: "August 2014"},
    {key: "BDX Gold Package", value: 60, date: "September 2014"},
    {key: "BDX Gold Package", value: 51, date: "October 2014"},
    {key: "BDX Gold Package", value: 50, date: "November 2014"},
    {key: "BDX Gold Package", value: 10, date: "December 2014"},
    {key: "BDX Gold Package", value: 48, date: "January 2015"}
  ];

  vm.data2 = [
    {key: "BDX Gold Package", value: 50, date: "January 2014"},
    {key: "BDX Gold Package", value: 20, date: "February 2014"},
    {key: "BDX Gold Package", value: 30, date: "March 2014"},
    {key: "BDX Gold Package", value: 40, date: "April 2014"},
    {key: "BDX Gold Package", value: 50, date: "May 2014"},
    {key: "BDX Gold Package", value: 60, date: "June 2014"},
    {key: "BDX Gold Package", value: 70, date: "July 2014"},
    {key: "BDX Gold Package", value: 80, date: "August 2014"},
    {key: "BDX Gold Package", value: 85, date: "September 2014"},
    {key: "BDX Gold Package", value: 86, date: "October 2014"},
    {key: "BDX Gold Package", value: 80, date: "November 2014"},
    {key: "BDX Gold Package", value: 0, date: "December 2014"},
    {key: "BDX Gold Package", value: 48, date: "January 2015"}
  ];

  vm.data3 = [
    {key: "BDX Gold Package", value: 2.25, date: "January 2014"},
    {key: "BDX Gold Package", value: 2.23, date: "February 2014"},
    {key: "BDX Gold Package", value: 2.28, date: "March 2014"},
    {key: "BDX Gold Package", value: 2.27, date: "April 2014"},
    {key: "BDX Gold Package", value: 2.20, date: "May 2014"},
    {key: "BDX Gold Package", value: 1.8, date: "June 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "July 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "August 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "September 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "October 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "November 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "December 2014"},
    {key: "BDX Gold Package", value: 2.2, date: "January 2015"}
  ];


  vm.data4 = [
  [
    {
      "key": "BDX Gold Package",
      "value": 58,
      "date": "January 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 59,
      "date": "February 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 58,
      "date": "March 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 50,
      "date": "April 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 56,
      "date": "May 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 80,
      "date": "June 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 54,
      "date": "July 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 53,
      "date": "August 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 60,
      "date": "September 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 51,
      "date": "October 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 50,
      "date": "November 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 10,
      "date": "December 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 48,
      "date": "January 2015"
    }
  ],
  [
    {
      "key": "BDX Gold Package",
      "value": 50,
      "date": "January 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 20,
      "date": "February 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 30,
      "date": "March 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 40,
      "date": "April 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 50,
      "date": "May 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 60,
      "date": "June 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 70,
      "date": "July 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 80,
      "date": "August 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 85,
      "date": "September 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 86,
      "date": "October 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 80,
      "date": "November 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 0,
      "date": "December 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 48,
      "date": "January 2015"
    }
  ],
  [
    {
      "key": "BDX Gold Package",
      "value": 2.25,
      "date": "January 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.23,
      "date": "February 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.28,
      "date": "March 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.27,
      "date": "April 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "May 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 1.8,
      "date": "June 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "July 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "August 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "September 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "October 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "November 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "December 2014"
    },
    {
      "key": "BDX Gold Package",
      "value": 2.2,
      "date": "January 2015"
    }
  ]
];

}
