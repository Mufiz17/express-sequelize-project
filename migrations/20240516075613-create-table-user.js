'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                    notEmpty: true,
                    len: {
                        args: [3, 255],
                        msg: 'Email must be between 3 and 255 characters'
                    }
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};