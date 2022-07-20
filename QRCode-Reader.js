// This code was designed to work with the video-example.html to process images to handle QR codes
// last edited on 7/19/22

import QrScanner from './qr-scanner.min.js'

	//this function interfaces all the HTML stuff with the tools in this library
function processImage(){
	let paragraph = document.getElementById("result")
	const picture = document.getElementById("i")
	scan(picture)
	.then(scanResult=>{
		console.log("processedImage")
		paragraph.textContent = scanResult
		paragraph.style.color = "black";
		console.log(scanResult)
	})
	.catch(error=>{
		console.log("processedImage Failed")
		paragraph.textContent = error
		paragraph.style.color = "red";
		console.log(error)
	})
}
window.processImage = processImage//this is important to let the html access the processImage

	//This function takes the image Blob/File and will ( return a promise that ) returns either an error message, or the QR code message
async function scan(image){
	try{
		const result = await QrScanner.scanImage(image, {returnDetailedScanResult: true})
		console.log("scan successful")
		console.log(result)
		return result.data
	}
	catch(error){
		console.log("scan not successful")
		console.log(error || 'QR code error')
		throw new Error(error || 'QR code error')
	}
}