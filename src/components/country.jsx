import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Trophy from '@mui/icons-material/EmojiEvents';
import countries from '../countries.json'


  
class Country extends React.Component {
 
    constructor(props) {
      super(props);
    
      this.state = {
        name: this.props.country.name,
        gold: this.props.country.gold,
      };
    }
    


    handleIncrement() {
        this.setState({
          gold: this.state.gold + 1
        });
      };

      handleReduction() {
        this.setState({
          gold: this.state.gold -1
        });
      };

    render() {
      return (
        <Box 
        width={300} height={300} 
        display="flex" 
        alignItems="center"
        justifyContent="center">
          
        <Card variant="outlined">
           <CardContent>
           <Typography variant="h5" component="div">{this.state.name}</Typography>
           <Trophy/>
          <div>
            Gold Metals:{this.state.gold}
          </div>
          <Button variant="outlined" onClick={(e) => this.handleIncrement(e)}>+</Button>
          <Button variant="outlined" disabled={ this.state.gold === 0 }  onClick={(e) => this.handleReduction(e)}>-</Button>
          </CardContent>
        </Card>
        </Box>
      );
    }
  }

  export default Country;