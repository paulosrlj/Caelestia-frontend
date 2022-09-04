import {
  Flex,
} from '@chakra-ui/react';

import { BsFillEraserFill } from 'react-icons/bs';

import { useEffect, useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { uploadTheoricLessonImageCallBack } from './uploadImageCallback';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function EditorContainer({ handleEditorChange, isReadOnly }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    const text = convertToRaw(editorState.getCurrentContent());
    setEditorState(newEditorState);

    handleEditorChange((oldState) => {
      const content = JSON.stringify(text);
      const newState = { ...oldState };
      newState.content = content;
      return newState;
    });
  };

  useEffect(() => {
    if (localStorage.getItem('texto') !== null) {
      const textoBuscado = EditorState.createWithContent(convertFromRaw(JSON.parse(localStorage.getItem('texto'))));
      setEditorState(textoBuscado);
    }
  }, []);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      w="100vw"
      overflow="hidden"
      my="20px"
    >
      <Editor
        toolbarHidden={isReadOnly}
        readOnly={isReadOnly}
        editorStyle={{
          width: '85vw',
          height: 'auto',
          border: '1px solid #A044FF',
          padding: '10px',
          boxShadow: '1px 1px 5px #A044FF',
        }}
        editorState={editorState}
        onEditorStateChange={isReadOnly ? '' : onEditorStateChange}
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
          remove: { icon: BsFillEraserFill, className: undefined, component: undefined },
        }}
      />

    </Flex>
  );
}

export default EditorContainer;
