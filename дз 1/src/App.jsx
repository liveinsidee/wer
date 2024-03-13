// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Обратите внимание на изменения в импорте
import Header from './Header'
import Footer from './Footer';
import PostsPage from './PostsPage';
import CreatePostPage from './CreatePostPage';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes> {/* Изменение компонента здесь */}
                    <Route path="/" element={<PostsPage />} /> {/* Изменение здесь */}
                    <Route path="/create" element={<CreatePostPage />} /> {/* Изменение здесь */}
                </Routes> {/* Изменение компонента здесь */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
