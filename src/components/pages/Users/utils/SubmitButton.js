import { LoadingButton } from "@mui/lab";

export default function SubmitButton(props) {
  const { name, onClick } = props;

  return (
    <LoadingButton
      fullWidth
      size="large"
      type="submit"
      variant="contained"
      onClick={onClick}
    >
      {name}
    </LoadingButton>
  );
}
