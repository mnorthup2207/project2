var bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        first_name: {
           type: DataTypes.STRING
           , allowNull: false 
        }, 
        last_name: {
            type: DataTypes.STRING
            , allowNull: false
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    User.associate = models => {
        User.hasMany(models.Raft, {
            onDelete: "cascade"
        });

        User.belongsTo(models.AcctType, {
            as: "account_type",
            foreignKey: {
                allowNull: false,
                defaultValue: 2
            }
        });
    }

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};