import { Plugin } from '@ckeditor/ckeditor5-core';
import PlaceholderEditing from './PlaceholderEditing';
import PlaceholderUI from './PlaceholderUI';

class Placeholder extends Plugin {
    static get requires() {
        return [PlaceholderEditing, PlaceholderUI];
    }
}

export default Placeholder