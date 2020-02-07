module.exports = (sequelize, DataTypes) => {
    const Stream = sequelize.define("Stream", {
        count: {
            type: DataTypes.INTEGER
        },
        createdBy: {
            type: DataTypes.INTEGER
        }
    });

    Stream.associate = models => {
        Stream.hasMany(models.Message, {
            onDelete: "cascade"
        });

        Stream.belongsToMany(models.User, {
            through: "UserStreams",
            as: "users",
            foreignKey: 'streamId',
            otherKey: 'userId'
        });
    };

    return Stream;
};