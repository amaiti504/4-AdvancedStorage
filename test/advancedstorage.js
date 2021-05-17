const AdvancedStorage = artifacts.require('AdvancedStorage');
contract('AdvancedStorage',() => {
    let advancedStorage = null;
    before(async () => {
        advancedStorage = await AdvancedStorage.deployed();
    });
    it('Should add an element to the array',async () => { 
        await advancedStorage.add(100);
        const result = await advancedStorage.ids(0);
        assert(result.toNumber() === 100);
    });

    it('Should return the correct element from the array',async () => {
        await advancedStorage.add(234);
        const result = await advancedStorage.get(1);
        assert(result.toNumber() === 234);
    });

    it('Should return the entire array',async () => {
        //await advancedStorage.add(234);
        const rawids = await advancedStorage.getAll();
        const ids = rawids.map(id => id.toNumber());
        assert.deepEqual(ids,[100,234]);
    });

    it('Should return the length of the array',async () => {
        await advancedStorage.add(432);
        const result = await advancedStorage.length();
        assert(result.toNumber() === 3);
    });
});