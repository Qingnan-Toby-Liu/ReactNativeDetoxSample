describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    // debugger;
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should have shoppingListView screen', async () => {
    await expect(element(by.id('shoppingListView'))).toBeVisible();
  });

  it('should have shoppingTitle', async () => {
    await expect(element(by.id('shoppingTitle'))).toBeVisible();
  });

  it('should have AddItemButton', async () => {
    await expect(element(by.id('AddItemButton'))).toBeVisible();
  });

  it('should have shoppingItemText', async () => {
    await expect(element(by.id('shoppingItemText'))).toBeVisible();
  });

  it('should show shopping item screen after tap', async () => {
    await element(by.id('shoppingItemText')).replaceText('testItem');

    await element(by.id('AddItemButton')).tap();

    await expect(element(by.text('testItem'))).toBeVisible();
  });
});
