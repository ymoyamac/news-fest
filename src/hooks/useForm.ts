import { useEffect, useMemo, useState } from 'react';
import { SingupInitialData } from '../interfaces';

export const useForm = (initialForm: SingupInitialData, formValidations: any) => {
  const [formState, setFormState] = useState<any>(initialForm);
  const [formValidation, setFormValidation] = useState<any>({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) {
        return false;
      }
    }
    return true;
  }, [formValidation]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckValues: any = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckValues);
  };

  return {
    ...formState,
    ...formValidation,
    formState,
    isFormValid,
    onInputChange,
    onResetForm,
  };
};
