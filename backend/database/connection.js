const mongoose = require('mongoose');


module.exports = {
    connectToMongoDB: (mongoURI) => {
        mongoose.connect(mongoURI)
            .then(() => console.log('MongoDB connected successfully!'))
            .catch(err => console.error('MongoDB connection error:',
                err));
    },
    disconnectToMongoDB: () => {
        mongoose.disconnect()
            .then(() => console.log('MongoDB disconnected successfully!'))
            .catch(err => console.error('MongoDB disconnected error:', err.message))
    }
};
