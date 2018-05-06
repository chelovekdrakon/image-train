import { Images } from '/imports/models';

const upload = (name, buffer) => {
    try {
        const uniqueId = Images.insert({ _id: name, buffer });
        if (uniqueId) {
            return {
                status: 200
            }
        } else {
            return {
                status: 404
            }
        }
    } catch(err) {
        console.dir(err)
        if (err.code === 11000) {
            return {
                status: 404,
                reason: 'this image already exists'
            }
        }
    }
    
};

export default upload;