// npm init -y

const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")
const { restart } = require('nodemon')

server.use(express.static('public'))

server.set("view engine" , "njk")

nunjucks.configure("views" , {
    express: server,
    autoescape: false,
    noCache: true
   
})

server.get("/", function(req, res) {
    const about = {
        avatar_url:"https://avatars3.githubusercontent.com/u/37512922?s=460&u=72aeddfbbb08901220d3dae46779fe7e22d95f89&v=4",
        name: "Clerton Filho",
        role: "Student Software Engineering - UFC and Front-end Developer",
        description:" “One must learn by doing the thing, for though you think you know it, you have no certainty until you try.” - Aristóteles " , 
        links:[
             {   name: "Facebook" , url: "https://www.facebook.com/clerton.filho7/" },
             {   name: "Github" , url: "https://github.com/clertonf" },
             {   name: "Instagram" , url: "https://www.instagram.com/clerton_filho/" }
            
        ]
    }
    return res.render("about" , {about})
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", {items: videos})

})

server.get("/video" , function(req, res) {
    
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
  
    })
    if(!video){
        return res.send("Video not found!")
    }
    return res.render("video" , {item: video})

})

server.listen(5000, function () {
    console.log("server is running")
})