import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';
import { Navigate } from 'widgets/Navigate/ui/Navigate';
import { AppRouter } from './router';
import './styles/index.scss'

function App() {
    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <div className="content-page">
                    <Header />
                    <Navigate />
                    <AppRouter />
                    <Footer />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
