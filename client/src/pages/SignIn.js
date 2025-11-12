import React, { useState, useEffect } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import SignIn from 'components/SignIn';
import validateForm from 'utils/validateForm';
import useFormInput from 'hooks/useFormInput';
import { useAuth } from 'context/AuthContext';

function SignInPage() {
  const location = useLocation();
  const username = useFormInput('');
  const password = useFormInput('');
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username: username.value, password: password.value };
    const errors = validateForm(userData);
    if (errors) {
      setErrors(errors);
    } else {
      setErrors({}); // Clear previous errors
      login(userData)
        .then(() => {
          // Login successful, redirect will happen via useEffect
        })
        .catch((err) => {
          console.error('Login error:', err);
          const errorMessage = 
            err.response?.data?.message || 
            err.message || 
            'Failed to login. Please check your credentials.';
          setErrors({ message: errorMessage });
        });
    }
  };

  if (redirect) {
    const { from } = location.state || { from: { pathname: '/' } };
    return <Redirect to={from} />;
  }

  return (
    <SignIn
      username={username}
      password={password}
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
}

export default SignInPage;
