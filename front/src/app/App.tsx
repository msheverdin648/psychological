import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Navigate } from 'widgets/Navigate/ui/Navigate';
import { AppRouter } from './router';
import './styles/index.scss'

function App() {
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
