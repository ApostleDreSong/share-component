import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import FacebookIcon from '@material-ui/icons/Facebook';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  link: {
    color: 'black',
  },
});

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const options = [
    <a className={classes.link}  href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:3001" target="_blank" rel="noopener noreferrer"><FacebookIcon /></a>,
    <a className={classes.link} href="https://wa.me/whatsappphonenumber/?text=urlencodedtext" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>,
    <a className={`${classes.link} twitter-share-button`} href="https://twitter.com/intent/tweet?text=Hello%20world" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>,
  ];

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ShareIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
         {options.map((option, index)=> (
          <MenuItem key={index} selected={option === <WhatsAppIcon />} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
