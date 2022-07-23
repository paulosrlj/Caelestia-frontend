import axios from 'axios';
import { Buffer } from 'buffer';
import { useEffect, useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { uploadTheoricLessonImageCallBack } from './uploadImageCallback';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function EditorContainer() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    const text = convertToRaw(editorState.getCurrentContent());
    // console.log(text);
    // console.log('JSON', JSON.stringify(text));
    localStorage.setItem('texto', JSON.stringify(text));
    setEditorState(newEditorState);
  };

  useEffect(() => {
    if (localStorage.getItem('texto') !== null) {
      const textoBuscado = EditorState.createWithContent(convertFromRaw(JSON.parse(localStorage.getItem('texto'))));
      setEditorState(textoBuscado);
    }
  }, []);

  const handleSubmit = () => {
    const data = convertToRaw(editorState.getCurrentContent());
    console.log(data);

    // const strData = JSON.stringify(data);
    // console.log(strData);

    const newData = {};
    newData.xpEarned = 100;
    newData.lessonName = 'Lição genérica';
    // newData.lessonContent = data;

    // const binary = new TextEncoder().encode(data);
    // const blob = new Blob([binary], { type: 'application/json;charset=utf-8' });

    // console.log(blob.arrayBuffer());

    // newData.lessonContent = blob;
    // const strigfied = JSON.stringify(newData);
    // console.log(strigfied);

    // console.log('blob');

    const arr = JSON.stringify({
      xpEarned: 100,
      lessonName: 'Lição genérica',
      draftJsText: {
        blocks: data.blocks,
        entityMap: data.entityMap,
      },
    });

    // console.log(JSON.stringify([1, 2, 3]))

    console.log(arr);

    axios.post('http://localhost:8082/theoriclesson/', arr, {
      headers: {
      // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
      },
    }).then((r) => console.log(r)).catch((e) => console.log(e));
  };

  return (
    <div className="editor">
      <Editor
        // toolbarHidden
        // readOnly
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbar={{

          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: {
            uploadCallback: uploadTheoricLessonImageCallBack,
            alt: { present: true, mandatory: true },
          },
        }}
      />

      <button type="button" onClick={handleSubmit}>Click</button>
    </div>
  );
}

export default EditorContainer;
