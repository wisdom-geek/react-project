import './index.css';
import Employee from './Components/Employee';
import { useState } from 'react';

function App() {  
  const showEmployees = true;

  const [employees, setEmployees] = useState([
    { 
      name: "Ambrose",
      role: "Developer",
      img: "https://images.pexels.com/photos/20323309/pexels-photo-20323309/free-photo-of-gurudongmar-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Ivy",
      role: "Designer",
      img: "https://images.pexels.com/photos/18876998/pexels-photo-18876998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    { 
      name: "Tracy",
      role: "Front end developer",
      img: "https://images.pexels.com/photos/20616946/pexels-photo-20616946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    { 
      name: "Ambrose",
      role: "Developer",
      img: "https://images.pexels.com/photos/20323309/pexels-photo-20323309/free-photo-of-gurudongmar-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Mary",
      role: "Designer",
      img: "https://images.pexels.com/photos/18876998/pexels-photo-18876998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    { 
      name: "Tracy",
      role: "Front end developer",
      img: "https://images.pexels.com/photos/20616946/pexels-photo-20616946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    { 
      name: "Ambrose",
      role: "Developer",
      img: "https://images.pexels.com/photos/20323309/pexels-photo-20323309/free-photo-of-gurudongmar-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      name: "Ivy",
      role: "Designer",
      img: "https://images.pexels.com/photos/18876998/pexels-photo-18876998.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    { 
      name: "Tracy",
      role: "Front end developer",
      img: "https://images.pexels.com/photos/20616946/pexels-photo-20616946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
  ]);

  const [role, setRole] = useState('dev');
    
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
          }}/>              
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee, index) => (            
              <Employee 
                key={index} 
                name={employee.name}
                role={employee.role} 
                img={employee.img}
              />
            ))}
          </div>
        </>     
      ) : (
        <p>You cannot see the employees</p>
      )}  
    </div>
  );
}

export default App;