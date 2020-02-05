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
        },
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
            field: 'updated_at',
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