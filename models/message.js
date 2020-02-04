module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("Message", {
        stream_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sequence: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        message: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 250]
            }
        },
        from_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Message;
};