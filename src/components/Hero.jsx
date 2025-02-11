// function Hero() {
//   return (
//     <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
//       <div className="p-8 md:p-12 lg:px-16 lg:py-24">
//         <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//           <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit
//           </h2>

//           <p className="hidden text-gray-500 md:mt-4 md:block">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
//             tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
//             et fermentum, augue. Aliquet amet volutpat quisque ut interdum
//             tincidunt duis.
//           </p>

//           <div className="mt-4 md:mt-8">
//             <a
//               href="#"
//               className="inline-block rounded-sm bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
//             >
//               Know More !
//             </a>
//           </div>
//         </div>
//       </div>

//       <img
//         alt=""
//         src="https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         className="h-56 w-full object-cover sm:h-full"
//       />
//     </section>
//   );
// }

// export default Hero;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./card";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Card
              image="https://via.placeholder.com/300"
              title="Awesome Card"
              description="This is an improved card with better styling and usability."
              link="/details"
            />
          }
        />
        <Route path="/details" element={<h1>Details Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
