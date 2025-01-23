import { styled } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";
import type { InfoPanelProps } from "@/types";

const InfoBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "15px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const InfoSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "0 20px",
  "&:not(:last-child)": {
    borderRight: `1px solid ${theme.palette.secondary.light}`,
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
    "&:not(:last-child)": {
      borderRight: "none",
    },
  },
}));

export const InfoPanel = ({ data }: InfoPanelProps) => {
  return (
    <InfoBox elevation={3}>
      <InfoSection>
        <Typography variant="caption" color="secondary.main" gutterBottom>
          IP ADDRESS
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          {data.ip}
        </Typography>
      </InfoSection>
      <InfoSection>
        <Typography variant="caption" color="secondary.main" gutterBottom>
          LOCATION
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          {`${data.location.city}, ${data.location.country}`}
        </Typography>
      </InfoSection>
      <InfoSection>
        <Typography variant="caption" color="secondary.main" gutterBottom>
          TIMEZONE
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          UTC {data.location.timezone}
        </Typography>
      </InfoSection>
      <InfoSection>
        <Typography variant="caption" color="secondary.main" gutterBottom>
          ISP
        </Typography>
        <Typography variant="h6" fontWeight={500}>
          {"\n" + data.isp + "\n"}
        </Typography>
      </InfoSection>
    </InfoBox>
  );
};
