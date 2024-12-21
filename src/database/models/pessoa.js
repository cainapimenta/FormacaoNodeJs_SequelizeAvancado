'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pessoa extends Model {
		static associate(models) {
			Pessoa.hasMany(models.Curso, {
				foreignKey: 'docente_id'
			});

			Pessoa.hasMany(models.Matricula, {
				foreignKey: 'estudante_id',
				as: 'aulasMatriculadas'
			});
		}
	}
	Pessoa.init({
		nome: DataTypes.STRING,
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: {
					args: true,
					msg: 'Email informado é invalido'
				}
			}
		},
		cpf: DataTypes.STRING,
		ativo: DataTypes.BOOLEAN,
		role: DataTypes.STRING
	}, {
		sequelize,
		modelName: 'Pessoa',
		tableName: 'pessoas',
		paranoid: true,
		defaultScope: {
			where: {
				ativo: true
			}
		},
		scopes: {
			getAll: {
				where: {}
			}
		}
	});
	return Pessoa;
};