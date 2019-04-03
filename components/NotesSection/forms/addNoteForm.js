import t from 'tcomb-form-native';

const AddForm = t.form.Form;

const AddNoteOptionForm = t.struct({
  title: t.String,
  content: t.String
});

const AddformStyles = {
  ...AddForm.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10,
      padding: 10
    },
    error: {
      padding: 10
    }
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 15,
      marginBottom: 3,
      fontWeight: '600',
      padding: 10
    },
    error: {
      color: 'red',
      fontSize: 15,
      marginBottom: 3,
      fontWeight: '600'
    }
  },
};

const optionsAddForm = {
  fields: {
    title: { error: 'Input title, Please' },
    content: { error: 'Input content, Please' }
  },
  stylesheet: AddformStyles,
};

export { AddForm, AddNoteOptionForm, AddformStyles, optionsAddForm };