import React from 'react';
import { graphql, compose } from 'react-apollo';
import t from 'tcomb-form-native';

const UpdateForm = t.form.Form;

const UpdateNoteOptionForm = t.struct({
  CurrentTitle: t.String,
  NewTitle: t.String,
  NewContent: t.String
});

const UpdateformStyles = {
  ...UpdateForm.stylesheet,
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

const optionsUpdateForm = {
  fields: {
    title: { error: 'Input title, Please' },

  },
  stylesheet: UpdateformStyles,
};

export { UpdateForm, UpdateNoteOptionForm, UpdateformStyles, optionsUpdateForm };