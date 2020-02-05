module.exports = (sequelize, DataTypes) => {
    const UserType = sequelize.define("UserType", {
        type: {
            type: DataTypes.STRING
        },
        is_admin: {
            type: DataTypes.BOOLEAN
            , defaultValue: 0
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
    
    UserType.associate = (models) => {
        UserType.hasMany(models.User, {
            onDelete: "cascade" 
        });
    }

    return UserType;
};