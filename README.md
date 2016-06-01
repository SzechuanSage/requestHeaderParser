# requestHeaderParser
Free Code Camp Request Header Parser Microservice

## Requirements
express module  
`npm install express`

## Usage
Run the server. It will start listening to a specified port, or to port 3000 by default.  
`node server.js`  
  
In a browser navigate to [http://localhost:3000/](http://localhost:3000/)  
(replace 3000 with appropriate port). 

The microservice will return a JSON string containing the IP address, language and software information from the request header.

For example  
`{"ipaddress":"49.187.18.126","language":"en-US","software":"Windows NT 6.1; WOW64"}`
