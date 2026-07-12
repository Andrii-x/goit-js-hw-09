const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const saveToStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const restoreFromStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (!savedData) {
    return;
  }

  try {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email !== undefined) {
      formData.email = parsedData.email.trim();
      form.elements.email.value = formData.email;
    }

    if (parsedData.message !== undefined) {
      formData.message = parsedData.message.trim();
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Failed to parse feedback form state', error);
  }
};

restoreFromStorage();

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email' || name === 'message') {
    formData[name] = value.trim();
    saveToStorage();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
});
