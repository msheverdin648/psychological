import { Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Navigate } from 'widgets/Navigate/ui/Navigate';
import { PageLoader } from 'widgets/PageLoader';
import { ScrollToAnchor } from './lib/scrollToAnchor';
import { AppRouter } from './router';
import { setupStore } from './store/store';
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
            <Provider store={setupStore()}>
                <Suspense fallback={<PageLoader/>}>
                    <div className="content-page">
                        <div>
                            <Header />
                            <Navigate />
                        </div>
                        <AppRouter />
                        <Footer />
                    </div>
                </Suspense>
            </Provider>
        </div>
    );
}

export default App;
