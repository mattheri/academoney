// À retravailler


import { Form } from "@/common";
// import { validateWithCredentials } from "../actions";

const SensitiveActionComponent = () => {
  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const isValid = "test";//await validateWithCredentials(formData);
      if (isValid) {
        console.log('Validation successful, proceeding with sensitive action.');
        // Code to proceed with the sensitive action
      }
    } catch (error:any) {
      console.error('Validation failed:', error.message);
      // Handle validation failure (e.g., display an error message)
    }
  };

  return (
    <div>
      <Form onSubmit={handleValidate}>
        <label>Confirm Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Validate</button>
      </Form>
    </div>
  );
};

export default SensitiveActionComponent;
