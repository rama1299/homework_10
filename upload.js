const express = require('express');
const router = express.Router();
const multer = require ('multer');
const path = require('path');

const diskStorage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, path.join(__dirname, "/upload"))
    },
    filename: (req, file, cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

router.use('/upload', express.static(path.join(__dirname, './upload')))

router.post('/upload/image',
    multer({ storage: diskStorage }).single("image"),
    (req, res) =>{
        const file = req.file.path;
        if(!file){
            return res.status(400).json({
                message: "No file uploaded"
            })
        }else{
            return res.status(200).json({
                message: "File uploaded",
            })
        }
})


module.exports = router;