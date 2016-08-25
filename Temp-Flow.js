[  
   {  
      "id":"395c5cf0.93df94",
      "type":"upm-grove-temperature",
      "z":"efc8cb66.40ad18",
      "name":"",
      "platform":"512",
      "unit":"F",
      "pin":"1",
      "interval":1000,
      "x":154.5,
      "y":100,
      "wires":[  
         [  
            "58e7b387.4e7c2c"
         ]
      ]
   },
   {  
      "id":"58e7b387.4e7c2c",
      "type":"function",
      "z":"efc8cb66.40ad18",
      "name":"Fix Temperature",
      "func":"\nmsg.payload = msg.payload * 3.3 / 5;\nreturn msg;",
      "outputs":1,
      "noerr":0,
      "x":344.5,
      "y":100,
      "wires":[  
         [  
            "305c3b35.66dc74"
         ]
      ]
   },
   {  
      "id":"305c3b35.66dc74",
      "type":"function",
      "z":"efc8cb66.40ad18",
      "name":"Construct Payload",
      "func":"\nreturn {\n    payload: {\n            d: {\n                temp: msg.payload\n            }\n    }\n};",
      "outputs":1,
      "noerr":0,
      "x":535.5,
      "y":100,
      "wires":[  
         [  
            "36f38763.049aa8"
         ]
      ]
   },
   {  
      "id":"36f38763.049aa8",
      "type":"json",
      "z":"efc8cb66.40ad18",
      "name":"",
      "x":543.5,
      "y":165,
      "wires":[  
         [  
            "ef8d3cde.d735b",
            "d73ad5c5.870238"
         ]
      ]
   },
   {  
      "id":"ef8d3cde.d735b",
      "type":"wiotp out",
      "z":"efc8cb66.40ad18",
      "authType":"d",
      "qs":"true",
      "qsDeviceId":"",
      "deviceType":"",
      "deviceId":"",
      "event":"",
      "format":"json",
      "name":"",
      "x":731.5,
      "y":166,
      "wires":[  

      ]
   },
   {  
      "id":"d73ad5c5.870238",
      "type":"debug",
      "z":"efc8cb66.40ad18",
      "name":"",
      "active":true,
      "console":"false",
      "complete":"false",
      "x":699.5,
      "y":227,
      "wires":[  

      ]
   }
]
