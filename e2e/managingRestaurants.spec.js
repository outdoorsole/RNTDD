describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should allow creating a restaurant', async () => {
    // click add restaurant button
    await element(by.id('newRestaurantButton')).tap();

    // enter restaurant name
    await element(by.id('restaurantNameTextField')).typeText('Sushi Place');

    // click save button
    await element(by.id('saveRestaurantButton')).tap();

    // check to make sure restaurant appears in the list
    await expect(element(by.label('Sushi Place'))).toBeVisible();
    await expect(element(by.id('restaurantNameTextField'))).toBeNotVisible();
  });
});