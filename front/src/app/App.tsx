import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Navigate } from 'widgets/Navigate/ui/Navigate';
import { ScrollToAnchor } from './lib/scrollToAnchor';
import { AppRouter } from './router';
import './styles/index.scss'

function App() {

    const location = useLocation()
    

    useEffect(
        ()=>{
            if(location.hash){
                ScrollToAnchor(location.hash),[location.hash]
            }
        }
    )


    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback={<Loader/>}>
                <div className="content-page">
                    <div>
                        <Header />
                        <Navigate />
                    </div>
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
