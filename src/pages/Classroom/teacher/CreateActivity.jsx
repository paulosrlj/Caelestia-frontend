/* eslint-disable no-unused-vars */
import {
  Button, Flex, FormControl, Image, Input, ListItem, Text, UnorderedList,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';
import DateFormik from '../../../components/Form/DateFormik';
import SelectFormik from '../../../components/Form/SelectFormik';
import TextAreaFormik from '../../../components/Form/TextAreaFormik';
import TextFieldFormik from '../../../components/Form/TextFieldFormik';
import uploadImageCallBack from '../../../util/uploadImageCallback';

import { PdfIcon, ImageIcon } from '../assets';

function CreateActivity() {
  const [files, setFiles] = useState([]);

  const imagesTypes = [
    'image/png',
    'image/jpg',
    'image/jpeg',
  ];

  const modules = [
    {
      id: '@98dasdsdf',
      name: 'Astronomia antiga',
    },
    {
      id: '@876511',
      name: 'Astronomia antiga II',
    },
    {
      id: '@155512',
      name: 'Cosmologia',
    },
    {
      id: '@251725',
      name: 'Astronomia Moderna',
    },
  ];

  const [addedLessons, setAddedLessons] = useState([]);
  const [moduleId, setModuleId] = useState([]);

  const [lessons, setLessons] = useState([
    { id: '12718e', name: 'Lição I' },
    { id: '12raf', name: 'Lição II' },
    { id: 'asg2113', name: 'Lição III' },
  ]);

  const handleFilesChange = (e) => {
    setFiles((oldState) => ([...oldState, e.target.files[0]]));
    console.log(e.target.files[0]);
    console.log(files);
  };

  const onSelectChange = (e) => {
    console.log(e.target.value);
    setAddedLessons((oldState) => {
      if (!addedLessons.includes(e.target.value)) {
        return ([...oldState, e.target.value]);
      }

      return oldState;
    });
  };

  const onModuleChange = (e) => {
    console.log(e.target.value);
    setModuleId(e.target.value);
  };

  const validateActivityCreation = (values) => {
    const errors = {};
    console.log(errors);
    if (!values.activityName) {
      errors.activityName = 'O nome da turma não pode ser vazio';
    }
    if (!values.description) {
      errors.description = 'Coloque uma descrição para a turma!';
    }
    if (!values.dueDate) {
      errors.dueDate = 'A lição precisa de uma data!';
    }

    // if (!values.moduleId) {
    //   errors.moduleId = 'Selecione um módulo!';
    // }

    // if (values.lessons.length === 0) {
    //   errors.lessons = 'Selecione ao menos uma lição!';
    // }

    return errors;
  };

  const handleCreateActivity = () => {
    files.forEach(async (f) => {
      const url = await uploadImageCallBack(f, 'classroomFiles');
      console.log(url);
    });
  };

  const notifySuccess = (message) => toast.success(message);

  return (
    <Formik
      initialValues={{
        activityName: '',
        description: '',
        dueDate: '',
        classroomId: '',
        teacherId: '',
        moduleId: '',
        lessons: [],
      }}
      validate={validateActivityCreation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log('enviado');
          console.log(values);
          setSubmitting(false);
          notifySuccess('Atividade criada com sucesso');
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ width: '100%' }}>
          <Field type="text" name="activityName">
            {({ field, form }) => (

              <TextFieldFormik
                name="activityName"
                field={field}
                form={form}
                placeholder="Nome da atividade"
                formLabel="Nome da atividade"
              />
            )}
          </Field>
          <Field type="text" name="description">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.description} isRequired mt="20px">
                <TextAreaFormik
                  name="description"
                  field={field}
                  form={form}
                  placeholder="A descrição do que se trata essa atividade"
                  formLabel="Descrição da atividade"
                />
              </FormControl>
            )}
          </Field>
          <Field type="date" name="dueDate">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.dueDate} isRequired mt="20px">
                <DateFormik
                  name="dueDate"
                  field={field}
                  form={form}
                  placeholder="A data em que esta lição deverá ser entregue"
                  formLabel="Data de entrega da lição"
                />
              </FormControl>
            )}
          </Field>
          <Flex flexDir="column">
            <Text>Faça aqui o upload de documentos e imagens</Text>
            <Input pt="5px" type="file" placeholder="aqui" onChange={handleFilesChange} />
            <Flex
              h="150px"
              mt="10px"
              border="1px dashed black"
              p="10px"
              overflowY="scroll"
              flexWrap="wrap"
            >
              {files.map((f) => (
                <Flex
                  key={f.lastModified}
                  w="100px"
                  p="5px"
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                >
                  <Image
                    src={imagesTypes.includes(f.type) ? ImageIcon : PdfIcon}
                    w="50px"
                    h="50px"
                    alt="Pdf icon"
                  />
                  <Text>{f.name.substring(0, 10)}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Field type="select" name="moduleId">
            {({ field, form }) => (
              <SelectFormik
                selectOptions={modules}
                name="moduleId"
                field={field}
                form={form}
                placeholder="Módulo"
                formLabel="Módulo da lição"
                onSelectChange={onModuleChange}
                value={moduleId}
              />
            )}
          </Field>

          <Field type="select" name="lessons">
            {({ field, form }) => (
              <>
                <SelectFormik
                  selectOptions={lessons}
                  name="lessons"
                  field={field}
                  form={form}
                  formLabel="Lição do módulo"
                  onSelectChange={onSelectChange}
                />
                <Flex
                  h="150px"
                  mt="10px"
                  border="1px dashed black"
                  p="10px"
                  overflowY="scroll"
                  flexDir="column"
                >
                  <UnorderedList>
                    {addedLessons.length > 0 && addedLessons.map((l) => (
                      <ListItem>{l}</ListItem>
                    ))}
                  </UnorderedList>
                </Flex>
              </>
            )}
          </Field>

          <Button
            type="submit"
            color="white"
            backgroundColor="pure_green.100"
            _hover={{ backgroundColor: 'pure_green.200' }}
            my="20px"
            w="100%"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            onClick={handleCreateActivity}
          >
            Criar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateActivity;
