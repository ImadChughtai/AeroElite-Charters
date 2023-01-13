import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Grid } from "@mui/material";
import { Trip } from "../../../Utils/Types/api.types";

const TripCard = ({ data }: { data: Trip }) => (
  <Card sx={{ minWidth: 275, height: 200 }}>
    <CardContent>
      <Chip
        label={data?.tripCategory?.name}
        color="primary"
        variant="outlined"
        size="small"
        sx={{ marginBottom: 1 }}
      />

      <Typography component="div">{data?.title}</Typography>

      <Grid container flexDirection="row" justifyContent="space-between">
        <Grid item>
          <Typography variant="body2" fontWeight={600} sx={{ marginTop: 2 }}>
            Date:{" "}
            {data?.fromDate ? new Date(data?.fromDate).toDateString() : "N/A"}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" fontWeight={600} sx={{ marginTop: 2 }}>
            Budget: {data?.budget || "N/A"}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default TripCard;
