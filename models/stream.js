module.exports = (sequelize, DataTypes) => {
    const Stream = sequelize.define("Stream", {
        stream_id: {
            type: DataTypes.INTEGER
        },
        count: {
            type: DataTypes.INTEGER
        }
    });

    return Stream;
};