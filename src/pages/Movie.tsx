import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import movies from "../assets/Movies.json";
import Navbar from "../components/Navbar/Navbar";
import "./Movie.css";
function MoviePage() {
  const { name } = useParams();
  const selectedMovie = movies.find((movie) => movie.name === name);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const svgphoto = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-10.6-3.47l1.63 2.18 2.58-3.22a.5.5 0 0 1 .78 0l2.96 3.7c.26.33.03.81-.39.81H9a.5.5 0 0 1-.4-.8l2-2.67c.2-.26.6-.26.8 0zM2 7v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1s-1 .45-1 1z"></path>
    </svg>
  );

  const svgvdieo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"></path>
    </svg>
  );

  const svgstar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      color="yellow"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
    </svg>
  );

  const svgstarsky = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
      color="#45A3F2"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
    </svg>
  );

  const svgarrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4 0-7.4-3-8-6.9l10-.1v2c0 .5.6.7 1 .4l3-3c.2-.2.2-.5 0-.7l-3-3c-.4-.4-.9-.1-.9.3v2h-10c.4-4 3.8-7 7.9-7 4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path>
    </svg>
  );
  const about = () =>
    selectedMovie?.about.map((item) => (
      <Stack
        direction="row"
        spacing={1}
        key={item.category}
        margin={"0px 10px 0px 0px"}
      >
        <Chip
          label={item.category}
          size="medium"
          variant="outlined"
          sx={{
            fontSize: "18px",
            color: "#ffffff",
            border: "1px solid #ffffff",
          }}
        />
      </Stack>
    ));

  const DirectorList = ({
    title,
    data,
  }: {
    title: string;
    data: { nameDirector: string }[];
  }) => (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 1,
        marginBottom: 1,
        fontSize: "18px",
      }}
    >
      <Grid item xs={1}>
        <ListItemText primary={title} />
      </Grid>

      <Grid item xs={11}>
        {data.map((Director, index) => (
          <React.Fragment key={Director.nameDirector}>
            {index > 0 && <> &bull; </>}
            {Director.nameDirector}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );

  const WritersList = ({
    title,
    data,
  }: {
    title: string;
    data: { nameWriters: string }[];
  }) => (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 1,
        marginBottom: 1,
        fontSize: "18px",
      }}
    >
      <Grid item xs={1}>
        <ListItemText primary={title} />
      </Grid>

      <Grid item xs={11}>
        {data.map((writer, index) => (
          <React.Fragment key={writer.nameWriters}>
            {index > 0 && <> &bull; </>}
            {writer.nameWriters}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );

  const StarsList = ({
    title,
    data,
  }: {
    title: string;
    data: { nameStars: string }[];
  }) => (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        marginTop: 1,
        marginBottom: 1,
        fontSize: "18px",
      }}
    >
      <Grid item xs={1}>
        <ListItemText primary={title} />
      </Grid>

      <Grid item xs={11}>
        {data.map((Stars, index) => (
          <React.Fragment key={Stars.nameStars}>
            {index > 0 && <> &bull; </>}
            {Stars.nameStars}
          </React.Fragment>
        ))}
      </Grid>
    </Grid>
  );

  const rowone = () => (
    <Grid container spacing={0} sx={{ height: "84px" }}>
      <Grid item xs={6}>
        <Typography variant="h4">{selectedMovie?.name}</Typography>
        <Box sx={{ display: "flex" }}>
          <p>{selectedMovie?.year + "\t"}&bull;</p>
          <p>{selectedMovie?.Rated + "\t"}&bull;</p>
          <p>{selectedMovie?.time}&bull;</p>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
        <Grid sx={{ textAlign: "center", marginRight: 2 }}>
          IMDb RATING
          <Grid>
            <Grid>
              <button className="imdb-rating-button">
                <div className="rowA">
                  <div className="col">{svgstar()}</div>
                  <div className="col">
                    <div className="row">
                      <div className="row" style={{ display: "flex" }}>
                        <p style={{ fontSize: "24px", margin: 0 }}>
                          {selectedMovie?.pont}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "20px",
                            color: "#BBBBBB",
                          }}
                        >
                          /10
                        </p>
                      </div>

                      <p
                        style={{
                          margin: 0,
                          textAlign: "start",
                          color: "#BBBBBB",
                        }}
                      >
                        {selectedMovie?.allvote}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "block",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          YOUR RATING
          <Box
            sx={{
              // marginLeft: 2,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>{svgstarsky()}</Box>
            <Box sx={{ fontSize: "24px" }}>{selectedMovie?.Rated}</Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "block",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          POPULARITY
          <Box
            sx={{
              marginLeft: 2,
              height: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Box>{svgarrow()}</Box>
            <Box sx={{ fontSize: "24px" }}>{selectedMovie?.popula}</Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );

  const rowtwo = () => (
    <Grid container spacing={0.5}>
      <Grid item xs={3} maxHeight={"100vh"}>
        <img src={selectedMovie?.img} alt="" width={"100%"} />
      </Grid>
      <Grid item xs={7} maxHeight={"100vh"}>
        <ReactPlayer
          ref={playerRef}
          url={selectedMovie?.vdo}
          width={"100%"}
          height={"100%"}
          controls={true}
          playing={isPlaying}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          style={{ maxWidth: "100vw", maxHeight: "100vh" }}
        />
      </Grid>
      <Grid item xs={2} maxHeight={"100vh"}>
        <Grid
          item
          sx={{
            backgroundColor: "rgba(50, 50, 50, 0.8)",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBlock: 0.5,
            marginTop: -0.5,
          }}
        >
          {" "}
          <Box>{svgvdieo()}</Box>
          <p style={{ margin: 0 }}>45 VIDEOS</p>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "rgba(50, 50, 50, 0.8)",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>{svgphoto()}</Box>
          <p style={{ margin: 0 }}>99+ Photos</p>
        </Grid>
      </Grid>
    </Grid>
  );

  const rowthree = () => (
    <Grid container spacing={0} marginBottom={5}>
      <Grid item xs={8}>
        <Grid sx={{ display: "flex" }}>{about()}</Grid>
        <Grid>
          <p style={{ maxWidth: "90%" }}>{selectedMovie?.aboutstory}</p>
        </Grid>
        <List
          sx={{
            py: 0,
            width: "100%",
            borderColor: "white",
            fontSize: "20px",
          }}
        >
          <Divider component="li" sx={{ borderColor: "white" }} />
          <DirectorList title="Director" data={selectedMovie?.Director || []} />
          <Divider component="li" sx={{ borderColor: "white" }} />
          <WritersList title="Writers" data={selectedMovie?.Writers || []} />
          <Divider component="li" sx={{ borderColor: "white" }} />
          <StarsList title="Stars" data={selectedMovie?.Stars || []} />
          <Divider component="li" sx={{ borderColor: "white" }} />
        </List>
      </Grid>
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            fontFamily: "Roboto",
            paddingLeft: 5,
          }}
        >
          <Button
            variant="text"
            sx={{
              width: "100%",
              display: "flex",
              backgroundColor: "yellow",
              alignItems: "center",
              color: "black",
            }}
          >
            <Box
              sx={{
                width: "15%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AddIcon sx={{ fontSize: "30px" }} />
            </Box>
            <Box sx={{ width: "65%", textAlign: "start" }}>
              <p style={{ margin: 0 }}>Add to Watchlist</p>
              <p style={{ margin: 0 }}>
                added by {selectedMovie?.allvote} users
              </p>
            </Box>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <KeyboardArrowDownIcon sx={{ fontSize: "30px" }} />
            </Box>
          </Button>
        </Grid>

        <Grid
          sx={{ marginTop: 5, display: "flex", width: "100%", paddingLeft: 5 }}
        >
          <Box sx={{ textAlign: "start" }}>
            {selectedMovie?.user_reviews} User reviews
          </Box>
          <Box sx={{ marginLeft: 2, textAlign: "start" }}>
            {selectedMovie?.Critic_reviews} Critic_reviews
          </Box>
        </Grid>

        <Grid
          sx={{
            marginTop: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            width: "100%",
            paddingLeft: 5,
          }}
        >
          <p
            style={{
              backgroundColor: "green",
              padding: "5px",
              marginRight: "5px",
            }}
          >
            {selectedMovie?.Metascore}
          </p>
          <p>Metascore</p>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <>
      <Navbar></Navbar>
      <Container
        sx={{
          maxWidth: "80%",
          color: "#FFFFFF",
          fontFamily: "Roboto",
        }}
      >
        <Link to={`/`} style={{ textDecoration: 'none' }}>
          <p
            style={{
              color: "yellow",
              fontFamily: "Roboto",
              fontSize: "34px",
              cursor: "pointer",
              margin:0
            }}
          >
            <ArrowBackIosIcon /> Back
          </p>
        </Link>

        <br />
        <Grid container spacing={1} sx={{ padding: 1 }}>
          {rowone()}
        </Grid>
        <Grid container spacing={1} sx={{ padding: 1 }}>
          {rowtwo()}
        </Grid>
        <Grid container spacing={1} sx={{ padding: 1 }}>
          {rowthree()}
        </Grid>
      </Container>
    </>
  );
}

export default MoviePage;
