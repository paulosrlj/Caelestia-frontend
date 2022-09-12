import {
  Button, FormControl,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import TextAreaFormik from '../../../components/Form/TextAreaFormik';
import TextFieldFormik from '../../../components/Form/TextFieldFormik';

function CreateClassroomForm() {
  const validateClassroomCreation = (values) => {
    const errors = {};
    if (!values.classroomName) {
      errors.classroomName = 'O nome da turma não pode ser vazio';
    }
    if (!values.description) {
      errors.description = 'Coloque uma descrição para a turma!';
    }
    return errors;
  };
  const notifySuccess = (message) => toast.success(message);
  return (
    <Formik
      initialValues={{ classroomName: '', description: '', teacherId: '#f29fh1fasf' }}
      validate={validateClassroomCreation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log('enviado');
          console.log(values);
          setSubmitting(false);
          notifySuccess('Turma criada com sucesso');
        }, 2000);
      }}
    >
      {({ isSubmitting }) => (
        <Form style={{ width: '100%' }}>
          <Field type="text" name="classroomName">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.classroomName} isRequired mb="10px">
                <TextFieldFormik
                  field={field}
                  form={form}
                  placeholder="Nome da turma"
                  formLabel="Nome da turma"
                />
              </FormControl>
            )}
          </Field>
          <Field type="text" name="description">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.description} isRequired mt="20px">
                <TextAreaFormik
                  field={field}
                  form={form}
                  placeholder="Uma breve descrição da turma"
                  formLabel="Descrição da turma"
                />
              </FormControl>
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
          >
            Criar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CreateClassroomForm;
