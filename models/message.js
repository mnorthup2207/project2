module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define("Message", {
        sequence: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 
        message: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 250]
            }
        }
    });

    Message.associate = models => {
        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Message.belongsTo(models.Stream, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Message;
};