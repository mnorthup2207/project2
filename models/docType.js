module.exports = (sequelize, DataTypes) => {
    const DocType = sequelize.define("DocType", {
        type: {
            type: DataTypes.STRING
            , allowNull: false
            , defaultValues: "general"
        },

    });

    DocType.associate = models => {
        DocType.hasMany(models.Raft, {
            onDelete: "cascade"
        });
    };

    return DocType;
};