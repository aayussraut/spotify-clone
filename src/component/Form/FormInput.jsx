import { FormFeedback, FormGroup, FormText, Input, Label } from "reactstrap";

const FormInput = ({ name, type, placeholder, label, value, onChange }) => {
  return (
    <>
      <FormGroup className="mt-3">
        <Label className="fw-semibold">{label}</Label>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          className=" text-white bg-black border-secondary login-social-button"
          value={value}
          onChange={onChange}
        />
        {name == "username" && (
          <FormText>This appears on your profile.</FormText>
        )}

        {/* <FormFeedback>
          Please enter your Spotify username or email address.
        </FormFeedback> */}
      </FormGroup>
    </>
  );
};

export default FormInput;
