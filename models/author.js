'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.author.belongsTo(models.hometown)
      models.author.hasMany(models.book)
      models.author.belongsToMany(models.subject, {through: 'book'})
    }
  };
  author.init({
    name: {
      type: DataTypes.STRING,
      notEmpty: false
    },
    age: {
      type: DataTypes.INTEGER,
      isNumeric: false
    },
    sex: {
      type: DataTypes.STRING,
      isIn: [['foo', 'bar']]
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true
    },
    website: {
      type: DataTypes.STRING,
      isUrl: true
    },
    hometownId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};
