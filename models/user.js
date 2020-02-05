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
        // createdAt: {
        //     type: DataTypes.DATE(3),
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
        //     field: 'created_at',
        // },
        // updatedAt: {
        //     type: DataTypes.DATE(3),
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
        //     field: 'updated_at',
        // }

    });

    User.associate = models => {
        User.hasMany(models.Raft, {
            onDelete: "cascade"
        });

        User.hasMany(models.Message, {
            onDelete: "cascade"
        });

        User.belongsTo(models.UserType, {
            foreignKey: {
                allowNull: false,
                defaultValue: 2
            }
        });

        User.belongsToMany(models.Stream, {
            through: "UserStreams",
            as: "streams",
            foreignKey: 'userId',
            otherKey: 'streamId'
        });
    };

    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
};