const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { JSDOM } = require('jsdom');

Enzyme.configure({ adapter: new Adapter() });

const template = '<!doctype html><html><body><div id="root"></div></body></html>';
const dom = new JSDOM(template);

global.document = dom.window.document;
global.window = dom.window;
