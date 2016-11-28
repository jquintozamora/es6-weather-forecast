
test('check empty list', () => {
  const {WeatherComponent} = require('../../app/src/components/WeatherComponent');
  const wControl = new WeatherComponent([]);
  expect(wControl.toHtml()).toBe("");
});
