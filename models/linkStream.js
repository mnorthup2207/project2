module.exports = (sequelize, DataTypes) => {
    const LinkStream = sequelize.define("link_streams", {
        user_id: {
            type: DataTypes.INTEGER
        },
        stream_id: {
            type: DataTypes.INTEGER
        }
    });

    return LinkStream;
};