module.exports = (sequelize, DataTypes) => {
    const AcctType = sequelize.define("account_types", {
        type: {
            type: DataTypes.INTEGER
        },
        is_admin: {
            type: DataTypes.BOOLEAN
            , defaultValue: 0
        }
    });

    return AcctType;
};