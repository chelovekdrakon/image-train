import { Meteor } from 'meteor/meteor';

import { upload } from '/imports/api';
import { sendImage } from '/imports/api';

import { Images } from '/imports/models';

Meteor.methods({
  'image.upload': upload,
  'image.send': sendImage,
});

Picker.route('/image/:hash', function({ hash }, req, res) {
  const image = Images.findOne({ _id: hash });
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(image || 'no such image'));
});

Picker.route('/images', function(params, req, res) {
  const images = Images.find();
  const arr = [];
  for (let image of images) {
    arr.push(image._id);
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(arr || 'no images'));
});
