import Placeholder from './placeholder/Placeholder';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { List } from '@ckeditor/ckeditor5-list';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import * as React from 'react';
import ClassicEditor from './ClassicEditor'

function App() {
    return (
        <div className='App'>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                config={{
                    toolbar: ['heading', 'bold', 'italic', 'numberedList', 'bulletedList'],
                    plugins: [Essentials, Paragraph, Heading, List, Bold, Italic, Placeholder],
                    placeholderConfig: { types: ["date", "color"] }
                }} />
        </div>
    );
}

export default App;
