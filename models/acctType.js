module.exports = (sequelize, DataTypes) => {
    const AcctType = sequelize.define("AcctType", {
        type: {
            type: DataTypes.INTEGER
        },
        is_admin: {
            type: DataTypes.BOOLEAN
            , defaultValue: 0
        }
    });
    
    AcctType.associate = (models) => {
        AcctType.hasMany(models.User, {
            onDelete: "cascade" 
        });
    }

    return AcctType;
};