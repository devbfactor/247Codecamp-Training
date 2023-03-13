// import React, {useState, useEffect} from 'react'

// const CleanUp = () => {
//     const [time, setTime] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(time + 1);
//         }, 1000);

//         return () => {
//             cleanInterval(timer)
//         }
//     })
//   return (
//     <div>
//         <h3>{time} in seconds</h3>
//     </div>
//   )
// }

// export default CleanUp