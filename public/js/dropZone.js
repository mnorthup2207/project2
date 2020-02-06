
Dropzone.options.uploadWidget = {
    paramName: 'file',
    maxFilesize: 2, // MB
    maxFiles: 1,
    dictDefaultMessage: 'Drag an image here to upload, or click to select one',
    headers: {
        'x-csrf-token': document.querySelector('meta[name=csrf-token]').getAttributeNode('content').value,
    },
    acceptedFiles: 'image/*',
    init: function () {
        this.on('success', function (file, resp) {
            console.log(file);
            console.log(resp);
        });
        this.on('thumbnail', function (file) {
            if (file.accepted !== false) {
                if (file.width < 640 || file.height < 480) {
                    file.rejectDimensions();
                } else {
                    file.acceptDimensions();
                }
            }
        });
    },
    accept: function (file, done) {
        file.acceptDimensions = done;
        file.rejectDimensions = function () {
            done('The image must be at least 640 x 480px');
        };
    }
};
