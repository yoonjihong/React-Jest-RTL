import { useFormik } from 'formik';

import Form from '~components/Form';

interface AddFormProps {
  afterSubmit: (data: any) => void;
}

const AddForm = ({ afterSubmit }: AddFormProps) => {
  const { values, errors, submitForm, handleChange } = useFormik({
    initialValues: {
      content: '',
    },
    validate: values => {
      const errors: any = {};

      if (values.content.trim() === '') {
        errors.content = '내용을 입력해주세요';
      }

      return errors;
    },
    onSubmit: async (values, formik) => {
      formik.resetForm();

      afterSubmit(values.content);
    },
  });

  return (
    <div>
      <h1>TODO 등록</h1>

      <Form data-testid="form" onSubmit={submitForm}>
        <div>
          <Form.Input
            name="content"
            onChange={handleChange}
            placeholder="내용을 입력해주세요"
            value={values.content}
            data-testid="todoInput"
          />

          {errors.content && <div data-testid="inputError">{errors.content}</div>}
        </div>

        <Form.Button data-testid="addButton">등록하기</Form.Button>
      </Form>
    </div>
  );
};

export default AddForm;
