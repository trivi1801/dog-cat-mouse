import {configure, addDecorator} from '@storybook/react';
import {withInfo} from '@storybook/addon-links';
addDecorator(withInfo);
function loadStories(){
    require('../stories/index.js');
}
configure(loadStories, module);