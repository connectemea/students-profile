import { LoadingButton } from "@mui/lab";

export default function SubmitButton(props) {
  const { name, onClick ,disabled} = props;

  return (
    <LoadingButton
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </LoadingButton>
  );
}
