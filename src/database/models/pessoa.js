'use strict';

const isCpfValid = require('../../utils/cpfValidatorHelper.js');

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
				scope: { status: 'matriculado' },
				as: 'aulasMatriculadas'
			});

			Pessoa.hasMany(models.Matricula, {
				foreignKey: 'estudante_id',
				as: 'allMatriculas'
			});
		}
	}
	Pessoa.init({
		nome: {
			type: DataTypes.STRING,
			validate: {
				len: {
					args: [2, 50],
					msg: 'Nome deve possuir de 2 a 50 caracteres'
				}
			}
		},
		email: {
			type: DataTypes.STRING,
			validate: {
				isEmail: {
					args: true,
					msg: 'Email informado é invalido'
				}
			}
		},
		cpf: {
			type: DataTypes.STRING,
			validate: {
				isValid: (cpf) => {
					if (!isCpfValid(cpf)) throw new Error('CPF Invalido');
				}
			}
		},
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