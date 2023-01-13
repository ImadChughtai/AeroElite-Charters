import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import CircularProgress from "@mui/material/CircularProgress";
import Navbar from "../../Components/Navbar";
import LocationSelector from "../../Components/Base/LocationSelector";
import DatePicker from "../../Components/Base/DatePicker";
import Button from "../../Components/Base/Button";
import dateFunc from "../../Configs/dateFunc";
import { searchTrips } from "../../Apis/services";
import TripCard from "../../Components/Base/Card";
import "./index.css";
import { TripApiResponse } from "../../Utils/Types/api.types";

type OptionsProps = { label: string; id: number };

const Home = () => {
  const [dateValue, setDateValue] = useState<Dayjs | null>(
    dateFunc(new Date()),
  );
  const [airportFrom, setAirportFrom] = useState<OptionsProps | null>(null);
  const [airportTo, setAirportTo] = useState<OptionsProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<TripApiResponse | null>(null);

  const searchTripFunc = async () => {
    setLoading(true);
    try {
      const result = await searchTrips({
        airportId1: airportFrom?.id,
        airportId2: airportTo?.id,
      });
      setData(result?.data);
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container>
      <Grid item className="topDiv">
        <Grid item lg={8} md={8} sm={12} xs={12} className="navBarParent">
          <Navbar />
          <h1 className="discoverTxt">Discover the real value of travel</h1>
        </Grid>
      </Grid>
      <Grid container className="selectionDiv">
        <Grid
          spacing={0}
          container
          lg={8}
          md={8}
          sm={10}
          xs={12}
          sx={{
            boxShadow: 3,
            backgroundColor: "white",
            borderRadius: 5,
            padding: 2,
            paddingBottom: 3,
          }}
        >
          <Grid
            item
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ paddingLeft: 1.4, paddingBottom: 1 }}
          >
            <h2>Where are you flying?</h2>
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} sx={{ padding: 1.4 }}>
            <LocationSelector label="From" onChange={setAirportFrom} />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12} sx={{ padding: 1.4 }}>
            <LocationSelector label="To" onChange={setAirportTo} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ padding: 1.4 }}>
            <DatePicker
              label="Departure Date"
              value={dateValue}
              setValue={setDateValue}
            />
          </Grid>

          <Grid item xl={8} lg={8} md={0} sm={12} xs={12} />
          <Grid
            item
            xl={4}
            lg={4}
            md={12}
            sm={12}
            xs={12}
            sx={{ paddingLeft: 1.4, paddingRight: 1.4 }}
          >
            <Button title="Search" onClick={searchTripFunc} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="cardsDiv">
        <Grid spacing={4} container lg={8} md={8} sm={10} xs={12}>
          {Array.isArray(data?.result) &&
            data?.result?.length &&
            data.result?.map((d, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid key={i} item xl={4} lg={4} md={6} sm={12} xs={12}>
                <TripCard data={d} />
              </Grid>
            ))}
          {data &&
            "trips" in data.result &&
            Array.isArray(data?.result?.trips) &&
            data?.result?.trips?.map((d, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid key={i} item xl={4} lg={4} md={6} sm={12} xs={12}>
                <TripCard data={d} />
              </Grid>
            ))}
          <Grid item lg={12} md={12} sm={12} xs={12} className="searchTripsTxt">
            {!airportFrom &&
              Array.isArray(data?.result) &&
              !data?.result?.length &&
              !loading && <Typography>Search Trips Now!</Typography>}
            {loading && <CircularProgress />}
          </Grid>
          {!loading &&
            data?.result &&
            (!Array.isArray(data?.result) || !data?.result?.length) &&
            "trips" in data.result &&
            !Array.isArray(data?.result?.trips) &&
            !data?.result?.trips &&
            "No trips found!"}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
