const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const testRestaurant = await Restaurant.create({
            name: seedRestaurant[0].name,
            location: seedRestaurant[0].location,
            cuisine: seedRestaurant[0].cuisine,
            rating: seedRestaurant[0].rating
        })
        expect(testRestaurant.name).toEqual(seedRestaurant[0].name)
    });

    test('can create a Menu', async () => {
        // TODO - write test
        const testMenu = await Menu.create({title: seedMenu[0].title})
        expect(testMenu.title).toEqual(seedMenu[0].title)
    });

    test('can find Restaurants', async () => {
        // TODO - write test
        const foundRestaurant = await Restaurant.findOne({where: {name: seedRestaurant[0].name}})
        expect(foundRestaurant.id).toEqual(1)
    });

    test('can find Menus', async () => {
        // TODO - write test
        const foundMenu = await Menu.findOne({where: {title: seedMenu[0].title}})
        expect(foundMenu.id).toEqual(1)
    });

    test('can delete Restaurants', async () => {
        // TODO - write test
        await Menu.destroy({where: {title: seedMenu[0].title}})
        const foundMenu = await Menu.findOne({where: {title: seedMenu[0].title}})
        expect(foundMenu).toEqual(null)
    });
})