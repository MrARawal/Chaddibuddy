import react from 'react';
import Card from './Card';


function Cardlist({ robots }) {
	return (
        <div>
         {
        robots.map((user, i) => {
            return (<Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    DOB={robots[i].DOB}
                    Phone={robots[i].Phone}
                    />
                  );
             })
          }
        </div>
        );
}

export default Cardlist;