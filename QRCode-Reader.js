//This code was designed to work with the video-example.html to process images to handle QR codes
//for future developers: look into "barcodeDetector" API, it is only available on MAC and Andriod as of writing
// it may work faster for being offline
// last edited on 7/13/22

function test(){
	console.log("hello!")
}


function scan(){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', "https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld",async=false )
	xhr.setRequestHeader
	xhr.getResponseHeader("Access-Control-Allow-Origin","<origin>")
	// xhr.getResponseHeader('Content-type', 'application/json')

	// file = new File()
	// fileURL = URL.createObjectURL(file);
	// console.log(fileURL)
	// let params = ``
	xhr.send()//Figure out how to do this correctly
	console.log("data sent")
}