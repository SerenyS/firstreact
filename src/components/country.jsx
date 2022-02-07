import React from 'react';
//import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Trophy from '@mui/icons-material/EmojiEvents';
import Medal from './medal';


  
class Country extends React.Component {

  totalMedals(country,medals){
    let medalsTotal = 0;
    medals.forEach(medal => { medalsTotal+= country[medal.name];});
    return medalsTotal;
  }
 
    // constructor(props) {
    //   super(props);
    
    //   this.state = {
    //     name: this.props.country.name,
    //     gold: this.props.country.gold,
    //   };
    // }
    
    

    // handleIncrement() {
    //     this.setState({
    //       gold: this.state.gold + 1
    //     });
    //   };

    //   handleReduction() {
    //     this.setState({
    //       gold: this.state.gold -1
    //     });
    //   };

    render() {
      const {country,medals,increase, decrease ,deleteCountry} =this.props;
       
      return (
        <Box 
        width={300} height={300} 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        borderColor="pink">
          
        <Card variant="outlined">
           <CardContent>
           <Typography variant="h5" component="div">{country.name}</Typography>
           <Trophy/>
           <span>{this.totalMedals(country,medals)}</span>
          <div>
          {medals.map(medal=> 
            <Medal
            key={ medal.id } 
            country={ country } 
            medal={ medal } 
            increase={ increase } 
            decrease={ decrease } />
            
            )}
             <button onClick={() => deleteCountry(country.id)}> Delete </button>
          </div>
        
          </CardContent>
        </Card>
        </Box>
      );
    }
  }

  export default Country;