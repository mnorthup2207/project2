module.exports = (sequelize, DataTypes) => {
    const DocType = sequelize.define("document_types", {
        type: {
            type: DataTypes.STRING
            , allowNull: false
            , defaultValues: "general"
        },

    });

    return DocType;
};