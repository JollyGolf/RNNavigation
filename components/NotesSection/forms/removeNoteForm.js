import React from 'react';
import { graphql, compose } from 'react-apollo';
import t from 'tcomb-form-native';

const RemoveForm = t.form.Form;

const RemoveNoteOptionForm = t.struct({
  title: t.String
});




const RemoveformStyles = {
  ...RemoveForm.stylesheet,
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

const optionsRemoveForm = {
  fields: {
    title: { error: 'Input title, Please' }
  },
  stylesheet: RemoveformStyles,
};

export { RemoveForm, RemoveNoteOptionForm, RemoveformStyles, optionsRemoveForm };