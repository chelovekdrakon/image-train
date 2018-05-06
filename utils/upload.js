import md5 from 'js-md5';

const upload = (file) => new Promise((res, rej) => {
    const reader = new FileReader();

    reader.onload = ({ target: { result } }) => {
        const buffer = new Uint8Array(result);
        const name = md5(buffer);

        Meteor.call('image.upload', name, buffer, (err, result) => {
            if (err) {
                rej(err);
            } else {
                res(result);
            }
        });
    };

    reader.onerror = (err) => {
        rej(err);
    };

    reader.readAsArrayBuffer(file);
});

export default upload;