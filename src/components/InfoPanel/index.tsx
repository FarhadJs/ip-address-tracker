// src/components/InfoPanel/index.tsx
import { styled } from "@mui/material/styles";
import { Paper, Box, Typography } from "@mui/material";
import type { InfoPanelProps } from "@/types";

const InfoBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  borderRadius: "15px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(1),
    gap: theme.spacing(1),
    textAlign: "center",
  },
}));

const InfoSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(0, 3),
  position: "relative",

  "&:not(:last-child)::after": {
    content: '""',
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    height: "75%",
    width: "1px",
    backgroundColor: theme.palette.divider,
  },

  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(1.5),
    width: "100%",

    "&:not(:last-child)::after": {
      display: "none",
    },

    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
      paddingBottom: theme.spacing(2),
    },
  },
}));

const InfoLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  letterSpacing: "1px",
  fontSize: "12px",
  marginBottom: theme.spacing(1),
  fontWeight: 700,

  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
    marginBottom: theme.spacing(0.5),
  },
}));

const InfoValue = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "26px",
  fontWeight: 500,
  lineHeight: 1.2,

  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));

export const InfoPanel = ({ data }: InfoPanelProps) => {
  return (
    <InfoBox elevation={3}>
      <InfoSection>
        <InfoLabel>IP Address</InfoLabel>
        <InfoValue>{data.ip || "-"}</InfoValue>
      </InfoSection>

      <InfoSection>
        <InfoLabel>Location</InfoLabel>
        <InfoValue>
          {data.location.city && data.location.country
            ? `${data.location.city}, ${data.location.country}`
            : "-"}
        </InfoValue>
      </InfoSection>

      <InfoSection>
        <InfoLabel>Timezone</InfoLabel>
        <InfoValue>
          {data.location.timezone ? `UTC ${data.location.timezone}` : "-"}
        </InfoValue>
      </InfoSection>

      <InfoSection>
        <InfoLabel>ISP</InfoLabel>
        <InfoValue>{data.isp || "-"}</InfoValue>
      </InfoSection>
    </InfoBox>
  );
};
