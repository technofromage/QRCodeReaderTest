//This code was designed to work with the video-example.html to process images to handle QR codes
// last edited on 7/14/22

import QrScanner from './qr-scanner.min.js'

	//this function only exists for me to tell if the functions are loading
function test(){
	console.log("hello!")
}

	//this function interfaces all the HTML stuff with the tools in this library
function processImage(){
	const picture = document.getElementById("i");
	let scanResult = scan(picture)
	document.getElementById("result").textContent = scanResult
}
window.processImage = processImage

	//takes a blob image/file and returns a string output for the qr code data, or an empty string if no data is read
function scan(image){
	QrScanner.scanImage(image, {returnDetailedScanResult: true})
		.then(
			result=>{//TODO: process the result to see errors that don't throw (like QR code not found)
				console.log(result)
				return result.data
			}
			)
		.catch(
			error => {
				console.log(error || 'QR code error')
				return ""
			}
			);
}