import { styled } from "@mui/material/styles";
import { Paper, InputBase, IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useForm } from "react-hook-form";
import type { SearchBarProps } from "@/types";

const SearchWrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "555px",
  margin: "0 auto",
  borderRadius: "15px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "327px",
  },
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  fontSize: 18,
  padding: "15px 24px",
  "& input": {
    "&::placeholder": {
      color: theme.palette.secondary.main,
      opacity: 1,
    },
  },
}));

interface FormInputs {
  ip: string;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { register, handleSubmit } = useForm<FormInputs>();

  return (
    <form onSubmit={handleSubmit(onSearch)}>
      <SearchWrapper elevation={0}>
        <StyledInput
          placeholder="Search for any IP address or domain"
          inputProps={register("ip", { required: true })}
        />
        <IconButton
          type="submit"
          sx={{
            backgroundColor: "primary.main",
            borderRadius: 0,
            px: 3,
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}>
          <ArrowForwardIcon sx={{ color: "white" }} />
        </IconButton>
      </SearchWrapper>
    </form>
  );
};
