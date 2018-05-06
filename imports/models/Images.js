import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Images = new Mongo.Collection('Images');

Images.schema = new SimpleSchema({
    _id: String,
    buffer: Uint8Array,
});
Images.attachSchema(Images.schema);

export default Images;
