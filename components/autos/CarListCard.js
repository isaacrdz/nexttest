import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  modelFormatting: {
    textTransform: "capitalize",
    textDecoration: "none",
  },

  modelFormattingUpper: {
    textTransform: "uppercase",
    textDecoration: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CarlistCard = ({ vehicle }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link href={`/autos/${vehicle.make.name}/${vehicle.slug}`}>
        <a>
          <CardMedia
            className={classes.media}
            image="https://carone.com.mx/wp-content/uploads/2021/02/index_WRMH21-1.png"
            title="Paella dish"
          />
        </a>
      </Link>
      <CardContent>
        <Link href={`/marcas/${vehicle.make.name}`}>
          <a style={{ textDecoration: "none", color: "black" }}>
            <Typography
              variant="subtitle1"
              className={[
                classes.modelFormatting,
                classes.modelFormattingUpper,
              ]}
            >
              {vehicle.make.name}{" "}
            </Typography>
          </a>
        </Link>
        <Box display="flex" flexDirection="row">
          <Link href={`/autos/${vehicle.make.name}/${vehicle.slug}`}>
            <a style={{ textDecoration: "none", color: "black" }}>
              <Typography variant="h6" className={classes.modelFormatting}>
                {`${vehicle.model} ${vehicle.year}`}
              </Typography>
            </a>
          </Link>
        </Box>

        <Typography variant="h7" gutterBottom style={{ fontSize: 17 }}>
          Desde $160,000
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CarlistCard;
