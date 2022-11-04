import { ButtonContainer } from "./Button.styles";

export function Button({ label, onClick }) {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
}
