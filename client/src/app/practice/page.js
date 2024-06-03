import React from "react";
import { Input } from "@nextui-org/react";

export default function Practice() {
  return (
    <div>
      <div className="flex flex-auto w-1/2 border border-10 border-indigo-600 text-center">
        <p>Hello</p>
      </div>
      {/* <div classname="flex flex-col ">
        <div className="w-1/2 border-b-4 border-indigo-500">01</div>
        <div>02</div>
        <div>03</div>
      </div> */}
    </div>
  );
}


// import React from "react";
// import { Input } from "@nextui-org/react";
// import { Button } from "@nextui-org/react";
// import Link from "next/link";

// export default function Register() {
//   return (
//     <div className="flex flex-col mx-auto w-1/4 bg-white shadow shadow-lg text-center">
//       <h1 className="text-2xl text-bold text-center mt-2">
//         Signup and Start Learning
//       </h1>
//       <div className="flex flex-col gap-4 m-5 p-2">
//         <Input type="fullname" label="Full Name" />
//         <Input type="email" label="Email" />
//         <Input type="password" label="Password" />
//         <Button color="primary">Signup</Button>
//         <p>
//           Already have an account?
//           <span className="text-lg text-sky-400">
//             <Link href="/login"> Login</Link>
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

