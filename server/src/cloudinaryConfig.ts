import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: 'your-cloud-name',
  api_key: 'your-api-key',
  api_secret: 'your-api-secret',
});

export default cloudinary;
