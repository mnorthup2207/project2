module.exports = (sequelize, DataTypes) => {
    const UserStreams = sequelize.define("UserStreams", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    });

    return UserStreams;
}