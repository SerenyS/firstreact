//import React from 'react';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import { CardContent } from '@mui/material';
// import Typography from '@mui/material/Typography';
// import Trophy from '@mui/icons-material/EmojiEvents';
//import Medal from './medal';

import React from 'react';
import Medal from './medal';

const Country = (props) => {
  const { country, medals, onIncrement, onDecrement, onDelete } = props;

  const getMedalsTotal = (country, medals) => {
    let sum = 0;
    medals.forEach(medal => { sum += country[medal.name]; });
    return sum;
  }
  return (
    <div className="country">
      <div className="name">
        { country.name }
        <span className="badge">
          { getMedalsTotal(country, medals) }
        </span>
      </div>
      { medals.map(medal =>
        <Medal 
          key={ medal.id } 
          country={ country } 
          medal={ medal } 
          onIncrement={ onIncrement } 
          onDecrement={ onDecrement } />
      ) }
      <button onClick={() => onDelete(country.id)}>delete</button>
      <hr />
    </div>
  );
}

export default Country;
// class Country extends React.Component {

//   totalMedals(country,medals){
//     let medalsTotal = 0;
//     medals.forEach(medal => { medalsTotal+= country[medal.name];});
//     return medalsTotal;
//   }

//     render() {
//       const {country,medals,increase, decrease ,deleteCountry} =this.props;
       
//       return (
//         <Box 
//         width={300} height={300} 
//         display="flex" 
//         alignItems="center"
//         justifyContent="center"
//         borderColor="pink">
          
//         <Card variant="outlined">
//            <CardContent>
//            <Typography variant="h5" component="div">{country.name}</Typography>
//            <Trophy/>
//            <span>{this.totalMedals(country,medals)}</span>
//           <div>
//           {medals.map(medal=> 
//             <Medal
//             key={ medal.id } 
//             country={ country } 
//             medal={ medal } 
//             increase={ increase } 
//             decrease={ decrease } />
            
//             )}
//              <button onClick={() => deleteCountry(country.id)}> Delete </button>
//           </div>
        
//           </CardContent>
//         </Card>
//         </Box>
//       );
//     }
//   }

//  export default Country;