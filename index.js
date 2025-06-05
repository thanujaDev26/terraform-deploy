let express = require("express")
require("dotenv").config()

const app = express()

let port = process.env.PORT || 3001

app.get("/",async (req,res)=>{
	await res.status(200).send("Root GET Response")
})

app.get("/terraform", async(req,res)=>{
	await res.status(200).json({
		status : "success",
		message : "Terraform"
	})
})

app.listen(port, "0.0.0.0", ()=>{
	console.log(`App is runnins ${port}`)
})

