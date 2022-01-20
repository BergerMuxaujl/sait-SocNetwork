import React from "react";
import Preloader from "../components/FindUsers/preloader";

export const withSuspense = (Component) => {
    return (props) => {
        return (
            <React.Suspense fallback={<Preloader />}>
                <Component {...props} />
            </React.Suspense>
        );
    };
};
// class SuspenseComponent extends React.Component {
//     render() {
//         return <Suspense fallback={<div>Загрузка...</div>}>
//             <Component />
//         </Suspense>
//     }
// }
