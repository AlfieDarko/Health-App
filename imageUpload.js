import axios from 'axios';
import cloudinary from 'cloudinary';

export default function fileUploadMiddleware (req, res) {
  cloudinary.uploader.upload_stream((result) => {
    axios({
      url:'/api/workouts', //API endpoint that needs file URL from CDN
      method: 'post',
      data: {
        url: result.secure_url,
        name: req.body.name,
        description: req.body.discription
      },
    }).then((response) => {
      res.status(200).json(response.data.data);
    }).catch((error) => {
      res.status(500).json(error.response.data)
    });
  }).end(req.file.buffer)
}
