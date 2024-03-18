import EditEmployee from "./EditEmployee";

function Employee(props) {
    return ( 
        <div className="m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="block mx-auto h-24 rounded-full h-[100px] w-[100px] block mx-auto h-24 sm:mx-0 sm:shrink-0" src={props.img} alt="Woman's Face" />
            <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                        {props.name}
                    </p>
                    <p className="text-slate-500 font-medium">
                        {props.role}
                    </p>
                </div>
                <EditEmployee/>
                
            </div>
        </div>
    );
}

export default Employee;




/* <h1>Employee {props.name ? props.name : 'No name'} </h1>
{/* <p>{props.role ? props.role : 'No role'}</p> */
// {props.role ? <h2 class='role'>{props.role}</h2> :<h2 class='norole'>No role</h2>}
// {props.name ? <p class= 'name'>{props.name}</p>:<p class='no name'>'no name'</p>} */}