module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('OTS', 'Block_id', Sequelize.STRING(64), {
			type: 'UNIQUE',
			after: 'id',
			references: {
				model: 'Block',
				key: 'id',
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('OTS', 'Block_id');
	}
}
