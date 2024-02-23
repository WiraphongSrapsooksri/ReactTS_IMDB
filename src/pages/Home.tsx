import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StarIcon from "@mui/icons-material/Star";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import movieData from "../assets/Movies.json";
import People from "../assets/People.json";
import Navbar from "../components/Navbar/Navbar";

function HomePage() {
  const movies = movieData;

  const settings = {
    dots: false, // Disable dots
    infinite: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true, // Enable arrows
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
  };

  const settingsPeople = {
    dots: false, // Disable dots
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true, // Enable arrows
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    nextArrow: <button className="slick-next">Next</button>,
    prevArrow: <button className="slick-prev">Previous</button>,
  };

  return (
    <>
      <Navbar />
      <Container sx={{ maxWidth: "80%" }}>
        <h2
          style={{
            borderLeft: "5px solid yellow",
            paddingLeft: "10px",
            color: "#FFFFFF",
            fontFamily: "Roboto",
          }}
        >
          Top 10 on IMDb this week
        </h2>

        <Slider {...settings}>
          {movies.map((data) => (
            // <p key={data.name}>{data.name}</p>

            <Card
              key={data.id}
              sx={{
                maxWidth: 240,
                maxHeight: 550,
                backgroundColor: "#1a1a1a",
                margin: "0 0px",
                minWidth: 185,
                minHeight: 274,
              }}
            >
              {/* <CardActionArea> */}
              <CardMedia
                component="img"
                width={200}
                height={330}
                image={data.img}
                alt="green iguana"
              />
              <CardContent>
                <h2
                  style={{
                    fontSize: "16px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  {" "}
                  <StarIcon
                    style={{
                      fontSize: "16px",
                      color: "#f5c518",
                      fontFamily: "Roboto",
                    }}
                  />{" "}
                  {data.pont}{" "}
                </h2>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: "18px",
                    color: "white",
                    fontFamily: "Roboto",
                  }}
                >
                  {data.name.length <= 18 ? (
                    <>
                      <p style={{ color: "#FFFFFF" }}>
                        {data.id + "\t"}
                        {data.name}
                      </p>
                    </>
                  ) : (
                    <>
                      <p style={{ color: "#FFFFFF" }}>
                        {data.id + "\t"}
                        {data.name.slice(0, 18) + "..."}
                      </p>
                    </>
                  )}
                </Typography>

                <Link to={`/movie/${data.name}`}>
                  <Button
                    variant="outlined"
                    sx={{ width: "100%", fontFamily: "Roboto" }}
                  >
                    {" "}
                    + Watchlist
                  </Button>
                </Link>

                {/* <Button variant="outlined" sx={{width:'100%'}}> + Watchlist</Button> */}
                <Button
                  variant="text"
                  sx={{
                    width: "100%",
                    color: "white",
                    marginTop: "10px",
                    fontFamily: "Roboto",
                  }}
                >
                  {" "}
                  <PlayArrowIcon />
                  Trailer
                </Button>
              </CardContent>
              {/* </CardActionArea> */}
            </Card>
          ))}
        </Slider>
        <h2
          style={{
            borderLeft: "5px solid yellow",
            paddingLeft: "10px",
            color: "#FFFFFF",
            fontFamily: "Roboto",
            marginTop: 100,
          }}
        >
          Born today
        </h2>
        <p style={{ color: "#FFFFFF", fontFamily: "Roboto", fontSize: 18 }}>
          People born on December 11
        </p>

        <Slider {...settingsPeople}>
          {People.map((data) => (
            <Box sx={{ padding: 4 }}>
              <Avatar
                alt={data.name}
                src={data.img}
                sx={{ width: "185px", height: "185px", margin: "auto" }}
              />
              <div style={{ textAlign: "center", fontFamily: "Roboto" }}>
                <p style={{ color: "#FFFFFF" }}>{data.name}</p>
                <p style={{ color: "#9C9C9C" }}>{data.age}</p>
              </div>
            </Box>
          ))}
        </Slider>
      </Container>
    </>
  );
}

export default HomePage;
